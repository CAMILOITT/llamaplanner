import { ScheduleStrategy, StatusProgressStrategy, Strategy } from "./types"

export function cleanStrategyData(data: string): Omit<Strategy, "id"> {
  const cleanedData: Strategy = JSON.parse(data.replace(/(```JSON|```)/g, ""))
  return cleanedData
}

export function calculatePercentage(schedule: ScheduleStrategy) {
  let countTotalTask = 0
  let countFinishedTask = 0
  let countInProgressTask = 0
  for (const week in schedule) {
    const weekSchedule = schedule[week]
    for (const day in weekSchedule) {
      const tasks = weekSchedule[day]
      for (const task of tasks) {
        countTotalTask++
        if (task.status.status === StatusProgressStrategy.FINISHED)
          countFinishedTask++
        if (task.status.status === StatusProgressStrategy.IN_PROGRESS)
          countInProgressTask++
      }
    }
  }
  const progress = Math.round(
    ((countFinishedTask + countInProgressTask / 2) / countTotalTask) * 100,
  )

  return progress
}

export function getStrategiesWorking(strategies: Strategy) {
  const schedule = strategies.schedule
  scheme: for (const week in schedule) {
    const weekSchedule = schedule[week]
    for (const day in weekSchedule) {
      const tasks = weekSchedule[day]
      for (const task of tasks) {
        if (task.status.status === StatusProgressStrategy.IN_PROGRESS) {
          return { task: task.task, idea: task.idea }
        }
      }
    }
  }
  return { task: "", idea: [] }
}

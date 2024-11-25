import { ScheduleStrategy, Strategy } from './types';

export function cleanStrategyData(data: string): Omit<Strategy, 'id'> {
  const cleanedData: Strategy = JSON.parse(data.replace(/(```JSON|```)/g, ''));
  return cleanedData;
}

export function calculatePercentage(schedule: ScheduleStrategy) {
  let status=[]
  Object.values(schedule).map((week)=>{
    Object.values(week).map((task)=>{
      status = task.map(()=>{})
    })
  })
}

export interface SchemeResponseStrategy {
  name: string
  main_objective: string
  audience: {
    segment: string
    localization: string
  }
  tactics: string[]
  kpis: string[]
  budget: string
  duration: string
  channels: string[]
  schedule: ScheduleStrategy
}

export interface Strategy extends SchemeResponseStrategy {
  id: string
  status: StatusProgressStrategy
  progress: number
}

export enum StatusProgressStrategy {
  IN_PROGRESS = "En progreso",
  FINISHED = "Finalizado",
  CANCELED = "Cancelado",
  PAUSED = "Pausado",
  NOT_STARTED = "No iniciado",
  PENDING = "Pendiente",
}

export interface TaskStrategy {
  task: string
  duration: string
  idea: string[]
}

interface WeekSchedule {
  [key: string]: TaskStrategy[]
}

interface ScheduleStrategy {
  [key: string]: WeekSchedule
}

export interface ActionStrategy {
  task: string
  month: number
  week: number
}

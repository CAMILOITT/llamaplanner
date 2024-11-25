import {
  StatusProgressStrategy,
  Strategy,
} from "@/feature/createStrategy/types"
import { create } from "zustand"

interface State {
  strategy: Strategy
  updateStrategy: (strategy: Strategy) => void
}

export const useStrategyStore = create<State>(set => ({
  strategy: {
    id: "asdflk",
    status: StatusProgressStrategy.NOT_STARTED,
    progress: 0,
    audience: {
      segment: "",
      localization: "",
    },
    budget: "",
    duration: "",
    channels: [],
    tactics: [],
    kpis: [],
    main_objective: "",
    name: "",
    schedule: {
      month_1: {
        week_1: [
          {
            task: "crear redes sociales",
            duration: "1 dia",
            idea: [],
          },
          {
            task: "crear redes sociales",
            duration: "1 dia",
            idea: [],
          },
        ],
        week_2: [
          {
            task: "crear redes sociales",
            duration: "1 dia",
            idea: [],
          },
          {
            task: "crear redes sociales",
            duration: "1 dia",
            idea: [],
          },
        ],
      },
    },
  },
  updateStrategy: (strategy: Strategy) => {
    set({ strategy })
  },
}))

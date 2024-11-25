import { Strategy } from "@/feature/createStrategy/types"
import { create } from "zustand"

interface State {
  listStrategy: Strategy[]
  addStrategies: (strategy: Strategy[]) => void
  setStrategies: (strategy: Strategy[]) => void
  removeStrategy: (id: string) => void
  addStrategy: (strategy: Strategy) => void
}

export const useAllStrategyStore = create<State>(set => ({
  listStrategy: [],
  setStrategies: (strategies: Strategy[]) => {
    set(() => ({ listStrategy: strategies }))
  },
  addStrategies: (strategies: Strategy[]) => {
    set(prev => ({ listStrategy: [...prev.listStrategy, ...strategies] }))
  },
  removeStrategy: (id: string) => {
    set(prev => ({
      listStrategy: prev.listStrategy.filter(strategy => strategy.id !== id),
    }))
  },
  addStrategy: (strategy: Strategy) => {
    set(prev => ({ listStrategy: [...prev.listStrategy, strategy] }))
  },
}))

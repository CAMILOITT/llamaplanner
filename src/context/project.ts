import { Project } from "@/feature/createProject/types"
import { create } from "zustand"

interface State {
  project: Project
  setProject: (project: Project) => void
}

export const useProjectStore = create<State>(set => ({
  project: {
    nameEnterprise: "",
    description: "",
    sectorIndustry: "",
    location: "",
    descriptionBrief: "",
    values: "",
    productsServices: "",
    competitors: [],
    missionVisionBrief: "",
  },
  setProject: (project: Project) => {
    set({ project })
  },
}))

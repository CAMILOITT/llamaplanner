import { Project } from '@/feature/createProject/types';
import { create } from 'zustand';

interface State {
  project: Project;
  updateProject: (project: Project) => void;
}

export const useProjectStore = create<State>((set) => ({
  project: {
    nameEnterprise: '',
    description: '',
    sectorIndustry: '',
    location: '',
    descriptionBrief: '',
    values: '',
    productsServices: '',
    competitors: [],
    missionVisionBrief: '',
  },
  updateProject: (project: Project) => {
    set({ project });
  },
}));

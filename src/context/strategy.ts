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
    id: "asd",
    name: "Estrategia 1",
    progress: 0,
    status: StatusProgressStrategy.NOT_STARTED,
    main_objective: "Tener más ventas",
    audience: {
      segment: "Empresas medianas",
      localization: "Ecuador",
    },
    tactics: [
      "Crear contenido atractivo en Instagram",
      "Utilizar hashtags relevantes",
      "Lanzar campaña publicitaria en Instagram",
      "Interactuar con la audiencia en Instagram",
    ],
    kpis: [
      "Incremento del 20% en las ventas",
      "Aumento del 15% en la cantidad de seguidores en Instagram",
    ],
    budget: "500 USD",
    duration: "3 meses",
    channels: ["Instagram"],
    schedule: {
      month_1: {
        week_1: [
          {
            task: "Crear contenido atractivo en Instagram",
            duration: "2 semanas",
            idea: [
              "Crear un calendario de contenido para el mes",
              "Crear un post de presentación de la empresa",
              "Crear un post de promoción de servicios",
            ],
          },
          {
            task: "Utilizar hashtags relevantes",
            duration: "1 semana",
            idea: [
              "Investigar y seleccionar hashtags relevantes para la industria",
              "Crear una lista de hashtags para utilizar en los posts",
            ],
          },
        ],
        week_2: [
          {
            task: "Lanzar campaña publicitaria en Instagram",
            duration: "1 semana",
            idea: [
              "Crear un anuncio publicitario para promocionar los servicios",
              "Configurar el presupuesto y la duración de la campaña",
            ],
          },
          {
            task: "Interactuar con la audiencia en Instagram",
            duration: "1 semana",
            idea: [
              "Responder a comentarios y mensajes",
              "Crear un evento en vivo para interactuar con la audiencia",
            ],
          },
        ],
      },
      month_2: {
        week_1: [
          {
            task: "Crear contenido de promoción",
            duration: "2 semanas",
            idea: [
              "Crear un post de promoción de un servicio específico",
              "Crear un post de promoción de un producto específico",
            ],
          },
          {
            task: "Utilizar Instagram Stories",
            duration: "1 semana",
            idea: [
              "Crear un historial de Instagram Stories",
              "Utilizar las características de Instagram Stories para promocionar los servicios",
            ],
          },
        ],
        week_2: [
          {
            task: "Crear contenido de educación",
            duration: "1 semana",
            idea: [
              "Crear un post de educación sobre un tema específico",
              "Crear un post de educación sobre un servicio específico",
            ],
          },
          {
            task: "Interactuar con la audiencia en Instagram",
            duration: "1 semana",
            idea: [
              "Responder a comentarios y mensajes",
              "Crear un evento en vivo para interactuar con la audiencia",
            ],
          },
        ],
      },
      month_3: {
        week_1: [
          {
            task: "Crear contenido de promoción",
            duration: "2 semanas",
            idea: [
              "Crear un post de promoción de un servicio específico",
              "Crear un post de promoción de un producto específico",
            ],
          },
          {
            task: "Utilizar Instagram Reels",
            duration: "1 semana",
            idea: [
              "Crear un Reel de promoción de un servicio específico",
              "Crear un Reel de promoción de un producto específico",
            ],
          },
        ],
        week_2: [
          {
            task: "Crear contenido de educación",
            duration: "1 semana",
            idea: [
              "Crear un post de educación sobre un tema específico",
              "Crear un post de educación sobre un servicio específico",
            ],
          },
          {
            task: "Interactuar con la audiencia en Instagram",
            duration: "1 semana",
            idea: [
              "Responder a comentarios y mensajes",
              "Crear un evento en vivo para interactuar con la audiencia",
            ],
          },
        ],
      },
    },
  },
  updateStrategy: (strategy: Strategy) => {
    set({ strategy })
  },
}))

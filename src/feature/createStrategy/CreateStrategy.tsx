import InputText from "@/components/ui/InputText"
import { useAllStrategyStore } from "@/context/allStrategy"
import { useProjectStore } from "@/context/project"
import { saveStrategy } from "@/services/firebase/db/strategy"
import { useLocation, useNavigate } from "react-router"
import { exampleData1, exampleData2, expectedFormat } from "./const"
import { StatusProgressStrategy } from "./types"
import { cleanStrategyData } from "./utils"

interface PropCreateStrategy {}

export default function CreateStrategy({}: PropCreateStrategy) {
  const navigator = useNavigate()
  const project = useProjectStore(store => store.project)
  const adaddStrategyd = useAllStrategyStore(store => store.addStrategy)
  const location = useLocation()

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const dataForm = {
      objectiveStrategy: formData.get("objectiveStrategy") as string,
      budget: formData.get("budget") as string,
      targetAudience: formData.get("targetAudience") as string,
      locationAudience: formData.get("locationAudience") as string,
      duration: formData.get("duration") as string,
      channelPriority: formData.get("channelPriority") as string,
    }

    if (
      !dataForm.objectiveStrategy ||
      !dataForm.budget ||
      !dataForm.targetAudience ||
      !dataForm.locationAudience ||
      !dataForm.duration ||
      !dataForm.channelPriority
    ) {
      alert("Todos los campos son obligatorios")
      return
    }

    const informationEnterprise = `
  ### Información de la empresa:
- Nombre: ${project.nameEnterprise}
- Sector/Industria: ${project.sectorIndustry}
- Descripción: ${project.description}
- Ubicación: ${project.location}
- Misión/Visión: ${project.missionVisionBrief}
- Servicios/productos: ${project.productsServices}
- Competencia: ${project.competitors}

### Objetivo principal:
El objetivo principal de esta estrategia es: ${dataForm.objectiveStrategy}

### Información de la audiencia objetivo:
- Segmento clave: ${dataForm.targetAudience}
- Localización de la audiencia: ${dataForm.locationAudience}

### Recursos y condiciones:
- Presupuesto estimado: ${dataForm.budget}
- Duración de la estrategia: ${dataForm.duration}
- Canales principales: ${dataForm.channelPriority}
  `

    const promptIa = `
Ahora genera una estrategia para la siguiente empresa:

${informationEnterprise}

${expectedFormat}

Devuelve exclusivamente el JSON en este formato.
`

    const response = await fetch("/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_SAMBA_NOVA_KEY}`,
      },
      body: JSON.stringify({
        stream: false,
        model: "Meta-Llama-3.2-3B-Instruct",
        messages: [
          {
            role: "system",
            content: `
    Eres un experto en estrategias de marca y marketing.
    Tu tarea es crear estrategias detalladas, prácticas y específicas para empresas de cualquier sector.
    Cada respuesta debe estar basada en la información proporcionada y organizada en un formato JSON claro y estructurado.`,
          },
          {
            role: "user",
            content: `Aquí hay ejemplos del tipo de información y la respuesta esperada:

                ${exampleData1}

                ${exampleData2}
                `,
          },
          {
            role: "user",
            content: promptIa,
          },
        ],
      }),
    })
    const datas = await response.json()
    await saveStrategy(
      {
        ...cleanStrategyData(datas.choices[0].message.content),
        status: StatusProgressStrategy.NOT_STARTED,
        progress: 0,
      },
      project.id ?? "",
    )
    ;(document.getElementById("create_project") as HTMLDialogElement)?.close()
    if (location.pathname !== "/project/strategies")
      navigator("/project/strategies")
  }

  return (
    <form onSubmit={submit}>
      <InputText name="objectiveStrategy" label="objetivo de la estrategia" />
      <InputText name="budget" label="presupuesto" />
      <InputText name="targetAudience" label="perfil del cliente ideal" />
      <InputText name="locationAudience" label="localización de la audiencia" />
      <InputText name="duration" label="duración" />
      <InputText name="channelPriority" label="canales prioritarios" />
      <button className="btn btn-secondary my-5">crear</button>
    </form>
  )
}

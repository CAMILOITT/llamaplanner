import Dialog from "@/components/ui/Dialog"
import { useProjectStore } from "@/context/project"
import CreateStrategy from "@/feature/createStrategy/CreateStrategy"

interface PropSummary {}

export default function Summary({}: PropSummary) {
  const project = useProjectStore(store => store.project)
  return (
    <div>
      <Dialog id="create_project">
        <CreateStrategy />
      </Dialog>
      <div className="flex w-full gap-4 justify-between items-center py-6">
        <div className="flex-start">
          <p>sector/industria: {project.sectorIndustry}</p>
          <p>name: {project.nameEnterprise}</p>
          <p>ubicación: {project.location}</p>
          <p>descripción: {project.description}</p>
        </div>
        <button
          className="btn btn-secondary"
          onClick={() =>
            (
              document.getElementById("create_project") as HTMLDialogElement
            )?.showModal()
          }>
          nueva estrategia
        </button>
      </div>
      <div>
        Número de objetivos creados vs. completados. Estado de las estrategias
        generadas (e.g., "3 estrategias activas").
      </div>
      <div>
        Gráfica básica o barras de progreso para: Avance de los objetivos (e.g.,
        60% completados). Uso del presupuesto asignado (si lo agregas más
        adelante).
      </div>
    </div>
  )
}
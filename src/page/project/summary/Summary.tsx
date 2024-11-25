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
        <div className="flex-start card">
          <p>
            <span className="font-bold capitalize">sector/industria:</span>{" "}
            {project.sectorIndustry}
          </p>
          <p>
            <span className="font-bold capitalize">name:</span>{" "}
            {project.nameEnterprise}
          </p>
          <p>
            <span className="font-bold capitalize">ubicación:</span>{" "}
            {project.location}
          </p>
          <p>
            <span className="font-bold capitalize">descripción:</span>{" "}
            {project.description}
          </p>
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
    </div>
  )
}

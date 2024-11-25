import InputText from "@/components/ui/InputText"
import { useProjectStore } from "@/context/project"
import { updateProject } from "@/services/firebase/db/project"
import { useState } from "react"
interface PropConfiguration {}

export default function Configuration({}: PropConfiguration) {
  const [edit, setEdit] = useState(false)
  const project = useProjectStore(store => store.project)

  async function updateDataProject(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const data = {
      id: project.id ?? "",
      nameEnterprise: formData.get("nameEnterprise") as string,
      description: formData.get("description") as string,
      sectorIndustry: formData.get("sectorIndustry") as string,
      location: formData.get("location") as string,
    }
    await updateProject(data)
    setEdit(!edit)
  }

  return (
    <div>
      <form className="form" onSubmit={updateDataProject}>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => setEdit(!edit)}>
          Editar
        </button>
        <InputText
          name="nameEnterprise"
          label="nombre de la empresa"
          initialValue={project.nameEnterprise}
          disabled={!edit}
        />
        <InputText
          name="description"
          label="descripción breve"
          initialValue={project.description}
          disabled={!edit}
        />
        <InputText
          name="sectorIndustry"
          label="sector/industria"
          initialValue={project.sectorIndustry}
          disabled={!edit}
        />
        <InputText
          name="location"
          label="ubicación"
          initialValue={project.location}
          disabled={!edit}
        />

        <button className={`btn btn-success ${!edit ? "btn-disabled" : ""}`}>
          guardar
        </button>
      </form>
      {/* <div>
        Información básica del proyecto: Editar el nombre del proyecto. Cambiar
        la ubicación o sector/industria. Modificar la descripción breve. Gestión
        del equipo (si aplica): Invitar colaboradores al proyecto. Asignar roles
        (e.g., "Propietario", "Editor"). Parámetros estratégicos avanzados
        (opcional): Ajustar el presupuesto total (para reportes). Configurar
        plazos generales para estrategias y objetivos. Exportaciones y
        privacidad: Permitir exportar todos los datos del proyecto (e.g., PDF,
        JSON). Opción para eliminar el proyecto o desactivar temporalmente.
      </div> */}
    </div>
  )
}

import InputText from "@/components/ui/InputText"
import { saveUserProject } from "@/services/firebase/db/project"
import { useNavigate } from "react-router"
import css from "./CreateProject.module.css"
import { Project } from "./types"

interface PropCreateProject {}

export default function CreateProject({}: PropCreateProject) {
  const navigate = useNavigate()
  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    const data: Project = {
      nameEnterprise: formData.get("nameEnterprise") as string,
      description: formData.get("description") as string,
      sectorIndustry: formData.get("sectorIndustry") as string,
      location: formData.get("location") as string,
      descriptionBrief: formData.get("descriptionBrief") as string,
      values: formData.get("values") as string,
      productsServices: formData.get("productsServices") as string,
      competitors: (formData.get("competitors") as string).split(","),
      missionVisionBrief: formData.get("missionVisionBrief") as string,
    }
    saveUserProject(data)
    // navigate("/project")
  }

  return (
    <form className={css.form} onSubmit={submit}>
      <div>
        <InputText label="nombre de la empresa" name="nameEnterprise" />
        <InputText
          label="Ubicación geográfica o región principal"
          name="location"
        />
        <InputText label="sector o industria" name="sectorIndustry" />
      </div>
      <div>
        <InputText label="descripción breve" name="descriptionBrief" />
        <InputText
          label="breve descripción de la misión y visión"
          name="missionVisionBrief"
        />
        <InputText
          label="Valores centrales"
          name="values"
          placeholder="ejemplo: innovación, sostenibilidad, inclusión"
        />
        <InputText
          label="Productos o servicios principales"
          name="productsServices"
        />
      </div>
      <div>
        <InputText
          label="Nombres o ejemplos de competidores directos"
          name="competitors"
        />
      </div>
      <button type="submit" className="btn btn-accent ">
        enviar
      </button>
    </form>
  )
}

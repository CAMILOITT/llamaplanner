import CardProject from "@/components/ui/CardProject"
import Dialog from "@/components/ui/Dialog"
import { useProjectStore } from "@/context/project"
import { Project } from "@/feature/createProject/types"
import { getProjects } from "@/services/firebase/db/project"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import CreateProject from "../feature/createProject/CreateProject"
import css from "./Home.module.css"

interface PropHome {}

export default function Home({}: PropHome) {
  const [projects, setProjects] = useState<Project[]>([])

  const navigate = useNavigate()
  const setProject = useProjectStore(state => state.setProject)

  function goToProject(project: Project) {
    setProject(project)
    console.log(project)

    navigate("/project")
  }

  useEffect(() => {
    async function getProject() {
      try {
        const projectsUser = await getProjects()
        setProjects(projectsUser)
      } catch (error) {
        console.error("Error al obtener los proyectos:", error)
      }
    }

    getProject()
  }, [])

  return (
    <main className={css.main}>
      {projects.map((item, index) => (
        <CardProject
          key={item.id ?? index}
          description={item.description}
          title={item.nameEnterprise}
          clickProject={() => goToProject(item)}
        />
      ))}
      <button
        className="card bg-neutral text-neutral-content card-body items-center justify-center text-center max-w-80"
        onClick={() =>
          (
            document.getElementById("create_project") as HTMLDialogElement
          )?.showModal()
        }>
        <span className="text-3xl font-bold">+</span>
        <h2 className="card-title">Crear nuevo proyecto</h2>
      </button>
      <Dialog id="create_project">
        <CreateProject />
      </Dialog>
    </main>
  )
}

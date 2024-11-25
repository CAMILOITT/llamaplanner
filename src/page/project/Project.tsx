import { useAllStrategyStore } from "@/context/allStrategy"
import { useProjectStore } from "@/context/project"
import { getAllStrategies } from "@/services/firebase/db/strategy"
import { useEffect } from "react"
import { NavLink, Outlet } from "react-router"
import css from "./Project.module.css"
interface PropProject {}

export default function Project({}: PropProject) {
  const project = useProjectStore(store => store.project)
  const setStrategies = useAllStrategyStore(state => state.setStrategies)
  useEffect(() => {
    getAllStrategies(project.id ?? "")
      .then(response => {
        setStrategies(response)
      })
      .catch(e => alert(e.message))
  }, [])

  return (
    <main className={css.main}>
      <aside className={css.aside}>
        <NavLink className={"px-2"} to={"/"}>
          inicio
        </NavLink>
        <NavLink className={"px-2"} to={"/project"}>
          resumen
        </NavLink>
        <NavLink className={"px-2"} to={"/project/strategies"}>
          estrategias
        </NavLink>
        <NavLink className={"px-2"} to={"/project/config"}>
          config
        </NavLink>
      </aside>
      <div className={css.body}>
        <Outlet />
      </div>
    </main>
  )
}

import { NavLink, Outlet } from "react-router"
import css from "./Project.module.css"
interface PropProject {}

export default function Project({}: PropProject) {
  return (
    <main className={css.main}>
      <aside className={css.aside}>
        <NavLink to={"/"}>inicio</NavLink>
        <NavLink to={"/project"}>Resumen</NavLink>
        <NavLink to={"/project/strategies"}>estrategias</NavLink>
        <NavLink to={"/project/config"}>config</NavLink>
      </aside>
      <div className={css.body}>
        <Outlet />
      </div>
    </main>
  )
}

import Dialog from "@/components/ui/Dialog"
import CreateStrategy from "@/feature/createStrategy/CreateStrategy"
import { NavLink, Outlet } from "react-router"
import css from "./Strategies.module.css"
interface PropStrategies {}

export default function Strategies({}: PropStrategies) {
  return (
    <div>
      <nav className="navbar bg-base-100">
        <div className="flex-1 menu menu-sm menu-horizontal dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow flex gap-2 items-center">
          <NavLink
            className="btn btn-primary btn-nav-sm "
            to={"/project/strategies"}>
            estrategias
          </NavLink>
          <NavLink
            className="btn btn-primary btn-nav-sm"
            to={"/project/strategies/summary"}>
            resumen
          </NavLink>
          <NavLink
            className="btn btn-primary btn-nav-sm"
            to={"/project/strategies/reports"}>
            reportes
          </NavLink>
        </div>
        <div className="flex-none">
          <button
            className="btn btn-secondary btm-nav-sm"
            onClick={() =>
              (
                document.getElementById("my_modal_3") as HTMLDialogElement
              )?.showModal()
            }>
            nueva estrategia
          </button>
        </div>
      </nav>
      <Dialog id="create_project">
        <CreateStrategy />
      </Dialog>
      <div className={css.body}>
        <Outlet />
      </div>
    </div>
  )
}

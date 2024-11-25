import { NavLink, Outlet } from 'react-router';
import css from './Project.module.css';
interface PropProject {}

export default function Project({}: PropProject) {
  return (
    <main className={css.main}>
      <aside className={css.aside}>
        <NavLink className={'px-2'} to={'/'}>
          inicio
        </NavLink>
        <NavLink className={'px-2'} to={'/project'}>
          resumen
        </NavLink>
        <NavLink className={'px-2'} to={'/project/strategies'}>
          estrategias
        </NavLink>
        <NavLink className={'px-2'} to={'/project/config'}>
          config
        </NavLink>
      </aside>
      <div className={css.body}>
        <Outlet />
      </div>
    </main>
  );
}

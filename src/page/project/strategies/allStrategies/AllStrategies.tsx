import { useProjectStore } from "@/context/project"
import { useStrategyStore } from "@/context/strategy"
import { Strategy } from "@/feature/createStrategy/types"
import {
  eliminateStrategy,
  getAllStrategies,
} from "@/services/firebase/db/strategy"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router"

interface PropAllStrategies {}

export default function AllStrategies({}: PropAllStrategies) {
  const [listStrategies, setListStrategies] = useState<Strategy[]>([])
  const project = useProjectStore(store => store.project)
  const updateStrategy = useStrategyStore(store => store.updateStrategy)
  const navigate = useNavigate()
  useEffect(() => {
    getAllStrategies(project.id ?? "")
      .then(response => {
        setListStrategies(response)
      })
      .catch(e => console.error(e.message))
  }, [])

  function removeStrategy(id: string) {
    const newList = listStrategies.filter(strategy => strategy.id !== id)
    setListStrategies(newList)
    eliminateStrategy(id, project.id ?? "")
      .then(() => {
        console.log("Estrategia eliminada")
      })
      .catch(e => console.error(e.message))
  }

  function getMoreInformation(strategy: Strategy) {
    updateStrategy(strategy)
    navigate(`/project/strategies/summary`)
  }

  return (
    <div>
      <div className="navbar bg-base-100">
        <h2 className="navbar-start font-bold">Estrategias</h2>
      </div>

      <div className="overflow-x-auto  ">
        {listStrategies.length <= 0 ? (
          <p className="text-center font-bold">no hay estrategias</p>
        ) : (
          <table className="table table-pin-rows table-pin-cols">
            <thead>
              <tr>
                <th></th>
                <th>Estrategia</th>
                <th>Objetivo Principal</th>
                <th>Estado</th>
                <th>Progreso</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {listStrategies.map((strategy, i) => (
                <tr
                  key={strategy.id}
                  onClick={() => getMoreInformation(strategy)}
                  className="hover cursor-pointer ">
                  <th>{i}</th>
                  <td>{strategy.name}</td>
                  <td>{strategy.main_objective}</td>
                  <td>{strategy.status}</td>
                  <td>{strategy.progress}</td>
                  <td className="flex gap-2">
                    <button
                      className="btn btn-error btn-sm"
                      onClick={() => removeStrategy(strategy.id ?? "")}>
                      eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}

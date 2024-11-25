import { useStrategyStore } from "@/context/strategy"
import { Fragment } from "react/jsx-runtime"

interface PropSummaryStrategies {}

export default function SummaryStrategies({}: PropSummaryStrategies) {
  const strategy = useStrategyStore(store => store.strategy)

  return (
    <div>
      <div className="flex justify-between">
        <div className="card bg-base-100 w-96 shadow-xl flex flex-col items-center m-8">
          <h2 className="text-2xl font-bold my-4">{strategy.name}</h2>
          <p>{strategy.main_objective}</p>
        </div>
        <div className="card bg-base-100 w-96 shadow-xl flex flex-col items-center m-8 ">
          <p>{strategy.status}</p>
          <p>{strategy.progress}%</p>
        </div>
      </div>

      <div>
        <div className="card bg-base-100 w-96 shadow-xl flex flex-col items-center m-8 w-full">
          <h2 className="text-2xl font-bold my-4">Estrategia</h2>
          {/* <p>{strategy.idea[0]}</p> */}
        </div>
      </div>

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
          {Object.entries(strategy.schedule).map(([monthName, month]) => (
            <Fragment key={monthName}>
              {Object.entries(month).map(([weekName, week]) => (
                <Fragment key={weekName}>
                  {Object.entries(week).map(([strategyName, strategy]) => (
                    <tr key={strategyName} className="hover cursor-pointer ">
                      <th>{strategyName}</th>
                      <td>{strategy.duration}</td>
                      {/* <td>{strategies.idea}</td> */}
                      <td>{strategy.task}</td>
                    </tr>
                  ))}
                </Fragment>
              ))}
            </Fragment>
          ))}
        </tbody>
      </table>
    </div>
  )
}

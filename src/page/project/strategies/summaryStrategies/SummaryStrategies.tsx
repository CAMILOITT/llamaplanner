import Dialog from "@/components/ui/Dialog"
import { useStrategyStore } from "@/context/strategy"
import Chat from "@/feature/chat/Chat"
import { StatusProgressStrategy } from "@/feature/createStrategy/types"
import {
  calculatePercentage,
  getStrategiesWorking,
} from "@/feature/createStrategy/utils"
import { useState } from "react"
import { Fragment } from "react/jsx-runtime"

interface PropSummaryStrategies {}

export default function SummaryStrategies({}: PropSummaryStrategies) {
  const [ctxChat, setCtxChat] = useState("")

  const strategy = useStrategyStore(store => store.strategy)
  const updateStrategy = useStrategyStore(store => store.updateStrategy)

  function changeStatusProgress(
    monthName: string,
    weekName: string,
    iTask: number,
    status: StatusProgressStrategy,
  ) {
    const cloneStrategy = structuredClone(strategy)
    cloneStrategy.schedule[monthName][weekName][iTask].status.status = status
    updateStrategy(cloneStrategy)
  }

  function openChat(idea: string) {
    ;(document.getElementById("chat") as HTMLDialogElement)?.showModal()
    setCtxChat(idea)
  }

  return (
    <div className="overflow-x-hidden">
      <div className="flex justify-between">
        <div className="card bg-base-100 w-96 shadow-xl flex flex-col items-center m-8 py-6">
          <h2 className="text-2xl font-bold my-4">{strategy.name}</h2>
          <p>Objetivo: {strategy.main_objective}</p>
        </div>
        <div className="card bg-base-100 w-96 shadow-xl flex flex-col items-center justify-center m-8 ">
          <p>{strategy.status}</p>
          <p>{calculatePercentage(strategy.schedule)}%</p>
        </div>
      </div>
      <div className="card bg-base-100 w-96 shadow-xl flex flex-col items-center m-8 w-full py-8">
        <h2 className="text-2xl font-bold my-4">Estrategia en progreso</h2>
        <div>
          {Object.entries(getStrategiesWorking(strategy)).map(
            ([_, value]) => typeof value === "string" && <p>{value}</p>,
          )}
        </div>
      </div>

      <Dialog id="chat">
        <Chat description={ctxChat} />
      </Dialog>

      <table className="table table-pin-rows table-pin-cols">
        <thead>
          <tr>
            <th>mes</th>
            <th>semana</th>
            <th>duración</th>
            <th>tarea</th>
            <th>ideas</th>
            <th>status</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(strategy.schedule).map(
            ([monthName, month], nMonth) => (
              <Fragment key={monthName}>
                {Object.entries(month).map(([weekName, week], nWeek) => (
                  <Fragment key={weekName}>
                    {Object.entries(week).map(([taskName, task], iTask) => (
                      <tr key={taskName} className="cursor-pointer ">
                        <th>mes {nMonth + 1}</th>
                        <th>semana {nWeek + 1}</th>
                        <td>{task.duration}</td>
                        <td>{task.task}</td>
                        <td className="flex flex-col gap-2">
                          {task.idea.map(idea => (
                            <div className="flex gap-2 items-center  justify-between">
                              <div className="flex gap-2 items-center  justify-between hover w-full">
                                <p>{idea}</p>
                                <button
                                  className="btn btn-sm btn-primary"
                                  onClick={() => openChat(idea)}>
                                  chatear
                                </button>
                              </div>
                            </div>
                          ))}
                        </td>
                        <td>
                          <select
                            className="select max-w-xs"
                            onChange={e =>
                              changeStatusProgress(
                                monthName,
                                weekName,
                                iTask,
                                e.target.value as StatusProgressStrategy,
                              )
                            }>
                            {Object.entries(StatusProgressStrategy).map(
                              ([key, value]) => (
                                <option
                                  key={key}
                                  value={value}
                                  disabled={task.status.status === value}
                                  selected={task.status.status === value}>
                                  {value}
                                </option>
                              ),
                            )}
                          </select>
                        </td>
                      </tr>
                    ))}
                  </Fragment>
                ))}
              </Fragment>
            ),
          )}
        </tbody>
      </table>
    </div>
  )
}

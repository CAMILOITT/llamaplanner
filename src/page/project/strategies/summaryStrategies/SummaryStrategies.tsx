import BadgeColor from '@/components/ui/BadgeColor';
import { useStrategyStore } from '@/context/strategy';
import { Fragment } from 'react/jsx-runtime';

interface PropSummaryStrategies {}

export default function SummaryStrategies({}: PropSummaryStrategies) {
  const strategy = useStrategyStore((store) => store.strategy);

  return (
    <div className="overflow-x-hidden">
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

      <div className="py-3 flex gap-3">
        <BadgeColor text="complete:" color="bg-success" />
      </div>

      <table className="table table-pin-rows table-pin-cols">
        <thead>
          <tr>
            <th>mes</th>
            <th>semana</th>
            <th>duración</th>
            <th>tarea</th>
            <th>ideas</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(strategy.schedule).map(
            ([monthName, month], nMonth) => (
              <Fragment key={monthName}>
                {Object.entries(month).map(([weekName, week], nWeek) => (
                  <Fragment key={weekName}>
                    {Object.entries(week).map(([strategyName, strategy]) => (
                      <tr key={strategyName} className="cursor-pointer ">
                        <th>mes {nMonth + 1}</th>
                        <th>semana {nWeek + 1}</th>
                        <td>{strategy.duration}</td>
                        <td>{strategy.task}</td>
                        <td className="flex flex-col gap-2">
                          {strategy.idea.map((idea) => (
                            <div className="flex gap-2 items-center  justify-between">
                              <div className="flex gap-2 items-center  justify-between hover w-full">
                                <p>{idea}</p>
                                <button className="btn btn-sm btn-primary">
                                  chatear
                                </button>
                              </div>
                              <label>Estado</label>
                            </div>
                          ))}
                        </td>
                      </tr>
                    ))}
                  </Fragment>
                ))}
              </Fragment>
            )
          )}
        </tbody>
      </table>
    </div>
  );
}

interface PropCardProject {
  title: string
  description: string
  clickProject: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export default function CardProject({
  title,
  description,
  clickProject,
}: PropCardProject) {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button onClick={clickProject} className="btn btn-primary">
            Ir al proyecto
          </button>
        </div>
      </div>
    </div>
  )
}

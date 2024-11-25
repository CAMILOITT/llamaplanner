interface PropDialog {
  id: string
  children: React.ReactNode
}

export default function Dialog({ id, children }: PropDialog) {
  return (
    <dialog id={id} className="modal translate-x-2/4 translate-y-2/4">
      <div className="modal-box">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        {children}
      </div>
    </dialog>
  )
}

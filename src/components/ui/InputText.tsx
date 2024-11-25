import { useState } from "react"

interface PropInputText extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  name: string
  placeholder?: string
  initialValue?: string
  messageError?: string
}

export default function InputText({
  label,
  placeholder,
  name,
  initialValue = "",
  messageError,
  ...prop
}: PropInputText) {
  const [valueInput, setValueInput] = useState(initialValue)
  return (
    <label className="form-control w-full max-w-xs">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        className="input input-bordered w-full max-w-xs"
        value={valueInput}
        onChange={e => setValueInput(e.target.value)}
        {...prop}
      />
      {messageError && (
        <label className="label">
          <span className="label-text-alt text-red-500">{messageError}</span>
        </label>
      )}
    </label>
  )
}

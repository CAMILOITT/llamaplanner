import InputText from "@/components/ui/InputText"
import { useStrategyStore } from "@/context/strategy"
import { useState } from "react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

interface PropChat {
  description?: string
}

export default function Chat({ description }: PropChat) {
  const [listMessages, setListMessages] = useState<
    {
      role: "user" | "system"
      content: string
    }[]
  >([])
  const [valueMessage, setValueMessage] = useState("")
  const strategy = useStrategyStore(store => store.strategy)

  async function submitLlama(e: React.FormEvent<HTMLButtonElement>) {
    e.preventDefault()
    const data: {
      role: "user" | "system"
      content: string
    } = {
      role: "user",
      content: valueMessage,
    }

    const response = await fetch("/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_SAMBA_NOVA_KEY}`,
      },
      body: JSON.stringify({
        stream: false,
        model: "Meta-Llama-3.2-3B-Instruct",
        messages: [
          {
            role: "system",
            content: `
        Eres un asistente experto en estrategias de marca y marketing. Quiero que me ayudes a desarrollar una tarea en detalle. Aquí tienes la información de mi estrategia:

- **Objetivo principal**: ${strategy.main_objective},
- **Audiencia objetivo**: ${strategy.audience.segment} ,
- **Canales principales**: ${strategy.channels}
- **Presupuesto disponible**: ${strategy.budget}
- **Duración de la estrategia**: ${strategy.duration} 

Quiero desarrollar en detalle una tarea relacionada con esta estrategia. Aquí está la tarea:

- **Tarea**: ${description}

Necesito que proporciones lo siguiente:
1. **Explicación completa**: Describe con detalle cómo realizar esta tarea.
2. **Variantes**: Proporciona diferentes formas en que se puede realizar esta tarea, ajustadas a distintos estilos o enfoques.
3. **Recursos necesarios**: Enumera los recursos que se necesitan para realizar esta tarea.
4. **Ejemplo práctico**: Da un ejemplo claro de cómo se podría implementar esta tarea.
5. **Consejos y mejores prácticas**: Ofrece sugerencias para maximizar la efectividad de esta tarea.

Genera información amplia, útil y alineada con los objetivos de la estrategia.
`,
          },
          ...listMessages,
          data,
        ],
      }),
    })

    const dataResponse = await response.json()
    const responseMessage = dataResponse.choices[0].message.content

    setListMessages([
      ...listMessages,
      data,
      {
        role: "system",
        content: responseMessage,
      },
    ])
    setValueMessage("")
  }

  return (
    <div>
      <div className="flex gap-5 items-center">
        <h2 className="text-3xl font-bold">Chat</h2>
        <p className="text-sm mx-2">{description}</p>
      </div>
      <div className="h-[50vh] overflow-y-scroll">
        {listMessages.map(({ role, content }, index) => (
          <div
            className={`chat ${role === "user" ? "chat-end" : "chat-start"}`}
            key={index}>
            <ReactMarkdown
              className="chat-bubble chat-bubble-primary"
              remarkPlugins={[remarkGfm]}>
              {content}
            </ReactMarkdown>
            {/* <div className="chat-bubble chat-bubble-primary">{content}</div> */}
          </div>
        ))}
      </div>
      <div className="flex gap-8 w-full items-end space-between">
        <InputText
          label=""
          name="message"
          placeholder="chatea tus preguntas"
          value={valueMessage}
          onChange={e => setValueMessage(e.target.value)}
        />
        <button className="btn btn-primary btn-md" onClick={submitLlama}>
          enviar
        </button>
      </div>
    </div>
  )
}

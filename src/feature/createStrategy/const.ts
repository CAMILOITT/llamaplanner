import { SchemeResponseStrategy } from "./types"

export const expectedFormat = `
### Formato de respuesta:
Devuelve un JSON en el siguiente formato, cumpliendo estrictamente con las siguientes condiciones:
1. La duración de la estrategia debe distribuirse de forma coherente a lo largo de los 3 meses, y cada mes debe incluir tareas para todas las semanas.
2. Cada semana debe incluir entre 1 y 4 tareas. Tareas complejas pueden ocupar más tiempo, pero siempre deben estar detalladas.
3. La duración de cada tarea debe estar en formato string, indicando días o semanas (por ejemplo, "3 días", "1 semana").
4. Las tareas deben ser realistas y relevantes para alcanzar el objetivo principal.
5. Cada tarea dentro del campo schedule debe incluir un campo idea que contenga una lista de conceptos que expliquen o detallen cómo ejecutar la tarea. Este campo es obligatorio y debe ser coherente con el objetivo y las tácticas definidas.
6. El nombre de la estrategia debe ser un nombre corto, claro y conciso, que refleje el objetivo principal y la audiencia objetivo.
`

export const exampleStrategy1: SchemeResponseStrategy = {
  name: "Estrategia de lealtad",
  main_objective: "Incrementar el número de clientes recurrentes",
  audience: {
    segment:
      "Jóvenes adultos (25-40 años), interesados en estilos de vida saludables",
    localization: "Bogotá",
  },
  tactics: [
    "Implementar un programa de lealtad con descuentos especiales",
    "Crear un menú semanal exclusivo para miembros del programa",
  ],
  kpis: [
    "Incremento del 25% en el número de clientes recurrentes",
    "Aumento del 15% en el valor promedio del ticket",
  ],
  budget: "1500 USD",
  duration: "3 meses",
  channels: ["Instagram", "Facebook"],
  schedule: {
    month_1: {
      week_1: [
        {
          task: "Diseñar un programa de lealtad",
          duration: "3 días",
          idea: [
            "Ofrecer un descuento del 10% después de la quinta visita",
            "Promocionar membresías exclusivas con beneficios",
          ],
        },
      ],
      week_2: [
        {
          task: "Lanzar contenido promocional en Instagram",
          duration: "2 días",
          idea: [
            "Publicar historias destacando clientes satisfechos",
            "Mostrar platillos populares con etiquetas de sostenibilidad",
          ],
        },
      ],
    },
  },
}

export const exampleData1 = `
 ### Ejemplo 1: Información de la Empresa
- Nombre: Bistro Verde
- Sector/Industria: Restaurantes y gastronomía
- Descripción: Restaurante de comida orgánica y sostenible.
- Ubicación: Bogotá, Colombia
- Misión/Visión: Ofrecer alimentos saludables mientras cuidamos el planeta.
- Servicios/productos: Menú vegetariano, catering para eventos.
- Competencia: Restaurantes locales de comida saludable.

### Objetivo principal:
El objetivo principal de esta estrategia es: Incrementar el número de clientes recurrentes.

### Información de la audiencia objetivo:
- Segmento clave: Jóvenes adultos (25-40 años), interesados en estilos de vida saludables.
- Localización de la audiencia: Bogotá.

### Recursos y condiciones:
- Presupuesto estimado: $1,500 USD
- Duración de la estrategia: 3 meses
- Canales principales: Instagram, Facebook.

${expectedFormat}

\`\`\`JSON
${JSON.stringify(exampleStrategy1)}
\`\`\`

Devuelve exclusivamente el JSON en este formato.

`

export const exampleStrategy2: SchemeResponseStrategy = {
  name: "Estrategia para incrementar la adopcion de software entre pequeñas empresas",
  main_objective: "Incrementar la adopción de software entre pequeñas empresas",
  audience: {
    segment: "Propietarios de pequeñas empresas (10-50 empleados)",
    localization: "Latinoamérica",
  },
  tactics: [
    "Realizar webinars gratuitos sobre automatización empresarial",
    "Desarrollar estudios de caso locales para generar confianza",
  ],
  kpis: [
    "Aumento del 30% en las pruebas gratuitas del ERP",
    "Incremento del 20% en la conversión de pruebas a suscripciones",
  ],
  budget: "5000 USD",
  duration: "6 meses",
  channels: ["LinkedIn", "YouTube", "Sitio web"],
  schedule: {
    month_1: {
      week_1: [
        {
          task: "Planificar contenido para LinkedIn",
          duration: "2 días",
          idea: ["Crear publicaciones educativas sobre automatización"],
        },
      ],
      week_2: [
        {
          task: "Lanzar primer webinar gratuito",
          duration: "1 día",
          idea: ["Invitar a dueños de empresas locales a participar"],
        },
      ],
    },
  },
}

export const exampleData2 = `
 ### Ejemplo 2: Información de la Empresa
- Nombre: TechSolve
- Sector/Industria: Tecnología y software
- Descripción: Desarrollo de software para automatización empresarial.
- Ubicación: Ciudad de México, México
- Misión/Visión: Ayudar a las empresas a ser más eficientes mediante la automatización.
- Servicios/productos: ERP personalizable, CRM basado en IA.
- Competencia: SAP, Salesforce.

### Objetivo principal:
El objetivo principal de esta estrategia es: Incrementar la adopción de software entre pequeñas empresas.

### Información de la audiencia objetivo:
- Segmento clave: Propietarios de pequeñas empresas (10-50 empleados).
- Localización de la audiencia: Latinoamérica.

### Recursos y condiciones:
- Presupuesto estimado: $5,000 USD
- Duración de la estrategia: 6 meses
- Canales principales: LinkedIn, YouTube, sitio web.

${expectedFormat}

\`\`\`JSON
${JSON.stringify(exampleStrategy2)}
\`\`\`

Devuelve exclusivamente el JSON en este formato.
`

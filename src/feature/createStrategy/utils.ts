import { Strategy } from "./types"

export function cleanStrategyData(data: string): Omit<Strategy, "id"> {
  const cleanedData: Strategy = JSON.parse(data.replace(/(```JSON|```)/g, ""))
  return cleanedData
}

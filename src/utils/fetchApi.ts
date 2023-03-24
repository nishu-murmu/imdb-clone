import { ApiFunctionProps } from "./types"

export const fetchApi = (params: ApiFunctionProps): Promise<[]> | [] => {
  const baseUrl = import.meta.env.VITE_API_BASE_URL
  const apiKey = import.meta.env.VITE_API_KEY

  return fetch(
    `${baseUrl}/${params.queryType}/${params.queryParameter}?api_key=${apiKey}&language=en-US&page=1`
  )
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      return data.results
    })
    .catch((error) => {
      throw error
    })
}

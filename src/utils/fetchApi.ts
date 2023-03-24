export const fetchApi = (url: string): Promise<[]> | [] => {
  return fetch(url)
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

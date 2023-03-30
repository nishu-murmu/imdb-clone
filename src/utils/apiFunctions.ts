import { fetchApi } from "./fetchApi"

export const getSearchMovie = (params: string): Promise<[]> | [] => {
  if (params === "") return []
  let url: string = `https://api.themoviedb.org/3/search/movie?api_key=8ef0179a2b8e5afe1139a3e76972056b&language=en-US&query=${params}&page=1&include_adult=false`
  return fetchApi(url)
}

export const getPopularMovies = (): Promise<[]> | [] => {
  return fetchApi(
    `https://api.themoviedb.org/3/movie/popular?api_key=8ef0179a2b8e5afe1139a3e76972056b&language=en-US&page=1`
  )
}

export const getUpcomingMovies = (): Promise<[]> | [] => {
  return fetchApi(`
https://api.themoviedb.org/3/movie/upcoming?api_key=8ef0179a2b8e5afe1139a3e76972056b&language=en-US&page=1`)
}

export const getPopularShows = (): Promise<[]> | [] => {
  return fetchApi(
    "https://api.themoviedb.org/3/tv/popular?api_key=8ef0179a2b8e5afe1139a3e76972056b&language=en-US&page=1"
  );
}

export const getTrendingMedia = (): Promise<[]> | [] => {
  let url: string =
    "https://api.themoviedb.org/3/trending/all/day?api_key=8ef0179a2b8e5afe1139a3e76972056b"
  return fetchApi(url)
}

export const getMovieDetails = (id: number): Promise<{}> | {} => {
  return fetchApi(`https://api.themoviedb.org/3/movie/${id}?api_key=8ef0179a2b8e5afe1139a3e76972056b&language=en-US`)
}
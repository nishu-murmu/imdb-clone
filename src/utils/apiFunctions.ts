const searchMovie = (params: string): Promise<[]> | [] => {
  if (params === "") return [];
  return fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=8ef0179a2b8e5afe1139a3e76972056b&language=en-US&query=${params}&page=1&include_adult=false`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data.results;
    })
    .catch((err) => {
      throw err;
    });
};

export default searchMovie;

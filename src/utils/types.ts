export interface HeaderSliceProps extends fetchedArrayProps {
  searchText: string
  isDropDown: boolean
  isMenu: boolean
  dropdownRef: any
}

export interface fetchedDataProps {
  id: number
  poster_path: string
  backdrop_path: string
  release_date: string
  original_title: string
  media_type?: string
  popularity: number
  overview?: string
  title: string
  vote_average?: number
  vote_count?: number
}

export interface fetchedArrayProps {
  searchedMovies?: fetchedDataProps[]
  upcomingMovies?: fetchedDataProps[]
  popularMovies?: fetchedDataProps[]
  trendingMedia?: fetchedDataProps[]
}
export interface RootState extends fetchedDataProps{
  header: HeaderSliceProps
  hero: fetchedArrayProps
  list: fetchedArrayProps
}
export interface IconsProps {
  className?: string
  width?: string
  height?: string
  strokeWidth?: string
  isFillColor?: boolean
}

export interface ImageProps {
  className?: string
  width?: string
  height?: string
}

export interface LayoutProps {
  children?: React.ReactNode
  isSignInCover?: boolean
}
export interface filterOption {
  readonly value: string
  readonly label: string
  readonly isLoading?: boolean
  readonly isDisabled?: boolean
  readonly isSearchable?: boolean
}
export const filterOptions: readonly filterOption[] = [
  { value: "ranking", label: "Ranking" },
  { value: "imdb_rating", label: "IMDb Rating" },
  { value: "release_date", label: "Release Date" },
  { value: "no_of_ratings", label: "No Of Ratings" },
]

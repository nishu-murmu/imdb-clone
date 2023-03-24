export interface HeaderSliceProps {
  searchText: string
  searchedMovies: []
  isDropDown: boolean
  isMenu: boolean
  dropdownRef: any
}

export interface HeroSliceProps {
  upcomingMovies: []
}

export interface RootState {
  header: HeaderSliceProps
}

export interface IconsProps {
  className?: string
  width?: string
  height?: string
  strokeWidth?: string
  isFillColor?: boolean
}

export interface ApiFunctionProps {
  queryType: string
  queryParameter: string
  includeAdult?: boolean
  language?: string
  page?: number
}

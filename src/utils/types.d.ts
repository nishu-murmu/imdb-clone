export interface HeaderSliceProps {
  searchText: string
  searchedMovies: []
  isDropDown: boolean
  isMenu: boolean
  dropdownRef: any
}

export interface HeroSliceProps {
  upcomingMovies: []
  trendingMedia: []
}

export interface RootState {
  header: HeaderSliceProps
  hero: HeroSliceProps
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
  children: React.ReactNode
}

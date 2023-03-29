import { User } from "firebase/auth"

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

export interface HeaderSliceProps extends fetchedArrayProps {
  searchText: string
  isDropDown: boolean
  isMenu: boolean
  dropdownRef: any
}

export interface ListSliceProps extends fetchedArrayProps {
  selectValue: filterOption | null
}

export interface authSliceProps extends UserProps{
isSubmitted: boolean
}
export interface RootState extends fetchedDataProps {
  header: HeaderSliceProps
  hero: fetchedArrayProps
  list: ListSliceProps
  auth: authSliceProps
}

export interface IconsProps {
  className?: string
  width?: string
  height?: string
  strokeWidth?: string
  fillColor?: string
  strokeColor?: string
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
  { value: "vote_average", label: "IMDb Rating" },
  { value: "popularity", label: "Popularity" },
  { value: "release_date", label: "Release Date" },
  { value: "vote_count", label: "No Of Ratings" },
]

export type UserProps = {
  name?: string
  email: string
  password: string
  retypedPassword?: string
}
export interface AuthContextProps {
  signOut: () => void;
  signIn: ({ email, password }: UserProps) => any;
  register: ({ email, password }: UserProps) => any;
  currentUser: User | null;
}

export interface HeaderSliceProps {
  searchText: string;
  searchedMovies: [];
  isDropDown: boolean;
  isMenu: boolean;
  dropdownRef: any;
}

export interface RootState {
  header: HeaderSliceProps;
}

export interface IconsProps {
  className?: string;
  width?: string;
  height?: string;
  strokeWidth?: string;
}

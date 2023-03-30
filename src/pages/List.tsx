import React, { useEffect } from "react"
import moment from "moment"
import {
  BookMarkCheckFillIcon,
  BookMarkPlusIcon,
  ShareIcon,
  StarIcon,
} from "../components/media/Icons"
import Select from "react-select"
import MainLayout from "../components/layouts/MainLayout"
import {
  fetchedArrayProps,
  fetchedDataProps,
  filterOption,
  filterOptions,
  RootState,
} from "../utils/types"
import { ListActions } from "../store/reducers/listSlice"
import { useSelector, useDispatch } from "react-redux"
import { getPopularMovies } from "../utils/apiFunctions"
import { Link } from "react-router-dom"
const List: React.FC = () => {
  const dispatch = useDispatch()
  const baseUrl = import.meta.env.VITE_BASE_URL
  const selectValue = useSelector((state: RootState) => state.list?.selectValue)
  const popularMovies = useSelector(
    (state: RootState) => state.list?.popularMovies
  )

  const filterListHandler = (
    data: any,
    filterParam: string | undefined
  ): fetchedArrayProps[] => {
    data = data.map((item: fetchedDataProps) => {
      return {
        ...item,
        release_date: new Date(item.release_date),
      }
    })

    let result = [...data].sort((a: any, b: any): any => {
      if (filterParam == "vote_average")
        return b?.vote_average - a?.vote_average

      if (filterParam == "popularity") return b?.popularity - a?.popularity

      if (filterParam == "vote_count") return b?.vote_count - a?.vote_count
      if (filterParam == "release_date")
        return b?.release_date - a?.release_date
    })

    result = result.map((item: fetchedDataProps) => {
      return {
        ...item,
        release_date: moment(item.release_date).format("YYYY-MM-DD"),
      }
    })
    return result
  }

  const onSelectChangeHandler = (option: filterOption | null) => {
    dispatch(ListActions.setSelectValue(option?.value))

    const filterArray = filterListHandler(popularMovies, option?.value)
    dispatch(ListActions.getPopularMovies(filterArray))
  }

  useEffect(() => {
    const getPopularMovieList = async () => {
      const result = await getPopularMovies()
      dispatch(ListActions.getPopularMovies(result))
    }
    getPopularMovieList()
  }, [])

  return (
    <MainLayout>
      <div className='w-full  bg-gradient-to-b from-light-100 to-light-50'>
        <div className='grid grid-cols-6 h-auto container mx-auto  bg-light-200 w-[1008px]'>
          <div
            id='top-chart'
            className='col-span-4 px-6 py-4 border-r-2 border-gray-500'
          >
            <div id='heading-captions' className='text-xl'>
              IMDb Charts
            </div>
            <div className='flex justify-between'>
              <div>
                <div id='heading' className='text-3xl'>
                  IMDb Top 250 Movies
                </div>
                <p className='text-sm'>
                  IMDb Top 250 as rated by regular IMDb voters.
                </p>
              </div>
              <div id='share' className=''>
                <div className='h-10 rounded-full hover:cursor-pointer hover:bg-dark-200 p-1'>
                  <ShareIcon />
                </div>
                <div>Share</div>
              </div>
            </div>
            <div className='flex mt-4 justify-between'>
              <div className='mt-1'>Showing 250 titles</div>
              <div className='flex gap-x-2'>
                <div className='mt-1'>Sort by:</div>
                <div className='w-[190px]'>
                  <Select
                    onChange={onSelectChangeHandler}
                    name='Filters'
                    defaultValue={selectValue}
                    options={filterOptions}
                  />
                </div>
                <div></div>
              </div>
            </div>

            <div className='mt-2' id='top-table'>
              <table className='text-black-overlay table '>
                <thead className='gap-x-4'>
                  <tr>
                    <th className='px-2'>#</th>
                    <th className='px-2'>Rank & Title</th>
                    <th className='px-2'>IMDb Rating</th>
                    <th className='px-2'>Add to watchlist</th>
                  </tr>
                </thead>
                <tbody className='gap-y-10'>
                  {popularMovies?.map((item: fetchedDataProps) => (
                    <tr className='my-3'>
                      <td>
                        <div className='h-20 w-16 bg-green-500'>
                          <img
                            className='w-full object-cover'
                            src={`${baseUrl}${item.poster_path}`}
                            alt=''
                          />
                        </div>
                      </td>
                      <td className='px-2'>
                        <div className='flex gap-x-2'>
                          <span>
                            {popularMovies.findIndex(
                              (obj) =>
                                obj.original_title === item.original_title
                            ) + 1}
                            .
                          </span>
                          <Link to={"/"}>
                            <span className='text-blue-800 hover:underline'>
                              {item.original_title}
                            </span>
                          </Link>
                          <span>{`(${item.release_date.split("-")[0]})`}</span>
                        </div>
                      </td>
                      <td className='text-center'>
                        <div className='flex gap-x-1 justify-center'>
                          <div>
                            <StarIcon strokeColor='gray' className='w-5 h-5' />
                          </div>
                          <div>{item.vote_average}</div>
                        </div>
                      </td>
                      <td>
                        <div className='flex justify-center hover:cursor-pointer'>
                          <BookMarkCheckFillIcon
                            fillColor='green'
                            width='20'
                            height='20'
                          />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div
            id='genres'
            className='col-span-2 border-l-2 border-gray-500'
          ></div>
        </div>
      </div>
    </MainLayout>
  )
}
export default List
import React, { useEffect } from "react"
import { ShareIcon } from "../Icons"
import Select from "react-select"
import MainLayout from "../layouts/MainLayout"
import { fetchedDataProps, filterOptions, RootState } from "../../utils/types"
import { ListActions } from "../../store/reducers/listSlice"
import { useSelector, useDispatch } from "react-redux"
import { getPopularMovies } from "../../utils/apiFunctions"
const List: React.FC = () => {
  const dispatch = useDispatch()
  const popularMovies = useSelector(
    (state: RootState) => state.list?.popularMovies
  )
  useEffect(() => {
    const getPopularMovieList = async () => {
      const result = await getPopularMovies()
      dispatch(ListActions.getPopularMovies(result))
    }
    getPopularMovieList()
  }, [])

  return (
    <MainLayout>
      <div className='w-full bg-gradient-to-b from-light-100 to-light-50'>
        <div className='grid grid-cols-6 h-screen container mx-auto  bg-light-200 w-[1008px]'>
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
                  <Select name='color' options={filterOptions} />
                </div>
                <div></div>
              </div>
            </div>

            <div className='' id='top-table'>
              <table className='text-black-overlay'>
                <thead>
                  <tr>
                    <th>Rank & Title</th>
                    <th>IMDb Rating</th>
                    <th>Your Rating</th>
                  </tr>
                </thead>
                <tbody>
                  {popularMovies?.slice(0, 10).map((item: fetchedDataProps) => (
                    <tr>
                      <td>{item.original_title}</td>
                      <td>{item.vote_average}</td>
                      <td>{item.release_date}</td>
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

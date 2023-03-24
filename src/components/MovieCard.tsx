import { PlusIcon } from "./Icons"
import { BookMarkImage } from "./Images"

const MovieCard = (props: any) => {
  console.log(props, "props")
  return (
    <div className='bg-emerald-300 mb-1 group relative w-[165px] h-[244px] '>
      <div className='absolute top-0 left-0 group-hover:cursor-pointer'>
        <BookMarkImage width={props.width} height={props.height} />
      </div>
      <div className='absolute top-1 left-[8px] mt-2 ml-.5 group-hover:cursor-pointer'>
        <PlusIcon />
      </div>
      <img src={props.imgUrl} alt='' />
    </div>
  )
}
export default MovieCard

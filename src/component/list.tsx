interface ListProps {
  title: string
  imgSrc: string[]
}
const List = ({ title, imgSrc }: ListProps) => {
  return (
    <>
      <div>{title}</div>
      <div className='flex flex-row gap-5'>
        {imgSrc.map((src, index) => (
          <img key={index} src={src} />
        ))}
      </div>
    </>
  )
}

export default List

interface ListProps {
  title: string
  imgSrc: string[]
}
const List = ({ title, imgSrc }: ListProps) => {
  return (
    <>
      <div>{title}</div>
      <div className='flex h-8 flex-row gap-5 md:h-16.25'>
        {imgSrc.map((src, index) => (
          <img key={index} src={src} />
        ))}
      </div>
    </>
  )
}

export default List

interface TextcardProps {
  time?: string
  title: string
  event?: string
  content: string[]
}
const Textcard = ({ time, title, event, content }: TextcardProps) => {
  return (
    <div
      data-testid='textcard'
      className='flex min-w-0 flex-1 flex-col rounded-lg bg-[#252525] px-2 py-2 text-xs md:rounded-4xl md:px-5 md:py-5 md:text-lg'
    >
      <span className='text-accent'>{time}</span>
      <span className='text-text font-bold'>{title}</span>
      <span className='text-accent'>{event}</span>
      <ul className='text-text-muted list-inside list-disc'>
        {content.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default Textcard

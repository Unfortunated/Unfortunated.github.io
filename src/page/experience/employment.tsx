import Header from '../../component/header'
import Footer from '../../component/footer'
import Textcard from '../../component/textcard'
import { employment } from '../../data/experience'

function Employment() {
  const data = employment
  return (
    <div className='flex min-h-screen w-full flex-col'>
      <Header />
      <div className='my-10 flex flex-col items-center justify-center gap-10'>
        <div className='flex w-full max-w-5xl flex-col gap-10 px-4'>
          <div className='flex flex-col-reverse items-center gap-5 md:flex-row md:items-start'>
            <Textcard
              time={data[0].time}
              title={data[0].role}
              event={data[0].org}
              content={data[0].content}
            />
            <img
              src={data[0].img}
              className='3xl:w-100 w-48 shrink-0 object-cover'
              loading='lazy'
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Employment

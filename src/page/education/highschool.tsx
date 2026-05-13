import Header from '../../component/header'
import Footer from '../../component/footer'
import Button from '../../component/button'
import { useNavigate } from 'react-router'
import { BookOpenText } from 'lucide-react'
import Textcard from '../../component/textcard'
import { educationData } from '../../data/education'

function Highschool() {
  const data = educationData[0]
  const nav = useNavigate()
  return (
    <div className='flex min-h-screen w-full flex-col'>
      <Header />
      <div className='my-auto flex flex-col items-center justify-center gap-10'>
        <div className='flex flex-row items-center gap-10 md:gap-20'>
          <div className='text-lg font-bold md:text-xl'>High School</div>
          <Button
            onClick={() => {
              nav('/education')
            }}
          >
            <div className='ring-accent rounded-full p-2 ring-2 md:p-4 md:ring-4'>
              <BookOpenText className='stroke-accent h-6 w-6 md:h-9 md:w-9' />
            </div>
          </Button>
          <div className='text-lg font-bold md:text-xl'>
            Graduated {data.graduationYear}
          </div>
        </div>
        <div className='flex flex-col items-center gap-5 md:flex-row md:items-start'>
          <img src={data.img} className='3xl:w-100 w-48' />
          <Textcard
            time={data.time}
            title={data.institution}
            content={data.content}
          />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Highschool

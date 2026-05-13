import Header from '../../component/header'
import Footer from '../../component/footer'
import { GraduationCap } from 'lucide-react'
import Button from '../../component/button'
import Textcard from '../../component/textcard'
import { useNavigate } from 'react-router'
import { educationData } from '../../data/education'
function Bachelor() {
  const nav = useNavigate()
  const cu = educationData[1]
  const liu = educationData[2]
  return (
    <div className='flex min-h-screen w-full flex-col'>
      <Header />
      <div className='my-10 flex flex-col items-center justify-center gap-10'>
        <div className='flex flex-row items-center gap-5 md:gap-20'>
          <div className='text-lg font-bold md:text-xl'>Bachelor's Degree</div>
          <Button
            onClick={() => {
              nav('/education')
            }}
          >
            <div className='ring-accent rounded-full p-2 ring-2 md:p-4 md:ring-4'>
              <GraduationCap className='stroke-accent h-6 w-6 md:h-9 md:w-9' />
            </div>
          </Button>
          <div className='text-lg font-bold md:text-xl'>
            Graduated {cu.graduationYear}
          </div>
        </div>
        <div className='flex flex-col gap-10'>
          <div className='flex flex-col items-center gap-5 md:flex-row md:items-start'>
            <img src={cu.img} className='3xl:w-100 w-48' />
            <Textcard
              time={cu.time}
              title={cu.institution}
              content={cu.content}
            />
          </div>
          <div className='flex flex-col-reverse items-center gap-5 md:flex-row md:items-start'>
            <Textcard
              time={liu.time}
              title={liu.institution}
              content={liu.content}
            />
            <img src={liu.img} className='3xl:w-100 w-48' />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Bachelor

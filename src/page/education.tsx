import Header from '../component/header'
import Footer from '../component/footer'
import { BookOpenText, GraduationCap } from 'lucide-react'
import Button from '../component/button'
import { useNavigate } from 'react-router'

function Education() {
  const nav = useNavigate()
  return (
    <div className='flex min-h-screen w-full flex-col'>
      <Header />
      <div className='max-w-8xl mx-auto my-auto flex w-full flex-col justify-center gap-5 px-5 md:flex-row md:px-10 2xl:gap-120'>
        <div className='flex flex-col items-center gap-4 md:gap-10'>
          <div className='text-lg font-bold md:text-2xl'>High School</div>
          <Button
            onClick={() => {
              nav('/education/highschool')
            }}
          >
            <div className='ring-accent rounded-full p-4 ring-4'>
              <BookOpenText className='stroke-accent h-16 w-16 md:h-25 md:w-25' />
            </div>
          </Button>
          <div className='flex flex-col items-center text-sm md:text-xl'>
            <span>Graduated 2022</span>
            <span>Nawaminthrachinuthit Triamudomsuksanomklao School</span>
            <span>(NTUN)</span>
          </div>
        </div>
        <div className='flex flex-col items-center gap-4 md:gap-10'>
          <div className='text-lg font-bold md:text-2xl'>Bachelor</div>
          <Button
            onClick={() => {
              nav('/education/bachelor')
            }}
          >
            <div className='ring-accent rounded-full p-4 ring-4'>
              <GraduationCap className='stroke-accent h-16 w-16 md:h-25 md:w-25' />
            </div>
          </Button>
          <div className='flex flex-col items-center text-sm md:text-xl'>
            <span>Graduated 2026</span>
            <span>Chulalongkorn University(CU)</span>
            <span>Linköping University(Li.U)</span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Education

import Header from '../component/header'
import Footer from '../component/footer'
import { employment } from '../data/experience'
import { extracur } from '../data/experience'
import Button from '../component/button'
import { useNavigate } from 'react-router'

function Experience() {
  const workPic = employment[0].img
  const extPic = extracur[0].img
  const nav = useNavigate()
  return (
    <div className='flex min-h-screen w-full flex-col'>
      <Header />
      <div className='my-auto flex flex-col justify-center gap-10 md:flex-row md:gap-20'>
        <Button
          onClick={() => {
            nav('/experience/extracurricular')
          }}
          className='relative p-0'
        >
          <img src={extPic} className='h-80 blur-lg md:h-135' />
          <div className='absolute inset-0 flex flex-col items-center justify-center text-sm font-bold text-white sm:text-base md:text-xl'>
            <span className='text-md md:text-3xl'>
              Extracurricular Activities
            </span>
            <span className='text-sm md:text-xl'>3 roles: 2023–2025</span>
          </div>
        </Button>
        <Button
          onClick={() => {
            nav('/experience/employment')
          }}
          className='relative p-0'
        >
          <img src={workPic} className='h-80 blur-lg md:h-135' />
          <div className='absolute inset-0 flex flex-col items-center justify-center font-bold text-white sm:text-base'>
            <span className='text-md md:text-3xl'>Internship & Employment</span>
            <span className='text-sm md:text-xl'>1 role: May–Aug 2025</span>
          </div>
        </Button>
      </div>
      <Footer />
    </div>
  )
}

export default Experience

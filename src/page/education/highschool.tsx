import Header from '../../component/header'
import Footer from '../../component/footer'
import Button from '../../component/button'
import { useNavigate } from 'react-router'
import { BookOpenText } from 'lucide-react'
import Textcard from '../../component/textcard'
import highschool from '../../assets/highschool.svg'

function Highschool() {
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
            <div className='ring-accent rounded-full p-4 ring-4'>
              <BookOpenText className='stroke-accent h-4 w-4 md:h-9 md:w-9' />
            </div>
          </Button>
          <div className='text-lg font-bold md:text-xl'>Graduated 2022</div>
        </div>
        <div className='flex flex-col items-center gap-5 md:flex-row md:items-start'>
          <img src={highschool} className='3xl:w-100 w-48' />
          <Textcard
            time='2019 - 2022'
            title='Nawaminthrachinuthit Triamudomsuksanomklao School (NTUN)'
            content={[
              'Studied in Science and Math Elective in English Program',
              'Elected as class representative consecutively for 3 years.',
              'Participated in English debate club consecutively for 3 years.',
            ]}
          />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Highschool

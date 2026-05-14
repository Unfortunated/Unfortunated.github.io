import Header from './component/header'
import Footer from './component/footer'
import { pic } from './data/tech'
import List from './component/list'
import { language } from './data/tech'
import { tech } from './data/tech'

function App() {
  return (
    <div className='flex min-h-screen w-full flex-col'>
      <Header />
      <div className='max-w-8xl mx-auto my-auto flex w-full flex-col gap-5 px-5 md:px-10'>
        <div className='flex flex-col items-center justify-center gap-2 md:flex-row md:gap-20 xl:gap-50'>
          <img src={pic} className='3xl:w-xl w-sm' />
          <div className='flex flex-col text-xs md:text-xl xl:text-2xl'>
            <span>
              Hello, I am Paopao, an undergraduate from Chulalongkorn
              University.
            </span>
            <span>
              I am interested in software testing and software engineering.
            </span>
            <span>
              On my free time, I like to play games, watch movies and animes.
            </span>
          </div>
        </div>
        <div className='3xl:gap-180 mx-auto flex flex-col justify-between md:flex-row md:gap-125'>
          <div className='flex flex-col items-center gap-5 text-lg md:text-4xl'>
            <List title='Programming Languages' imgSrc={language} />
          </div>
          <div className='flex flex-col items-center gap-5 text-lg md:text-4xl'>
            <List title='Technologies' imgSrc={tech} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App

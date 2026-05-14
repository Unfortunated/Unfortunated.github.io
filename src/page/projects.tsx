import Header from '../component/header'
import Footer from '../component/footer'
import Carousel from '../component/carousel'
import { recentProj, prevProj } from '../data/projects'

function Projects() {
  return (
    <div className='flex min-h-screen w-full flex-col'>
      <Header />
      <div className='flex flex-col items-center justify-center gap-4 py-4'>
        <div className='text-lg font-bold md:text-2xl'>Recent Projects</div>
        <Carousel projects={recentProj} />
        <div className='text-lg font-bold md:text-2xl'>Previous Projects</div>
        <Carousel projects={prevProj} />
      </div>
      <Footer />
    </div>
  )
}

export default Projects

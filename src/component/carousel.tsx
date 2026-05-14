import { CircleChevronRight, CircleChevronLeft } from 'lucide-react'
import Button from './button'
import { useState } from 'react'
import type { Project } from '../types/project'
type CarouselProps = {
  projects: Project[]
}
const Carousel = ({ projects }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1))
  }
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1))
  }
  const currentProject = projects[currentIndex]
  return (
    <div data-testid='carouselbox' className='flex flex-col items-center gap-4'>
      <div className='flex flex-row items-center gap-5 md:gap-20'>
        <Button onClick={prevSlide}>
          <CircleChevronLeft className='fill-text-muted stroke-black' />
        </Button>
        <div data-testid='carousel'>
          <img
            src={currentProject.imgSrc}
            alt={currentProject.title}
            className='3xl:h-90 3xl:w-90 h-45 w-45'
          />
        </div>
        <Button onClick={nextSlide}>
          <CircleChevronRight className='fill-text-muted stroke-black' />
        </Button>
      </div>
      <div className='px-4 md:px-0'>
        <div className='font-bold'>{currentProject.title}</div>
        <ul className='list-inside list-disc text-xs md:text-base'>
          {currentProject.content.map((content, index) => (
            <li key={index}>{content}</li>
          ))}
          <li>
            Github: <a href={currentProject.link}>{currentProject.repoTitle}</a>
          </li>
        </ul>
      </div>
      <div className='text-text-muted flex justify-center'>{`${currentIndex + 1}/${projects.length}`}</div>
    </div>
  )
}
export default Carousel

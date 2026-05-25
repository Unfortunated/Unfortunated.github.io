import Carousel from '../component/carousel'
import { fireEvent, render, screen } from '@testing-library/react'
import { recentProj } from '../data/projects'
import type { Project } from '../types/project'

describe('carousel', () => {
  const setup = (projects: Project[]) => {
    render(<Carousel projects={projects}></Carousel>)
  }
  it('TC3-Verify carousel render properly', () => {
    setup(recentProj)
    expect(screen.getByTestId('carouselBox')).toBeInTheDocument()
    expect(screen.getByTestId('carousel')).toBeInTheDocument()
    expect(screen.getByTestId('carouselText')).toBeInTheDocument()
  })
  it('TC4-Verify click next move carousel to next image', () => {
    setup(recentProj)
    expect(screen.getByTestId('nextSlide')).toBeInTheDocument()
    fireEvent.click(screen.getByTestId('nextSlide'))
    expect(screen.getByTestId('carouselText')).toHaveTextContent(
      recentProj[1].content.join('')
    )
  })
  it('TC5-Verify click next move carousel to 0 index when at max length', () => {
    setup(recentProj)
    for (let i = 0; i < recentProj.length - 1; i++) {
      fireEvent.click(screen.getByTestId('nextSlide'))
    }
    expect(screen.getByTestId('carouselText')).toHaveTextContent(
      recentProj[recentProj.length - 1].content.join('')
    )
    expect(screen.getByTestId('nextSlide')).toBeInTheDocument()
    fireEvent.click(screen.getByTestId('nextSlide'))
  })
  it('TC6-Verify click previous move carousel to previous image', () => {
    setup(recentProj)
    for (let i = 0; i < recentProj.length - 1; i++) {
      fireEvent.click(screen.getByTestId('nextSlide'))
    }
    expect(screen.getByTestId('carouselText')).toHaveTextContent(
      recentProj[recentProj.length - 1].content.join('')
    )
    expect(screen.getByTestId('prevSlide')).toBeInTheDocument()
    fireEvent.click(screen.getByTestId('prevSlide'))
    expect(screen.getByTestId('carouselText')).toHaveTextContent(
      recentProj[recentProj.length - 2].content.join('')
    )
  })
  it('TC7-Verify click previous move carousel to last image when at index 0', () => {
    setup(recentProj)
    expect(screen.getByTestId('prevSlide')).toBeInTheDocument()
    fireEvent.click(screen.getByTestId('prevSlide'))
    expect(screen.getByTestId('carouselText')).toHaveTextContent(
      recentProj[recentProj.length - 1].content.join('')
    )
  })
})

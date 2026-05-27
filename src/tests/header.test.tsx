import Header from '../component/header'
import { render, fireEvent, screen } from '@testing-library/react'
import { MemoryRouter, Routes, Route } from 'react-router'

describe('header', () => {
  const setup = (initialPath = '/') => {
    render(
      <MemoryRouter initialEntries={[initialPath]}>
        <Header />
        <Routes>
          <Route path='/' element={<div data-testid='home-page' />} />
          <Route
            path='/education'
            element={<div data-testid='education-page' />}
          />
          <Route
            path='/experience'
            element={<div data-testid='experience-page' />}
          />
          <Route
            path='/projects'
            element={<div data-testid='projects-page' />}
          />
        </Routes>
      </MemoryRouter>
    )
  }

  it('TC12-Verify header is rendered correctly', () => {
    setup()
    expect(screen.getByTestId('header')).toBeInTheDocument()
  })

  it('TC13-Verify clicking name navigates to /', () => {
    setup('/education')
    fireEvent.click(screen.getByText('Thanyathorn Wiengperm'))
    expect(screen.getByTestId('home-page')).toBeInTheDocument()
  })

  it('TC14-Verify clicking Education navigates to /education', () => {
    setup('/')
    fireEvent.click(screen.getAllByText('Education')[0])
    expect(screen.getByTestId('education-page')).toBeInTheDocument()
  })

  it('TC15-Verify clicking Experience navigates to /experience', () => {
    setup('/')
    fireEvent.click(screen.getAllByText('Experience')[0])
    expect(screen.getByTestId('experience-page')).toBeInTheDocument()
  })

  it('TC16-Verify clicking Projects navigates to /projects', () => {
    setup('/')
    fireEvent.click(screen.getAllByText('Projects')[0])
    expect(screen.getByTestId('projects-page')).toBeInTheDocument()
  })
})

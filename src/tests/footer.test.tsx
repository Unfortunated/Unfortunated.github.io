import Footer from '../component/footer'
import { render, fireEvent, screen } from '@testing-library/react'

describe('footer', () => {
  const mockNavigate = jest.fn()
  const setup = () => {
    render(<Footer onNavigate={mockNavigate} />)
  }
  beforeEach(() => {
    mockNavigate.mockClear()
  })
  it('TC8-Verify footer renders properly', () => {
    setup()
    expect(screen.getByTestId('footer')).toBeInTheDocument()
    expect(screen.queryAllByRole('button').length).toStrictEqual(4)
    expect(screen.queryAllByRole('img').length).toStrictEqual(3)
  })
  it('TC9-Verify clicking on github logo triggers event', () => {
    setup()
    fireEvent.click(screen.getByTestId('github'))
    expect(mockNavigate).toHaveBeenCalledWith('https://github.com/Unfortunated')
  })

  it('TC10-Verify clicking on hackerrank triggers event', () => {
    setup()
    fireEvent.click(screen.getByTestId('hackerrank'))
    expect(mockNavigate).toHaveBeenCalledWith(
      'https://www.hackerrank.com/profile/thanyathornwien1'
    )
  })

  it('TC11-Verify clicking on leetcode triggers event', () => {
    setup()
    fireEvent.click(screen.getByTestId('leetcode'))
    expect(mockNavigate).toHaveBeenCalledWith(
      'https://leetcode.com/u/mrunfortunate/'
    )
  })
})

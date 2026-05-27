import List from '../component/list'
import { render, screen } from '@testing-library/react'
import { language } from '../data/tech'

describe('list', () => {
  const setup = () => {
    render(<List title='Programming Languages' imgSrc={language} />)
  }
  it('TC17-Verify list renders properly', () => {
    setup()
    expect(screen.getByTestId('list')).toBeInTheDocument()
    expect(screen.getByText('Programming Languages')).toBeInTheDocument()
    expect(screen.queryAllByRole('img').length).toStrictEqual(5)
  })
})

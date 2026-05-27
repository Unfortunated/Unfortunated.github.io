import Textcard from '../component/textcard'
import { render, screen } from '@testing-library/react'
import { employment } from '../data/experience'

describe('textcard', () => {
  const setup = () => {
    render(
      <Textcard title={employment[0].role} content={employment[0].content} />
    )
  }
  it('TC18-Verify text card renders properly', () => {
    setup()
    expect(screen.getByTestId('textcard')).toBeInTheDocument()
    expect(screen.getByTestId('textcard')).toHaveTextContent(employment[0].role)
    expect(screen.getByTestId('textcard')).toHaveTextContent(
      employment[0].content[0]
    )
  })
})

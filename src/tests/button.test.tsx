import { render, screen } from '@testing-library/react'
import { BookOpenText } from 'lucide-react'
import Button from '../component/button'

describe('button', () => {
  it('TC1-Verify text on button is visible', () => {
    render(<Button onClick={jest.fn()}>Click me</Button>)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })
  it('TC2-Verify icon on button is visible', () => {
    render(
      <Button
        onClick={jest.fn()}
        icon={BookOpenText}
        iconColor='white'
        iconSize={18}
      ></Button>
    )
    expect(document.querySelector('svg')).toBeInTheDocument()
  })
})

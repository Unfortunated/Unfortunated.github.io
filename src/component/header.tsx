import Button from './button'
import { Menu } from 'lucide-react'
import { useState } from 'react'
import { useNavigate } from 'react-router'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const nav = useNavigate()
  return (
    <div
      data-testid='header'
      className='bg-[#252525] px-6 py-3 md:px-20 md:py-10'
    >
      <div className='flex flex-row justify-between'>
        <div className='text-xl font-bold md:text-4xl'>
          <Button
            onClick={() => {
              nav('/')
            }}
          >
            Thanyathorn Wiengperm
          </Button>
        </div>
        <div className='flex flex-row md:hidden' data-testid='menubutton'>
          <Button
            onClick={() => {
              setMenuOpen((prev) => !prev)
            }}
            icon={Menu}
          />
        </div>
        <div className='hidden flex-row gap-10 text-2xl font-bold md:flex'>
          <Button
            onClick={() => {
              nav('/education')
            }}
          >
            Education
          </Button>
          <Button
            onClick={() => {
              nav('/experience')
            }}
          >
            Experience
          </Button>
          <Button
            onClick={() => {
              nav('/projects')
            }}
          >
            Projects
          </Button>
        </div>
      </div>
      {menuOpen && (
        <div className='z-2 mt-4 flex flex-col gap-2 font-bold md:hidden'>
          <Button
            onClick={() => {
              nav('/education')
            }}
          >
            Education
          </Button>
          <Button
            onClick={() => {
              nav('/experience')
            }}
          >
            Experience
          </Button>
          <Button
            onClick={() => {
              nav('/projects')
            }}
          >
            Projects
          </Button>
        </div>
      )}
    </div>
  )
}

export default Header

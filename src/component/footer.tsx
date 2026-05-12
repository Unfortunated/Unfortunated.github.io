import Button from './button'
import { Mail } from 'lucide-react'
import githubLogo from '../assets/GitHub_Invertocat_White.svg'
import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'
const Footer = () => {
  return (
    <div
      data-testid='footer'
      className='bg-[#252525] px-5 py-2 md:px-10 md:py-5'
    >
      <div className='flex flex-row justify-between'>
        <div className='flex gap-3 text-sm md:gap-4 md:text-lg'>
          <div className='text-sm md:text-xl'>Learn more about me:</div>
          <Button onClick={() => {}}>
            <Mail className='h-5 w-5 md:h-9 md:w-9' />
          </Button>
          <Button onClick={() => {}}>
            <img
              src={githubLogo}
              alt='github'
              className='h-5 w-5 md:h-9 md:w-9'
            />
          </Button>
          <Button onClick={() => {}}>
            <span className='text-sm md:text-base'>HackerRank</span>
          </Button>
          <Button onClick={() => {}}>
            <span className='text-sm md:text-base'>LeetCode</span>
          </Button>
        </div>
        <div className='hidden gap-4 md:flex'>
          <div className='text-xl'>This website is made using:</div>
          <img src={reactLogo} alt='react' className='h-5 w-5 md:h-9 md:w-9' />
          <img src={viteLogo} alt='vite' className='h-5 w-5 md:h-9 md:w-9' />
        </div>
      </div>
    </div>
  )
}

export default Footer

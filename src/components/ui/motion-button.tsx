'use client'

import { FC } from 'react'
import { ArrowRight } from 'lucide-react'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

function cn(...inputs: any[]) { return twMerge(clsx(inputs)) }

interface Props {
  label: string
  variant?: 'primary' | 'secondary'
  classes?: string
  onClick?: () => void
}

const MotionButton: FC<Props> = ({ label, classes, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        'bg-white/10 group relative h-auto w-72 cursor-pointer rounded-full border border-white/20 p-1 outline-none backdrop-blur-sm hover:border-white/40 transition-all duration-300',
        classes
      )}
    >
      <span
        className='circle bg-neon-orange m-0 block h-12 w-12 overflow-hidden rounded-full duration-500 group-hover:w-full'
        aria-hidden='true'
      ></span>
      <div className='icon absolute top-1/2 left-4 translate-x-0 -translate-y-1/2 duration-500 group-hover:translate-x-[0.4rem]'>
        <ArrowRight className='text-white size-6' />
      </div>
      <span className='button-text text-white group-hover:text-white absolute top-2/4 left-2/4 ml-4 -translate-x-2/4 -translate-y-2/4 text-center text-lg font-medium tracking-tight whitespace-nowrap duration-500'>
        {label}
      </span>
    </button>
  )
}

export default MotionButton

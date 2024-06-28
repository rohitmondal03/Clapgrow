import { Trash2 } from 'lucide-react'

import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from './ui/dropdown-menu'
import { Input } from './ui/input'
import { useState } from 'react'


export function TableFilter() {
  const [scoreInterval, setScoreInterval] = useState('')

  return (
    <section className='space-y-10'>
      <header className='flex items-center justify-between pt-4'>
        <h1 className='text-[22px] font-[600]'>
          Filters
        </h1>
        <Trash2
          className='border border-black scale-[1.5] p-1 rounded-full'
        />
      </header>
      <section className='pt-5 space-y-12'>
        <div>
          <p className='font-[600] text-[#5B5967]'>
            Branch
          </p>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div
                className='flex items-center justify-between w-full h-10 p-2 border border-zinc-300 rounded-md cursor-pointer'
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent className='w-80 bg-[rgb(239,249,255)]'>
              <p className='py-2'>
                Kolkata
              </p>
              <p className='py-2'>
                Bangalore
              </p>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div>
          <p className='font-[600] text-[#5B5967]'>
            Department
          </p>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div
                className='flex items-center justify-between w-full h-10 p-2 border border-zinc-300 rounded-md cursor-pointer'
              ></div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='w-80 bg-[rgb(239,249,255)]'>
              <p className='py-2'>
                Development
              </p>
              <p className='py-2'>
                Marketing
              </p>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className='space-y-1'>
          <p className='font-[600] text-[#5B5967]'>
            Score Interval
          </p>
          <div className='flex items-center flex-wrap gap-3'>
            <p
              onClick={() => setScoreInterval('Weekly')}
              className={`flex items-center gap-2 py-2 px-3 rounded-xl border border-zinc-300
                ${scoreInterval === "Weekly" && 'bg-[#D4EFFF]'}
              `}
            >
              Weekly {scoreInterval === "Weekly" &&
                <span onClick={() => setScoreInterval("")} className='text-[#5B5967]'>x</span>
              }
            </p>
            <p
              onClick={() => setScoreInterval('Monthly')}
              className={`flex items-center gap-2 py-2 px-3 rounded-xl border border-zinc-300
                ${scoreInterval === "Monthly" && 'bg-[#D4EFFF]'}
              `}
            >
              Monthly {scoreInterval === "Monthly" &&
                <span onClick={() => setScoreInterval("")} className='text-[#5B5967]'>x</span>
              }
            </p>
            <p
              onClick={() => setScoreInterval('Yearly')}
              className={`flex items-center gap-2 py-2 px-3 rounded-xl border border-zinc-300
                ${scoreInterval === "Yearly" && 'bg-[#D4EFFF]'}
              `}
            >
              Yearly {scoreInterval === "Yearly" &&
                <span onClick={() => setScoreInterval("")} className='text-[#5B5967]'>x</span>
              }
            </p>
          </div>
        </div>
        <div className='space-y-1'>
          <p className='font-[600] text-[#5B5967]'>
            Score Tab %
          </p>
          <div className='flex items-center flex-wrap gap-3'>
            <p className='py-2 px-3 rounded-xl border border-zinc-300'>
              75-100
            </p>
            <p className='py-2 px-3 rounded-xl border border-zinc-300'>
              74-50
            </p>
            <p className='py-2 px-3 rounded-xl border border-zinc-300'>
              49-25
            </p>
            <p className='py-2 px-3 rounded-xl border border-zinc-300'>
              &lt; 25
            </p>
          </div>
        </div>
      </section>
    </section>
  )
}

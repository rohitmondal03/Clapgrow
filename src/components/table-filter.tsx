import { Trash2, X } from 'lucide-react'
import { use, useState } from 'react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'
import { Button } from './ui/button';
import { SheetClose } from './ui/sheet';


export function TableFilter() {
  const [scoreInterval, setScoreInterval] = useState('');
  const [scoreRange, setScoreRange] = useState("");
  const [branch, setBranch] = useState('');
  const [dept, setDept] = useState('');

  return (
    <>
      <section className='space-y-6 mt-5'>
        <header className='flex items-center justify-between'>
          <h1 className='text-[22px] font-[600]'>
            Filters
          </h1>
          <Trash2
            className='border border-black scale-[1.5] p-1 rounded-full'
          />
        </header>
        <section className='pt-5 space-y-5'>
          <div>
            <p className='font-[600] text-[#5B5967] text-sm'>
              Branch
            </p>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className='flex items-center justify-between w-full h-10 p-2 border border-zinc-300 rounded-md cursor-pointer'>
                  {branch.length === 0 ? "Select Branch" : branch}
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className='w-80 bg-[rgb(239,249,255)]'>
                <DropdownMenuItem
                  onClick={() => setBranch("Kolkata")}
                  className='py-2'
                >
                  Kolkata
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setBranch("Bangalore")}
                  className='py-2'
                >
                  Bangalore
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div>
            <p className='font-[600] text-[#5B5967] text-sm'>
              Department
            </p>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className='flex items-center justify-between w-full h-10 p-2 border border-zinc-300 rounded-md cursor-pointer'>
                  {dept.length === 0 ? "Select Department" : dept}
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className='w-80 bg-[rgb(239,249,255)]'>
                <DropdownMenuItem
                  onClick={() => setDept("Development")}
                  className='py-2'
                >
                  Development
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setDept("Marketing")}
                  className='py-2'
                >
                  Marketing
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className='space-y-1'>
            <p className='font-[600] text-[#5B5967] text-sm'>
              Score Interval
            </p>
            <div className='flex items-center flex-wrap gap-3'>
              <p
                onClick={() => setScoreInterval('Weekly')}
                className={`flex items-center gap-2 py-2 px-3 rounded-xl border border-zinc-300 cursor-pointer
                ${scoreInterval === "Weekly" && 'bg-[#D4EFFF]'}
              `}
              >
                Weekly
                {scoreInterval === "Weekly" &&
                  <span onClick={() => setScoreInterval("")} className='text-[#5B5967]'><X /></span>
                }
              </p>
              <p
                onClick={() => setScoreInterval('Monthly')}
                className={`flex items-center gap-2 py-2 px-3 rounded-xl border border-zinc-300 cursor-pointer
                ${scoreInterval === "Monthly" && 'bg-[#D4EFFF]'}
              `}
              >
                Monthly {scoreInterval === "Monthly" &&
                  <span onClick={() => setScoreInterval("")} className='text-[#5B5967]'><X /></span>
                }
              </p>
              <p
                onClick={() => setScoreInterval('Yearly')}
                className={`flex items-center gap-2 py-2 px-3 rounded-xl border border-zinc-300 cursor-pointer
                ${scoreInterval === "Yearly" && 'bg-[#D4EFFF]'}
              `}
              >
                Yearly {scoreInterval === "Yearly" &&
                  <span onClick={() => setScoreInterval("")} className='text-[#5B5967] z-10'><X /></span>
                }
              </p>
            </div>
          </div>
          <div className='space-y-1'>
            <p className='font-[600] text-[#5B5967] text-sm'>
              Score Tab %
            </p>
            <div className='flex items-center flex-wrap gap-3'>
              <p
                onClick={() => setScoreRange('75-100')}
                className={`
                flex gap-2 py-2 px-3 rounded-xl border border-zinc-300 cursor-pointer
                ${scoreRange === '75-100' && 'bg-[#D4EFFF]'}
              `}
              >
                75-100 {scoreRange === '75-100' &&
                  <span onClick={() => setScoreRange("")} className='text-[#5B5967]'><X /></span>
                }
              </p>
              <p
                onClick={() => setScoreRange('74-50')}
                className={`
                flex gap-2 py-2 px-3 rounded-xl border border-zinc-300 cursor-pointer
                ${scoreRange === '74-50' && 'bg-[#D4EFFF]'}
              `}
              >
                74-50 {scoreRange === '74-50' &&
                  <span onClick={() => setScoreRange("")} className='text-[#5B5967]'><X /></span>
                }
              </p>
              <p
                onClick={() => setScoreRange('49-25')}
                className={`
                flex gap-2 py-2 px-3 rounded-xl border border-zinc-300 cursor-pointer
                ${scoreRange === '49-25' && 'bg-[#D4EFFF]'}
              `}
              >
                49-25  {scoreRange === '49-25' &&
                  <span onClick={() => setScoreRange("")} className='text-[#5B5967]'><X /></span>
                }
              </p>
              <p
                onClick={() => setScoreRange('< 25')}
                className={`
                flex gap-2 py-2 px-3 rounded-xl border border-zinc-300 cursor-pointer
                ${scoreRange === '< 25' && 'bg-[#D4EFFF]'}
              `}
              >
                &lt; 25 {scoreRange === '< 25' &&
                  <span onClick={() => setScoreRange("")} className='text-[#5B5967]'><X /></span>
                }
              </p>
            </div>
          </div>
        </section>
      </section>

      <SheetClose className='absolute bottom-4 right-4'>
        <Button className='bg-[#038EE2] px-8 hover:bg-blue-600'>
          Submit
        </Button>
      </SheetClose>
    </>
  )
}

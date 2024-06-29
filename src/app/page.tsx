"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { AlignCenter, Bell, Calendar, ChevronDown, ChevronLeft, ChevronRight, Download, Mail, Maximize2, MessageSquareDot, MessageSquareMore, MoveUpRight } from "lucide-react";

import demographImg from "../../public/demo-grapg-img.png"
import demoProfileImg from "../../public/demo-profile-img.png"
import { DEMO_TABLE_DATA } from "@/lib/data";
import { TableFilter } from "@/components/table-filter";
import { SideBar } from "@/components/side-bar";
import { EmployeeSheetSection } from "@/components/employee-sheet-section";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"


const profileList = new Array(5).fill({
  name: "Employee 1",
  desgn: "Team name or Designation",
  img: demoProfileImg,
  score: 99,
})


export default function Home() {
  const [isTableOpen, setTableOpen] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const MEMBER_TABLE = useMemo(() => {
    return DEMO_TABLE_DATA.slice(0, isTableOpen ? DEMO_TABLE_DATA.length : 20)
  }, [isTableOpen])

  return (
    <main className="flex items-start">
      <SideBar
        isOpen={isSidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <section className={`${isSidebarOpen ? "w-5/6" : "w-full"} absolute right-0 px-10 bg-[rgb(240,245,250)] space-y-8 py-6 overflow-y-scroll h-screen`}>
        <header className="flex items-center justify-between py-6">
          <h1 className="font-[600] text-[22px]">
            Member Insights
          </h1>
          <div className="flex items-center gap-8">
            <button className="bg-[#038EE2] py-2 px-4 rounded-lg text-white">
              Add Task +
            </button>
            <Bell
              className="text-zinc-500"
            />
            <MessageSquareMore
              className="text-zinc-500"
            />
            <div className="flex items-center gap-1 cursor-pointer">
              <Image
                src={demoProfileImg}
                alt="profile img"
                width={35}
                height={35}
              />
              <ChevronDown 
                className="text-xs text-zinc-500"
              />
            </div>
          </div>
        </header>
        <section className={`
          grid-cols-3 items-center justify-center place-items-center gap-8 transition-all ease-out duration-150
          ${isTableOpen ? "hidden" : "grid"}
        `}>
          <div className="p-5 rounded-3xl bg-white space-y-8 size-full">
            <div className="flex items-center justify-between">
              <h1 className="text-[16px] font-[600]">
                Performances
              </h1>
              <div className="flex items-center gap-1 text-sm bg-[#F3F4F6] py-1 px-2 rounded-3xl">
                <Calendar
                  className="scale-90"
                />
                This weeks Trend
                <ChevronDown />
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 bg-[#EEFDF1] w-full py-3 rounded-xl">
              <MoveUpRight
                className="text-emerald-500"
              />
              <span className="font-[600] text-emerald-500">Up 4 %</span>
              <span className="text-[#5B5967]">from previous week</span>
            </div>
            <div className="flex items-center justify-between gap-8">
              <div className="relative">
                <Image
                  src={demographImg}
                  alt="graph img"
                  width={200}
                  height={200}
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                  <p>45%</p>
                  <p className="text-zinc-500 text-sm">Completed</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div
                    className="bg-green-700 size-3 rounded-full"
                  />
                  <p className="font-[600]">
                    23/52
                  </p>
                  <p className="text-[#83828B]">
                    Excellent
                  </p>

                </div>
                <div className="flex items-center gap-2">
                  <div
                    className="bg-[#0076BD] size-3 rounded-full"
                  />
                  <p className="font-[600]">
                    6/52
                  </p>
                  <p className="text-[#83828B]">
                    Good
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <div
                    className="bg-[#E0BF10] size-3 rounded-full"
                  />
                  <p className="font-[600]">
                    6/52
                  </p>
                  <p className="text-[#83828B]">
                    Average
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <div
                    className="bg-[#D72727] size-3 rounded-full"
                  />
                  <p className="font-[600]">
                    6/52
                  </p>
                  <p className="text-[#83828B]">
                    Below
                    Average
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="p-5 rounded-3xl bg-white space-y-8 size-full">
            <div className="flex items-center justify-between">
              <h1 className="text-[16px] font-[600]">
                Top Performers
              </h1>
              <div className="flex items-center gap-1 text-sm bg-[#F3F4F6] py-1 px-2 rounded-3xl">
                This weeks Trend
              </div>
            </div>
            <div className="flex flex-col items-stretch justify-between gap-4">
              {profileList.map((data) => (
                <div className="flex items-center justify-between gap-10">
                  <div className="flex items-center gap-2">
                    <Image
                      src={data.img}
                      alt="profile img"
                      height={30}
                      width={30}
                    />
                    <div>
                      <p>
                        {data.name}
                      </p>
                      <p className="text-[12px] text-zinc-400">
                        {data.desgn}
                      </p>
                    </div>
                  </div>
                  <p>
                    {data.score}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="p-5 rounded-3xl bg-white space-y-8 size-full">
            <div className="flex items-center justify-between">
              <h1 className="text-[16px] font-[600]">
                Bottom Performers
              </h1>
              <div className="flex items-center gap-1 text-sm bg-[#F3F4F6] py-1 px-2 rounded-3xl">
                This weeks Trend
              </div>
            </div>
            <div className="flex flex-col items-stretch justify-between gap-4">
              {profileList.map((data) => (
                <div className="flex items-center justify-between gap-10">
                  <div className="flex items-center gap-2">
                    <Image
                      src={data.img}
                      alt="profile img"
                      height={30}
                      width={30}
                    />
                    <div>
                      <p>
                        {data.name}
                      </p>
                      <p className="text-[12px] text-zinc-400">
                        {data.desgn}
                      </p>
                    </div>
                  </div>
                  <p>
                    {data.score}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="space-y-4">
          <header className="flex items-center justify-between">
            <h1 className="flex items-center gap-2 font-[600] text-[16px]">
              Team Members
              <ChevronDown />
            </h1>
            <div className="flex items-center gap-4">
              <Input
                placeholder="Search..."
                className="w-[20vw]"
              />
              <Button variant={"secondary"} className="bg-white border">
                <Download />
              </Button>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant={"secondary"} className="bg-white border">
                    <AlignCenter />
                  </Button>
                </SheetTrigger>
                <SheetContent className="w-[500px]">
                  <TableFilter />
                </SheetContent>
              </Sheet>
              <Button
                onClick={() => setTableOpen(prev => !prev)}
                variant={"secondary"}
                className={`
                bg-white border
                ${isTableOpen && "bg-black text-white hover:bg-zinc-700"}
              `}
              >
                <Maximize2 />
              </Button>
            </div>
          </header>
          <div className="p-3 bg-white rounded-xl space-y-3">
            <Table className="border-2 border-zinc-200 rounded-3xl">
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[300px]">Name</TableHead>
                  <TableHead className="text-center">Task Overdue</TableHead>
                  <TableHead className="text-center">Weekly Score</TableHead>
                  <TableHead>Department</TableHead>
                  <TableHead>Branch</TableHead>
                  <TableHead className="w-[300px] text-center">Not Approved Count</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {MEMBER_TABLE.map((data, idx) => (
                  <Sheet>
                    <SheetTrigger asChild>
                      <TableRow key={idx}>
                        <TableCell className="flex items-center gap-4 cursor-pointer">
                          <Checkbox />
                          <Image
                            src={demoProfileImg}
                            alt="profile img"
                            width={35}
                            height={35}
                          />
                          {data.name}
                        </TableCell>
                        <TableCell className="text-center">{data.taskOverdue}</TableCell>
                        <TableCell className="text-center">{data.weeklyScore}</TableCell>
                        <TableCell>{data.dept}</TableCell>
                        <TableCell>{data.branch}</TableCell>
                        <TableCell className="text-center">{data.notApprovedCount}</TableCell>
                        <TableCell><Mail /></TableCell>
                      </TableRow>
                    </SheetTrigger>
                    <SheetContent className="overflow-y-scroll">
                      <EmployeeSheetSection 
                        data={data}
                      />
                    </SheetContent>
                  </Sheet>
                ))}
              </TableBody>
            </Table>
            <div className="flex items-center justify-between w-full px-4 text-[14px] text-zinc-600">
              <p>
                1-{MEMBER_TABLE.length} of 400
              </p>
              <div className="flex items-center justify-center gap-6">
                <ChevronLeft />
                <p className="bg-[#D4EFFF] py-1 px-3 rounded-lg">1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
                <ChevronRight />
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}

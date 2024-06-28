"use client";

import Image from "next/image";
import { useState } from "react";
import { AlignCenter, Bell, Calendar, ChevronDown, ChevronLeft, ChevronRight, Download, Mail, Maximize2, MessageSquareDot, MessageSquareMore, MoveUpRight } from "lucide-react";

import demographImg from "../../public/demo-grapg-img.png"
import demoProfileImg from "../../public/demo-profile-img.png"
import { DEMO_TABLE_DATA } from "@/lib/data";
import { TableFilter } from "@/components/table-filter";
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
  const [isTable, setTableOpen] = useState(false);

  return (
    <main className="px-10 bg-[rgb(240,245,250)] space-y-8 py-6">
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
        </div>
      </header>
      <section className="grid grid-cols-3 items-center justify-center place-items-center gap-8">
        <div className="p-5 rounded-3xl bg-white space-y-8 size-full">
          <div className="flex items-center justify-between gap-20">
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
            <Image
              src={demographImg}
              alt="graph img"
              width={200}
              height={200}
            />
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
          <div className="flex items-center justify-between gap-20">
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
          <div className="flex items-center justify-between gap-20">
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
              <SheetContent>
                <TableFilter />
              </SheetContent>
            </Sheet>
            <Button variant={"secondary"} className="bg-white border">
              <Maximize2 />
            </Button>
          </div>
        </header>
        <div className="p-2 bg-white rounded-xl">
          <Table>
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
              {DEMO_TABLE_DATA.map((data, idx) => (
                <TableRow key={idx}>
                  <TableCell className="flex items-center gap-4">
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
              ))}
            </TableBody>
          </Table>
        </div>
      </section>
    </main>
  );
}

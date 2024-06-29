import Image from "next/image";
import { Calendar, ChevronDown, ChevronRight, ChevronsUp, MoveUpRight } from "lucide-react";

import demographImg from "../../public/demo-grapg-img.png";
import demoBarImg from "../../public/demo-bar-img.png"
import demoProfileImg from "../../public/demo-profile-img.png"
import { DEMO_ONE_TIME_TASK } from "@/lib/data";
import { Button } from "./ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";


export function EmployeeSheetSection(props: any) {
  return (
    <section className="py-16 space-y-10">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src={demoProfileImg}
            alt="profile img"
            width={70}
            height={70}
          />
          <div>
            <p className="text-lg font-bold">
              {props.data.name}
            </p>
            <p>
              {props.data.position || "Senior Manager"}
            </p>
            <p>
              {props.data.dept} | {props.data.branch}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Calendar />
          <Button variant={"outline"} className="flex items-center gap-2 border border-zinc-400">
            Download <ChevronDown />
          </Button>
        </div>
      </div>
      <div className="flex items-center justify-between gap-3">
        <div className="p-5 rounded-3xl bg-white space-y-2 shadow-[0_0_10px] shadow-zinc-300">
          <div className="flex items-center justify-between">
            <h1 className="text-[16px] font-[600]">
              Total tasks completed
            </h1>
            <div className="flex items-center gap-1 text-sm bg-[#F3F4F6] py-1 px-2 rounded-3xl">
              <Calendar
                className="scale-90"
              />
              This weeks Trend
              <ChevronDown />
            </div>
          </div>
          <div className="flex text-sm items-center justify-center gap-2 bg-[#EEFDF1] w-full py-1 rounded-xl">
            <MoveUpRight
              className="text-emerald-500"
            />
            <span className="font-[600] text-emerald-500">Up 4 %</span>
            <span className="text-[#5B5967]">from previous week</span>
          </div>
          <div className="flex items-center justify-between gap-24">
            <div className="relative">
              <Image
                src={demographImg}
                alt="graph img"
                width={170}
                height={170}
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
        <div className="p-5 space-y-14 shadow-[0_0_10px] shadow-zinc-300 rounded-xl">
          <div className="flex items-center justify-between">
            <h1 className="text-[16px] font-[600]">
              Total taska completed
            </h1>
            <div className="flex items-center gap-1 text-sm bg-[#F3F4F6] py-1 px-2 rounded-3xl">
              <Calendar
                className="scale-90"
              />
              This weeks Trend
              <ChevronDown />
            </div>
          </div>
          <Image
            src={demoBarImg}
            alt="bar img"
            width={500}
            height={500}
          />
        </div>
      </div>
      <p className="font-bold">
        Tasks Not Approved : 34
      </p>
      <div className="border-2 border-zinc-300 p-4 rounded-2xl">
        <div className="flex items-center justify-between">
          <p className="font-bold">
            Total one-time tasks assigned 34
          </p>
          <Button variant={"ghost"} className="flex items-center gap-2">
            View More <ChevronRight />
          </Button>
        </div>
        <Table className="border-2 border-zinc-200 rounded-3xl">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[300px]">Tasks</TableHead>
              <TableHead className="text-center">Status</TableHead>
              <TableHead className="text-center">Assignee</TableHead>
              <TableHead>Due Date</TableHead>
              <TableHead>Priority</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {DEMO_ONE_TIME_TASK.map((task, index) => (
              <TableRow key={index}>
                <TableCell>{task.task}</TableCell>
                <TableCell className="text-center">
                  <p className={`
                    py-2 px-4 rounded-2xl
                    ${task.status === "Overdue" ? "bg-red-100 text-red-500" : "bg-cyan-100 text-cyan-500"}
                  `}>
                    {task.status}
                  </p>
                </TableCell>
                <TableCell className="text-center">{task.assignee}</TableCell>
                <TableCell>{task.dueDate.toDateString()}</TableCell>
                <TableCell><ChevronsUp className="text-red-400" /></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  )
}

import Image from "next/image"
import { Dispatch, SetStateAction, useState } from "react";

import clapgrowLogo from "../../public/clapgrow-logo.png"
import { SIDEBAR_LINKS } from "@/lib/data"
import { ChevronLeft, ChevronRight } from "lucide-react";
import { usePathname } from "next/navigation";


type TProps = {
  isOpen: boolean
  setSidebarOpen: Dispatch<SetStateAction<boolean>>
}


export function SideBar(props: TProps) {
  const pathname = usePathname();

  return (
    <aside className={`relative text-black py-5 px-4 space-y-10 h-screen
      ${props.isOpen ? "bg-white w-1/6" : "bg-transparent w-0"}
    `}>
      <Image
        src={clapgrowLogo}
        alt="Clapgrow Logo"
        width={120}
        height={120}
      />

      <div className="flex flex-col items-center justify-start w-full">
        {SIDEBAR_LINKS.map((link, index) => (
          <div
            key={index}
            className={`flex items-start justify-start space-x-2 mt-5 w-full py-2 px-2 rounded-xl cursor-pointer
              ${props.isOpen && link.label === "Dashboard" && pathname === "/" ? "bg-blue-100" : "bg-white"}
            `}
          >
            <link.Icon size={20} />
            <span>{link.label}</span>
          </div>
        ))}
      </div>

      <button
        onClick={() => props.setSidebarOpen(prev => !prev)}
        className={`
          ${props.isOpen ? "-right-4" : "right-2"}
          z-10 absolute top-0 p-1 rounded-full bg-white border-2 border-gray-400
        `}
      >
        {props.isOpen
          ? <ChevronLeft className="text-gray-500" />
          : <ChevronRight className="text-gray-500" />
        }
      </button>
    </aside>
  )
}

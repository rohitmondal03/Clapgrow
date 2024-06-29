import { HelpCircle, LayoutDashboard, Search, Settings2, Triangle, UserCheck } from "lucide-react"

export const DEMO_TABLE_DATA = new Array(40).fill({
  name: "Employee 1",
  dept: "Technology",
  branch: "Kolkata",
  taskOverdue: 10,
  weeklyScore: 94,
  notApprovedCount: 34
})


export const SIDEBAR_LINKS = [
  {
    label: "Dashboard",
    Icon: LayoutDashboard,
  },
  {
    label: "Process",
    Icon: Triangle,
  },
  {
    label: "Smart Analysis",
    Icon: Search,
  },
  {
    label: "Attendance",
    Icon: UserCheck,
  },
  {
    label: "Settings",
    Icon: Settings2,
  },
  {
    label: "Help",
    Icon: HelpCircle,
  }
]
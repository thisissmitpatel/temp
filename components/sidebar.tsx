"use client"

import { Shield, Home, ClipboardList, List, Bug, Globe, Server, Package, FileText, Settings } from "lucide-react"
import { cn } from "@/lib/utils"

interface SidebarProps {
  activePage: string
  setActivePage: (page: string) => void
}

const menuItems = [
  { id: "dashboard", label: "Dashboard", icon: Home },
  { id: "executive-summary", label: "Executive Summary", icon: ClipboardList },
  { id: "risk-profile", label: "Risk Profile", icon: List },
  { id: "vulnerabilities", label: "Vulnerabilities", icon: Bug },
  { id: "domains", label: "Domains", icon: Globe },
  { id: "ip-addresses", label: "IP Addresses", icon: Server },
  { id: "detected-products", label: "Detected Products", icon: Package },
  { id: "typosquatting", label: "Typosquatting", icon: Shield },
  { id: "settings", label: "Settings", icon: Settings },
  { id: "reports", label: "Reports", icon: FileText },
]

export function Sidebar({ activePage, setActivePage }: SidebarProps) {
  return (
    <div className="w-[280px] bg-slate-800 border-r border-slate-700 flex flex-col">
      {/* Title Section */}
      <div className="p-6 border-b border-slate-700">
        <div className="flex items-center gap-3">
          <Shield className="h-8 w-8 text-indigo-400" />
          <h1 className="text-xl font-semibold text-white">TPRM Scanner</h1>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon
            return (
              <li key={item.id}>
                <button
                  onClick={() => setActivePage(item.id)}
                  className={cn(
                    "w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors",
                    activePage === item.id
                      ? "bg-indigo-600 text-white"
                      : "text-slate-300 hover:bg-slate-700 hover:text-white",
                  )}
                >
                  <Icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </button>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}

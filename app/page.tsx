"use client"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { Dashboard } from "@/components/pages/dashboard"
import { ExecutiveSummary } from "@/components/pages/executive-summary"
import { RiskProfile } from "@/components/pages/risk-profile"
import { Vulnerabilities } from "@/components/pages/vulnerabilities"
import { Domains } from "@/components/pages/domains"
import { IPAddresses } from "@/components/pages/ip-addresses"
import { DetectedProducts } from "@/components/pages/detected-products"
import { Typosquatting } from "@/components/pages/typosquatting"
import { Reports } from "@/components/pages/reports"
import { Settings } from "@/components/pages/settings"

export default function Home() {
  const [activePage, setActivePage] = useState("dashboard")

  const renderPage = () => {
    switch (activePage) {
      case "dashboard":
        return <Dashboard />
      case "executive-summary":
        return <ExecutiveSummary />
      case "risk-profile":
        return <RiskProfile />
      case "vulnerabilities":
        return <Vulnerabilities />
      case "domains":
        return <Domains />
      case "ip-addresses":
        return <IPAddresses />
      case "detected-products":
        return <DetectedProducts />
      case "typosquatting":
        return <Typosquatting />
      case "reports":
        return <Reports />
      case "settings":
        return <Settings />
      default:
        return <Dashboard />
    }
  }

  const getPageTitle = () => {
    switch (activePage) {
      case "dashboard":
        return "Dashboard"
      case "executive-summary":
        return "Executive Summary"
      case "risk-profile":
        return "Risk Profile"
      case "vulnerabilities":
        return "Vulnerabilities"
      case "domains":
        return "Domains"
      case "ip-addresses":
        return "IP Addresses"
      case "detected-products":
        return "Detected Products"
      case "typosquatting":
        return "Typosquatting"
      case "reports":
        return "Reports"
      case "settings":
        return "Settings"
      default:
        return "Dashboard"
    }
  }

  return (
    <div className="flex h-screen bg-slate-900">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      <div className="flex-1 flex flex-col">
        <Header title={getPageTitle()} />
        <main className="flex-1 overflow-auto p-6">{renderPage()}</main>
      </div>
    </div>
  )
}

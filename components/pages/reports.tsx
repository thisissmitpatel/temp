"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export function Reports() {
  const handleExportJSON = () => {
    // Simulate JSON export
    const reportData = {
      timestamp: new Date().toISOString(),
      domain: "domain-placeholder.com",
      overallScore: 946,
      risksFound: 12,
      vulnerabilities: 4,
      summary: "Executive summary data exported successfully",
    }

    const dataStr = JSON.stringify(reportData, null, 2)
    const dataUri = "data:application/json;charset=utf-8," + encodeURIComponent(dataStr)

    const exportFileDefaultName = `tprm-report-${new Date().toISOString().split("T")[0]}.json`

    const linkElement = document.createElement("a")
    linkElement.setAttribute("href", dataUri)
    linkElement.setAttribute("download", exportFileDefaultName)
    linkElement.click()
  }

  return (
    <div className="space-y-6">
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Generate Report</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-300">Export the latest Executive Summary data for the active target.</p>
          <Button onClick={handleExportJSON} className="bg-indigo-600 hover:bg-indigo-700 text-white">
            <Download className="h-4 w-4 mr-2" />
            Export as JSON
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

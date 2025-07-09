import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const vulnerabilityData = [
  {
    cve: "CVE-2021-44228",
    severity: "Critical",
    software: "Apache Log4j",
    description: "Remote code execution vulnerability",
    affectedAssets: 3,
  },
  {
    cve: "CVE-2022-23307",
    severity: "High",
    software: "jQuery 3.4.1",
    description: "Cross-site scripting vulnerability",
    affectedAssets: 8,
  },
  {
    cve: "CVE-2021-23337",
    severity: "Medium",
    software: "Bootstrap 4.6.0",
    description: "Prototype pollution vulnerability",
    affectedAssets: 5,
  },
]

const getSeverityColor = (severity: string) => {
  switch (severity) {
    case "Critical":
      return "bg-red-600 text-white"
    case "High":
      return "bg-orange-600 text-white"
    case "Medium":
      return "bg-yellow-600 text-black"
    case "Low":
      return "bg-blue-600 text-white"
    default:
      return "bg-gray-600 text-white"
  }
}

export function Vulnerabilities() {
  return (
    <div className="space-y-6">
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Active Vulnerabilities</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left py-3 px-4 text-slate-300 font-medium">CVE ID</th>
                  <th className="text-left py-3 px-4 text-slate-300 font-medium">Severity</th>
                  <th className="text-left py-3 px-4 text-slate-300 font-medium">Vulnerable Software</th>
                  <th className="text-left py-3 px-4 text-slate-300 font-medium">Description</th>
                  <th className="text-left py-3 px-4 text-slate-300 font-medium">Affected Assets</th>
                </tr>
              </thead>
              <tbody>
                {vulnerabilityData.map((vuln, index) => (
                  <tr key={index} className="border-b border-slate-700/50 hover:bg-slate-700/30">
                    <td className="py-3 px-4 text-blue-400 font-mono">{vuln.cve}</td>
                    <td className="py-3 px-4">
                      <Badge className={`${getSeverityColor(vuln.severity)} text-xs`}>{vuln.severity}</Badge>
                    </td>
                    <td className="py-3 px-4 text-white">{vuln.software}</td>
                    <td className="py-3 px-4 text-slate-300">{vuln.description}</td>
                    <td className="py-3 px-4 text-slate-300">{vuln.affectedAssets}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

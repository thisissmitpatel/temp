import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const riskData = [
  {
    severity: "High",
    finding: "SSL expires within 20 days",
    category: "SSL/TLS",
    firstDetected: "2024-01-15",
    assetsAffected: 3,
  },
  {
    severity: "Medium",
    finding: "Missing X-Frame-Options header",
    category: "Security Headers",
    firstDetected: "2024-01-10",
    assetsAffected: 8,
  },
  {
    severity: "Critical",
    finding: "Weak cipher suites detected",
    category: "SSL/TLS",
    firstDetected: "2024-01-12",
    assetsAffected: 2,
  },
  {
    severity: "Low",
    finding: "Content Security Policy not implemented",
    category: "Security Headers",
    firstDetected: "2024-01-08",
    assetsAffected: 12,
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

export function RiskProfile() {
  return (
    <div className="space-y-6">
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Risk Details</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left py-3 px-4 text-slate-300 font-medium">Severity</th>
                  <th className="text-left py-3 px-4 text-slate-300 font-medium">Finding / Risk</th>
                  <th className="text-left py-3 px-4 text-slate-300 font-medium">Category</th>
                  <th className="text-left py-3 px-4 text-slate-300 font-medium">First Detected</th>
                  <th className="text-left py-3 px-4 text-slate-300 font-medium">Assets Affected</th>
                </tr>
              </thead>
              <tbody>
                {riskData.map((risk, index) => (
                  <tr key={index} className="border-b border-slate-700/50 hover:bg-slate-700/30">
                    <td className="py-3 px-4">
                      <Badge className={`${getSeverityColor(risk.severity)} text-xs`}>{risk.severity}</Badge>
                    </td>
                    <td className="py-3 px-4 text-white font-medium">{risk.finding}</td>
                    <td className="py-3 px-4 text-slate-300">{risk.category}</td>
                    <td className="py-3 px-4 text-slate-300">{risk.firstDetected}</td>
                    <td className="py-3 px-4 text-slate-300">{risk.assetsAffected}</td>
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

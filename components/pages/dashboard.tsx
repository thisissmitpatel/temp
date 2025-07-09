import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const monitoredTargets = [
  {
    domain: "example.com",
    overallScore: 892,
    status: "COMPLETE",
    lastScanned: "2024-01-15 14:30",
  },
  {
    domain: "api.example.com",
    overallScore: 756,
    status: "RUNNING",
    lastScanned: "2024-01-15 15:45",
  },
  {
    domain: "admin.example.com",
    overallScore: 934,
    status: "COMPLETE",
    lastScanned: "2024-01-15 12:15",
  },
]

const getStatusColor = (status: string) => {
  switch (status) {
    case "COMPLETE":
      return "bg-green-600 text-white"
    case "RUNNING":
      return "bg-blue-600 text-white"
    case "FAILED":
      return "bg-red-600 text-white"
    default:
      return "bg-gray-600 text-white"
  }
}

const getScoreColor = (score: number) => {
  if (score >= 900) return "text-green-400"
  if (score >= 700) return "text-yellow-400"
  return "text-red-400"
}

export function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Welcome Message */}
      <div className="text-slate-300">
        <h3 className="text-lg font-medium text-white mb-2">Welcome to TPRM Scanner</h3>
        <p>Monitor your organization's third-party risk management and security posture.</p>
      </div>

      {/* Start One-Time Scan */}
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Start a One-Time Scan</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <Input
              placeholder="Enter domain (e.g., example.com)"
              className="flex-1 bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
            />
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">Start Scan</Button>
          </div>
        </CardContent>
      </Card>

      {/* Monitored Targets */}
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Monitored Targets</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left py-3 px-4 text-slate-300 font-medium">Domain</th>
                  <th className="text-left py-3 px-4 text-slate-300 font-medium">Overall Score</th>
                  <th className="text-left py-3 px-4 text-slate-300 font-medium">Status</th>
                  <th className="text-left py-3 px-4 text-slate-300 font-medium">Last Scanned</th>
                </tr>
              </thead>
              <tbody>
                {monitoredTargets.map((target, index) => (
                  <tr key={index} className="border-b border-slate-700/50 hover:bg-slate-700/30">
                    <td className="py-3 px-4 text-white font-mono">{target.domain}</td>
                    <td className="py-3 px-4">
                      <span className={`font-bold ${getScoreColor(target.overallScore)}`}>{target.overallScore}</span>
                    </td>
                    <td className="py-3 px-4">
                      <Badge className={`${getStatusColor(target.status)} text-xs`}>{target.status}</Badge>
                    </td>
                    <td className="py-3 px-4 text-slate-300">{target.lastScanned}</td>
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

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const domainData = [
  {
    domain: "www.example.com",
    score: 934,
    status: "Active",
    lastScanned: "2024-01-15",
  },
  {
    domain: "api.example.com",
    score: 756,
    status: "Active",
    lastScanned: "2024-01-15",
  },
  {
    domain: "admin.example.com",
    score: 892,
    status: "Active",
    lastScanned: "2024-01-14",
  },
  {
    domain: "staging.example.com",
    score: 678,
    status: "Inactive",
    lastScanned: "2024-01-13",
  },
  {
    domain: "mail.example.com",
    score: 823,
    status: "Active",
    lastScanned: "2024-01-15",
  },
]

const getScoreColor = (score: number) => {
  if (score >= 900) return "text-green-400"
  if (score >= 700) return "text-yellow-400"
  return "text-red-400"
}

export function Domains() {
  const totalDomains = domainData.length
  const activeDomains = domainData.filter((d) => d.status === "Active").length
  const inactiveDomains = totalDomains - activeDomains

  return (
    <div className="space-y-6">
      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-slate-400">Total Domains Scanned</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-white">{totalDomains}</div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-slate-400">Active Domains</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-400">{activeDomains}</div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-slate-400">Inactive Domains</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-red-400">{inactiveDomains}</div>
          </CardContent>
        </Card>
      </div>

      {/* Domain List */}
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Discovered Subdomains</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left py-3 px-4 text-slate-300 font-medium">Domain</th>
                  <th className="text-left py-3 px-4 text-slate-300 font-medium">Score</th>
                  <th className="text-left py-3 px-4 text-slate-300 font-medium">Status</th>
                  <th className="text-left py-3 px-4 text-slate-300 font-medium">Last Scanned</th>
                </tr>
              </thead>
              <tbody>
                {domainData.map((domain, index) => (
                  <tr key={index} className="border-b border-slate-700/50 hover:bg-slate-700/30">
                    <td className="py-3 px-4 text-white font-mono">{domain.domain}</td>
                    <td className="py-3 px-4">
                      <span className={`font-bold ${getScoreColor(domain.score)}`}>{domain.score}</span>
                    </td>
                    <td className="py-3 px-4">
                      <Badge
                        variant="outline"
                        className={
                          domain.status === "Active"
                            ? "bg-green-900/20 text-green-400 border-green-700"
                            : "bg-red-900/20 text-red-400 border-red-700"
                        }
                      >
                        {domain.status}
                      </Badge>
                    </td>
                    <td className="py-3 px-4 text-slate-300">{domain.lastScanned}</td>
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

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const maliciousDomains = ["examp1e.com", "exampl3.com", "exarnple.com", "example-secure.com", "example.co"]

export function Typosquatting() {
  return (
    <div className="space-y-6">
      {/* Primary Domain */}
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Primary Domain Being Monitored</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-lg font-mono text-indigo-400">example.com</div>
          <p className="text-slate-400 mt-2">Monitoring for typosquatting and brand abuse</p>
        </CardContent>
      </Card>

      {/* Malicious Domains */}
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Potentially Malicious Registered Domains</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left py-3 px-4 text-slate-300 font-medium">Domain</th>
                  <th className="text-left py-3 px-4 text-slate-300 font-medium">Risk Level</th>
                  <th className="text-left py-3 px-4 text-slate-300 font-medium">Registered Date</th>
                  <th className="text-left py-3 px-4 text-slate-300 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {maliciousDomains.map((domain, index) => (
                  <tr key={index} className="border-b border-slate-700/50 hover:bg-slate-700/30">
                    <td className="py-3 px-4 text-white font-mono">{domain}</td>
                    <td className="py-3 px-4 text-red-400 font-medium">High</td>
                    <td className="py-3 px-4 text-slate-300">2024-01-{10 + index}</td>
                    <td className="py-3 px-4 text-yellow-400">Monitoring</td>
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

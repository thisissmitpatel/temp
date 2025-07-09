import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const ipData = [
  {
    ipAddress: "52.84.124.89",
    owner: "Amazon Technologies Inc.",
    geolocation: "Virginia, USA",
  },
  {
    ipAddress: "104.21.45.167",
    owner: "Cloudflare Inc.",
    geolocation: "California, USA",
  },
  {
    ipAddress: "40.112.72.205",
    owner: "Microsoft Corporation",
    geolocation: "Washington, USA",
  },
  {
    ipAddress: "185.199.108.153",
    owner: "GitHub Inc.",
    geolocation: "California, USA",
  },
  {
    ipAddress: "151.101.193.140",
    owner: "Fastly Inc.",
    geolocation: "California, USA",
  },
]

export function IPAddresses() {
  return (
    <div className="space-y-6">
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Discovered IP Addresses</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left py-3 px-4 text-slate-300 font-medium">IP Address</th>
                  <th className="text-left py-3 px-4 text-slate-300 font-medium">Owner</th>
                  <th className="text-left py-3 px-4 text-slate-300 font-medium">Geolocation</th>
                </tr>
              </thead>
              <tbody>
                {ipData.map((ip, index) => (
                  <tr key={index} className="border-b border-slate-700/50 hover:bg-slate-700/30">
                    <td className="py-3 px-4 text-white font-mono">{ip.ipAddress}</td>
                    <td className="py-3 px-4 text-slate-300">{ip.owner}</td>
                    <td className="py-3 px-4 text-slate-300">{ip.geolocation}</td>
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

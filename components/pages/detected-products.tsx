import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const productData = [
  {
    product: "Nginx",
    category: "Web Server",
    domainsIpsAffected: 15,
  },
  {
    product: "React",
    category: "JavaScript Framework",
    domainsIpsAffected: 8,
  },
  {
    product: "jQuery",
    category: "JavaScript Library",
    domainsIpsAffected: 12,
  },
  {
    product: "Cloudflare",
    category: "CDN",
    domainsIpsAffected: 23,
  },
  {
    product: "Bootstrap",
    category: "CSS Framework",
    domainsIpsAffected: 6,
  },
  {
    product: "Apache HTTP Server",
    category: "Web Server",
    domainsIpsAffected: 4,
  },
]

export function DetectedProducts() {
  return (
    <div className="space-y-6">
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Detected Technologies</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left py-3 px-4 text-slate-300 font-medium">Product</th>
                  <th className="text-left py-3 px-4 text-slate-300 font-medium">Category</th>
                  <th className="text-left py-3 px-4 text-slate-300 font-medium">Domains & IPs Affected</th>
                </tr>
              </thead>
              <tbody>
                {productData.map((product, index) => (
                  <tr key={index} className="border-b border-slate-700/50 hover:bg-slate-700/30">
                    <td className="py-3 px-4 text-white font-medium">{product.product}</td>
                    <td className="py-3 px-4 text-slate-300">{product.category}</td>
                    <td className="py-3 px-4 text-indigo-400 font-bold">{product.domainsIpsAffected}</td>
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

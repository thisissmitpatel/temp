import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export function Settings() {
  return (
    <div className="space-y-6">
      {/* Continuous Monitoring */}
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Continuous Monitoring</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="domain" className="text-slate-300">
              Primary Target Domain
            </Label>
            <Input id="domain" defaultValue="example.com" className="bg-slate-700 border-slate-600 text-white" />
          </div>
          <div className="flex items-center space-x-2">
            <Switch id="auto-scan" />
            <Label htmlFor="auto-scan" className="text-slate-300">
              Enable automatic daily scans
            </Label>
          </div>
          <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">Save Settings</Button>
        </CardContent>
      </Card>

      {/* Notification Settings */}
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Notification Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-2">
            <Switch id="email-alerts" defaultChecked />
            <Label htmlFor="email-alerts" className="text-slate-300">
              Email alerts for critical vulnerabilities
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch id="weekly-reports" defaultChecked />
            <Label htmlFor="weekly-reports" className="text-slate-300">
              Weekly summary reports
            </Label>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-slate-300">
              Notification Email
            </Label>
            <Input
              id="email"
              type="email"
              defaultValue="john.doe@company.com"
              className="bg-slate-700 border-slate-600 text-white"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

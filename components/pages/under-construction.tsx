import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Construction } from "lucide-react"

interface UnderConstructionProps {
  title: string
}

export function UnderConstruction({ title }: UnderConstructionProps) {
  return (
    <div className="space-y-6">
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Construction className="h-5 w-5 text-yellow-400" />
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-slate-400">This feature is under construction.</p>
        </CardContent>
      </Card>
    </div>
  )
}

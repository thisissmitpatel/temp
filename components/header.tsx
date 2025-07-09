import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface HeaderProps {
  title: string
}

export function Header({ title }: HeaderProps) {
  return (
    <header className="h-16 bg-slate-800 border-b border-slate-700 flex items-center justify-between px-6">
      <h2 className="text-xl font-semibold text-white">{title}</h2>

      <div className="flex items-center gap-3">
        <Avatar className="h-8 w-8">
          <AvatarImage src="/placeholder.svg?height=32&width=32" alt="John Doe" />
          <AvatarFallback className="bg-indigo-600 text-white">JD</AvatarFallback>
        </Avatar>
        <span className="text-slate-300">John Doe</span>
      </div>
    </header>
  )
}

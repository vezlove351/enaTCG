import { ScrollArea } from "@/components/ui/scroll-area"

export function CombatLog({ messages }) {
  return (
    <div className="w-64 bg-ena-darkgray/50 rounded-lg p-3 border border-gray-700">
      <h3 className="text-sm font-bold mb-2 text-ena-yellow font-main">COMBAT LOG</h3>
      <ScrollArea className="h-[300px]">
        <div className="space-y-2">
          {messages.length === 0 ? (
            <p className="text-xs text-gray-400 italic font-cards">No actions yet...</p>
          ) : (
            messages.map((message, index) => (
              <div key={index} className="text-xs border-l-2 border-ena-yellow pl-2 py-1 font-cards">
                {message}
              </div>
            ))
          )}
        </div>
      </ScrollArea>
    </div>
  )
}

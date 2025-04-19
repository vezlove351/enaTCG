import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Zap } from "lucide-react"

export function GameCard({ card, mini = false, disabled = false }) {
  if (!card) return null

  const { name, rarity, type, attack, defense, description, special, cardType, manaCost, imagePath } = card

  // Determine card color class based on type
  let cardColorClass = ""
  if (type.includes("NOVA SYNTH") || cardType === "SPELL") {
    cardColorClass = "mana-card"
  } else if (type.includes("ASHEN ORDER")) {
    cardColorClass = "red-card"
  } else if (type.includes("SHINOBYTE")) {
    cardColorClass = "green-card"
  } else if (type.includes("ZERO DIVISION")) {
    cardColorClass = "blue-card"
  } else if (type.includes("NEUTRAL") || type.includes("BOOST")) {
    cardColorClass = "neutral-card"
  }

  if (mini) {
    return (
      <div
        className={`relative w-full h-full rounded overflow-hidden ${disabled ? "opacity-50" : ""} ${cardColorClass}`}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10"></div>
        <div className="h-full w-full bg-gray-800">
          {imagePath ? (
            <Image src={imagePath || "/placeholder.svg"} alt={name} fill className="object-cover z-0" />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-700">
              <span className="text-xs font-cards">{name}</span>
            </div>
          )}
        </div>
        <div className="absolute top-0 left-0 right-0 flex justify-between items-start p-1 z-20">
          <div className="bg-black/70 px-1 rounded text-[8px] font-bold text-ena-yellow font-cards">
            {rarity.substring(0, 1)}
          </div>
          {cardType === "UNIT" ? (
            <div className="flex flex-col gap-0.5">
              <div className="bg-ena-red/90 px-1 rounded text-[8px] font-bold font-cards">{attack}</div>
              <div className="bg-ena-blue/90 px-1 rounded text-[8px] font-bold font-cards">{defense}</div>
            </div>
          ) : (
            <div className="bg-ena-green/90 px-1 rounded text-[8px] font-bold font-cards">S</div>
          )}
        </div>
        {manaCost !== undefined && (
          <div className="absolute bottom-1 right-1 bg-ena-purple/90 px-1 rounded-full text-[8px] font-bold z-20 flex items-center font-cards">
            <Zap className="h-2 w-2 mr-0.5" />
            {manaCost}
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 p-1 bg-black/80 z-20">
          <h4 className="text-[8px] font-bold truncate card-title">{name}</h4>
        </div>
      </div>
    )
  }

  return (
    <Card
      className={`w-full h-full relative overflow-hidden border-2 border-ena-yellow ${disabled ? "opacity-50" : ""} ${cardColorClass}`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10"></div>
      <div className="h-full w-full bg-gray-800">
        {imagePath ? (
          <Image src={imagePath || "/placeholder.svg"} alt={name} fill className="object-cover z-0" />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-700">
            <span className="text-sm font-cards">{name}</span>
          </div>
        )}
      </div>
      <div className="absolute top-0 left-0 right-0 flex justify-between items-start p-2 z-20">
        <div className="bg-black/70 px-1 py-0.5 rounded text-xs font-bold text-ena-yellow font-cards">{rarity}</div>
        {special && (
          <div className="bg-ena-yellow/90 px-1 py-0.5 rounded text-xs font-bold text-black font-cards">{special}</div>
        )}
      </div>
      <div className="absolute top-6 left-1 bg-black/70 px-1 py-0.5 rounded text-xs font-bold text-white font-cards">
        {type}
      </div>
      {cardType === "UNIT" ? (
        <div className="absolute top-1 right-1 flex flex-col gap-0.5 z-20">
          <div className="bg-ena-red/90 px-1 py-0.5 rounded text-xs font-bold font-cards">ATK: {attack}</div>
          <div className="bg-ena-blue/90 px-1 py-0.5 rounded text-xs font-bold font-cards">DEF: {defense}</div>
        </div>
      ) : (
        <div className="absolute top-1 right-1 z-20">
          <div className="bg-ena-green/90 px-1 py-0.5 rounded text-xs font-bold font-cards">{cardType}</div>
        </div>
      )}
      {manaCost !== undefined && (
        <div className="absolute bottom-8 right-1 bg-ena-purple/90 px-1 py-0.5 rounded-full text-xs font-bold z-20 flex items-center font-cards">
          <Zap className="h-2 w-2 mr-0.5" />
          {manaCost}
        </div>
      )}
      <div className="absolute bottom-0 left-0 right-0 p-2 bg-black/80 z-20">
        <h4 className="text-sm font-bold mb-1 truncate card-title">{name}</h4>
        <p className="text-xs text-gray-300 line-clamp-1 font-cards">{description}</p>
      </div>
    </Card>
  )
}

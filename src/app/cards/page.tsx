"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { initialDeck } from "@/lib/game-data"
import { GameCard } from "@/components/game-card"

export default function CardsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [rarityFilter, setRarityFilter] = useState("all")
  const [typeFilter, setTypeFilter] = useState("all")
  const [cardTypeFilter, setCardTypeFilter] = useState("all")

  // Get unique values for filters
  const rarities = ["all", ...new Set(initialDeck.map((card) => card.rarity.toLowerCase()))]
  const types = ["all", ...new Set(initialDeck.map((card) => card.type.toLowerCase()))]
  const cardTypes = ["all", ...new Set(initialDeck.map((card) => card.cardType.toLowerCase()))]

  // Filter cards
  const filteredCards = initialDeck.filter((card) => {
    const matchesSearch =
      card.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      card.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesRarity = rarityFilter === "all" || card.rarity.toLowerCase() === rarityFilter
    const matchesType = typeFilter === "all" || card.type.toLowerCase() === typeFilter
    const matchesCardType = cardTypeFilter === "all" || card.cardType.toLowerCase() === cardTypeFilter

    return matchesSearch && matchesRarity && matchesType && matchesCardType
  })

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-ena-darkgray text-white">
      <header className="container mx-auto py-4">
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2 hover:text-ena-yellow transition">
            <ArrowLeft className="h-5 w-5" />
            <span className="font-main">BACK TO HOME</span>
          </Link>
        </div>
      </header>

      <main className="container mx-auto py-6">
        <h1 className="text-4xl font-bold mb-8 text-center">CARD COLLECTION</h1>

        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div>
            <Input
              placeholder="Search cards..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-ena-darkgray border-gray-700 font-cards"
            />
          </div>

          <div>
            <Select value={rarityFilter} onValueChange={setRarityFilter}>
              <SelectTrigger className="bg-ena-darkgray border-gray-700 font-cards">
                <SelectValue placeholder="Filter by rarity" />
              </SelectTrigger>
              <SelectContent>
                {rarities.map((rarity) => (
                  <SelectItem key={rarity} value={rarity} className="font-cards">
                    {rarity === "all" ? "ALL RARITIES" : rarity.toUpperCase()}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Select value={typeFilter} onValueChange={setTypeFilter}>
              <SelectTrigger className="bg-ena-darkgray border-gray-700 font-cards">
                <SelectValue placeholder="Filter by type" />
              </SelectTrigger>
              <SelectContent>
                {types.map((type) => (
                  <SelectItem key={type} value={type} className="font-cards">
                    {type === "all" ? "ALL TYPES" : type.toUpperCase()}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Select value={cardTypeFilter} onValueChange={setCardTypeFilter}>
              <SelectTrigger className="bg-ena-darkgray border-gray-700 font-cards">
                <SelectValue placeholder="Filter by card type" />
              </SelectTrigger>
              <SelectContent>
                {cardTypes.map((cardType) => (
                  <SelectItem key={cardType} value={cardType} className="font-cards">
                    {cardType === "all" ? "ALL CARD TYPES" : cardType.toUpperCase()}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredCards.map((card) => (
            <div key={card.id} className="flex justify-center">
              <div className="w-full h-80 relative">
                <GameCard card={card} />
              </div>
            </div>
          ))}
        </div>

        {filteredCards.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 font-cards">No cards found matching your filters.</p>
            <Button
              variant="outline"
              className="mt-4 border-ena-yellow text-ena-yellow font-main"
              onClick={() => {
                setSearchTerm("")
                setRarityFilter("all")
                setTypeFilter("all")
                setCardTypeFilter("all")
              }}
            >
              RESET FILTERS
            </Button>
          </div>
        )}
      </main>
    </div>
  )
}

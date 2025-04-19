"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Save, Plus, Trash2, ArrowLeft, ArrowRight } from "lucide-react"
import { GameCard } from "@/components/game-card"
import { initialDeck } from "@/lib/game-data"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog"

export function DeckBuilder({ onSaveDeck, onCancel }) {
  const [searchTerm, setSearchTerm] = useState("")
  const [rarityFilter, setRarityFilter] = useState("all")
  const [typeFilter, setTypeFilter] = useState("all")
  const [cardTypeFilter, setCardTypeFilter] = useState("all")
  const [currentDeck, setCurrentDeck] = useState([])
  const [deckName, setDeckName] = useState("New Deck")
  const [savedDecks, setSavedDecks] = useState([
    { id: 1, name: "Ashen Order Aggro", cards: initialDeck.slice(0, 15) },
    { id: 2, name: "Shinobyte Control", cards: initialDeck.slice(5, 20) },
  ])
  const [selectedDeck, setSelectedDeck] = useState(null)
  const [saveDeckDialogOpen, setSaveDeckDialogOpen] = useState(false)

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

  // Load deck
  const loadDeck = (deck) => {
    setCurrentDeck([...deck.cards])
    setDeckName(deck.name)
    setSelectedDeck(deck.id)
  }

  // Add card to deck
  const addCardToDeck = (card) => {
    // Check if already have 2 copies
    const cardCount = currentDeck.filter((c) => c.id === card.id).length
    if (cardCount >= 2) {
      return // Max 2 copies per card
    }

    // Check deck size limit
    if (currentDeck.length >= 50) {
      return // Max 50 cards per deck
    }

    setCurrentDeck([...currentDeck, card])
  }

  // Remove card from deck
  const removeCardFromDeck = (index) => {
    const newDeck = [...currentDeck]
    newDeck.splice(index, 1)
    setCurrentDeck(newDeck)
  }

  // Save deck
  const saveDeck = () => {
    if (currentDeck.length < 15) {
      alert("Your deck must have at least 15 cards")
      return
    }

    const deckToSave = {
      id: selectedDeck || Date.now(),
      name: deckName,
      cards: currentDeck,
    }

    if (selectedDeck) {
      // Update existing deck
      const updatedDecks = savedDecks.map((deck) => (deck.id === selectedDeck ? deckToSave : deck))
      setSavedDecks(updatedDecks)
    } else {
      // Create new deck
      setSavedDecks([...savedDecks, deckToSave])
    }

    setSelectedDeck(deckToSave.id)
    setSaveDeckDialogOpen(false)

    if (onSaveDeck) {
      onSaveDeck(deckToSave)
    }
  }

  // Create new deck
  const createNewDeck = () => {
    setCurrentDeck([])
    setDeckName("New Deck")
    setSelectedDeck(null)
  }

  // Calculate deck stats
  const deckStats = {
    unitCount: currentDeck.filter((card) => card.cardType === "UNIT").length,
    spellCount: currentDeck.filter((card) => card.cardType === "SPELL").length,
    factionCounts: currentDeck.reduce((acc, card) => {
      const faction = card.type
      acc[faction] = (acc[faction] || 0) + 1
      return acc
    }, {}),
    manaCurve: currentDeck.reduce(
      (acc, card) => {
        const cost = Math.min(card.manaCost || 0, 7)
        acc[cost] = (acc[cost] || 0) + 1
        return acc
      },
      { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0 },
    ),
  }

  return (
    <div className="h-full flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <Button variant="outline" onClick={onCancel} className="font-main">
            <ArrowLeft className="mr-2 h-4 w-4" />
            BACK
          </Button>
          <h2 className="text-xl font-bold font-main">DECK BUILDER</h2>
        </div>

        <div className="flex items-center gap-2">
          <Dialog open={saveDeckDialogOpen} onOpenChange={setSaveDeckDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-ena-yellow text-black hover:bg-ena-yellow/80 font-main">
                <Save className="mr-2 h-4 w-4" />
                SAVE DECK
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-ena-darkgray border border-ena-yellow">
              <DialogHeader>
                <DialogTitle className="font-main text-ena-yellow">SAVE DECK</DialogTitle>
                <DialogDescription className="font-cards">
                  Give your deck a name and save it to your collection
                </DialogDescription>
              </DialogHeader>

              <div className="py-4">
                <label className="block mb-2 font-cards">DECK NAME</label>
                <Input
                  value={deckName}
                  onChange={(e) => setDeckName(e.target.value)}
                  className="bg-black/30 border-gray-700 font-cards"
                  placeholder="Enter deck name"
                />

                <div className="mt-4 bg-black/30 p-3 rounded-lg">
                  <div className="flex justify-between items-center font-cards">
                    <span>Cards in deck:</span>
                    <span className={currentDeck.length < 15 ? "text-red-500" : "text-ena-yellow"}>
                      {currentDeck.length}/50
                    </span>
                  </div>
                  {currentDeck.length < 15 && (
                    <p className="text-red-500 text-xs mt-1 font-cards">Your deck must have at least 15 cards</p>
                  )}
                </div>
              </div>

              <DialogFooter>
                <Button variant="outline" onClick={() => setSaveDeckDialogOpen(false)} className="font-main">
                  CANCEL
                </Button>
                <Button
                  className="bg-ena-yellow text-black hover:bg-ena-yellow/80 font-main"
                  onClick={saveDeck}
                  disabled={currentDeck.length < 15}
                >
                  SAVE DECK
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <Button variant="outline" onClick={createNewDeck} className="font-main">
            <Plus className="mr-2 h-4 w-4" />
            NEW DECK
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 flex-1">
        {/* Card Collection */}
        <div className="lg:col-span-2 bg-ena-darkgray/50 rounded-lg p-4 border border-gray-700 flex flex-col">
          <div className="flex flex-col md:flex-row gap-2 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search cards..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9 bg-black/30 border-gray-700 font-cards"
              />
            </div>

            <div className="flex gap-2">
              <Select value={rarityFilter} onValueChange={setRarityFilter}>
                <SelectTrigger className="w-[130px] bg-black/30 border-gray-700 font-cards">
                  <SelectValue placeholder="Rarity" />
                </SelectTrigger>
                <SelectContent className="bg-ena-darkgray border-gray-700">
                  {rarities.map((rarity) => (
                    <SelectItem key={rarity} value={rarity} className="font-cards">
                      {rarity === "all" ? "ALL RARITIES" : rarity.toUpperCase()}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={typeFilter} onValueChange={setTypeFilter}>
                <SelectTrigger className="w-[130px] bg-black/30 border-gray-700 font-cards">
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent className="bg-ena-darkgray border-gray-700">
                  {types.map((type) => (
                    <SelectItem key={type} value={type} className="font-cards">
                      {type === "all" ? "ALL TYPES" : type.toUpperCase()}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={cardTypeFilter} onValueChange={setCardTypeFilter}>
                <SelectTrigger className="w-[130px] bg-black/30 border-gray-700 font-cards">
                  <SelectValue placeholder="Card Type" />
                </SelectTrigger>
                <SelectContent className="bg-ena-darkgray border-gray-700">
                  {cardTypes.map((cardType) => (
                    <SelectItem key={cardType} value={cardType} className="font-cards">
                      {cardType === "all" ? "ALL CARD TYPES" : cardType.toUpperCase()}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {filteredCards.map((card) => (
                <div key={`collection-${card.id}`} className="relative group">
                  <div className="aspect-[2/3] relative">
                    <GameCard card={card} />
                  </div>
                  <Button
                    className="absolute bottom-2 right-2 h-8 w-8 p-0 rounded-full bg-ena-yellow text-black opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={() => addCardToDeck(card)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              ))}

              {filteredCards.length === 0 && (
                <div className="col-span-full text-center py-12 text-gray-400 font-cards">
                  No cards found matching your filters.
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Current Deck */}
        <div className="bg-ena-darkgray/50 rounded-lg p-4 border border-gray-700 flex flex-col">
          <Tabs defaultValue="cards" className="flex-1 flex flex-col">
            <TabsList className="grid grid-cols-3 mb-4 bg-black/30">
              <TabsTrigger value="cards" className="font-main">
                CARDS
              </TabsTrigger>
              <TabsTrigger value="stats" className="font-main">
                STATS
              </TabsTrigger>
              <TabsTrigger value="saved" className="font-main">
                SAVED
              </TabsTrigger>
            </TabsList>

            <TabsContent value="cards" className="flex-1 flex flex-col">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-bold font-main">{deckName}</h3>
                <span className={`font-cards ${currentDeck.length > 50 ? "text-red-500" : "text-gray-400"}`}>
                  {currentDeck.length}/50
                </span>
              </div>

              <div className="flex-1 overflow-y-auto">
                {currentDeck.length === 0 ? (
                  <div className="text-center py-12 text-gray-400 font-cards">
                    Your deck is empty. Add cards from the collection.
                  </div>
                ) : (
                  <div className="space-y-2">
                    {currentDeck
                      .sort((a, b) => (a.manaCost || 0) - (b.manaCost || 0))
                      .map((card, index) => (
                        <div key={`deck-${index}`} className="flex items-center gap-2 bg-black/30 p-2 rounded-lg group">
                          <div className="w-12 h-12 bg-gray-800 rounded overflow-hidden flex-shrink-0">
                            <img
                              src={card.imagePath || "/placeholder.svg?height=48&width=48"}
                              alt={card.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-1">
                              <div className="bg-ena-purple/90 px-1 rounded-full text-xs font-bold flex-shrink-0 font-cards">
                                {card.manaCost || 0}
                              </div>
                              <h4 className="truncate text-sm font-bold font-cards">{card.name}</h4>
                            </div>
                            <p className="text-xs text-gray-400 truncate font-cards">{card.type}</p>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
                            onClick={() => removeCardFromDeck(index)}
                          >
                            <Trash2 className="h-4 w-4 text-red-500" />
                          </Button>
                        </div>
                      ))}
                  </div>
                )}
              </div>
            </TabsContent>

            <TabsContent value="stats" className="flex-1 overflow-y-auto">
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold mb-2 font-main">CARD TYPES</h3>
                  <div className="grid grid-cols-2 gap-3 font-cards">
                    <div className="bg-black/30 p-3 rounded-lg text-center">
                      <div className="text-sm text-gray-400 mb-1">UNITS</div>
                      <div className="text-lg font-bold text-ena-yellow">{deckStats.unitCount}</div>
                    </div>
                    <div className="bg-black/30 p-3 rounded-lg text-center">
                      <div className="text-sm text-gray-400 mb-1">SPELLS</div>
                      <div className="text-lg font-bold text-ena-yellow">{deckStats.spellCount}</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold mb-2 font-main">FACTION DISTRIBUTION</h3>
                  <div className="space-y-2 font-cards">
                    {Object.entries(deckStats.factionCounts).map(([faction, count]) => (
                      <div key={faction} className="flex justify-between items-center bg-black/30 p-2 rounded-lg">
                        <span className="truncate">{faction}</span>
                        <span className="text-ena-yellow">{count}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-bold mb-2 font-main">MANA CURVE</h3>
                  <div className="bg-black/30 p-3 rounded-lg">
                    <div className="flex items-end h-32 gap-1">
                      {Object.entries(deckStats.manaCurve).map(([cost, count]) => {
                        const height =
                          count > 0 ? Math.max(20, (count / Math.max(...Object.values(deckStats.manaCurve))) * 100) : 0
                        return (
                          <div key={cost} className="flex-1 flex flex-col items-center">
                            <div className="w-full bg-ena-purple rounded-t" style={{ height: `${height}%` }}></div>
                            <div className="mt-1 text-xs">{cost}</div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="saved" className="flex-1 overflow-y-auto">
              {savedDecks.length === 0 ? (
                <div className="text-center py-12 text-gray-400 font-cards">You don't have any saved decks yet.</div>
              ) : (
                <div className="space-y-3">
                  {savedDecks.map((deck) => (
                    <div
                      key={deck.id}
                      className={`bg-black/30 p-3 rounded-lg cursor-pointer hover:bg-black/50 transition ${
                        selectedDeck === deck.id ? "border border-ena-yellow" : ""
                      }`}
                      onClick={() => loadDeck(deck)}
                    >
                      <div className="flex justify-between items-center">
                        <h4 className="font-bold font-main">{deck.name}</h4>
                        <span className="text-gray-400 text-sm font-cards">{deck.cards.length} cards</span>
                      </div>

                      <div className="mt-2 flex gap-1">
                        {deck.cards.slice(0, 5).map((card, i) => (
                          <div key={i} className="w-8 h-12 bg-gray-800 rounded overflow-hidden">
                            <img
                              src={card.imagePath || "/placeholder.svg?height=48&width=32"}
                              alt={card.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ))}
                        {deck.cards.length > 5 && (
                          <div className="w-8 h-12 bg-gray-800 rounded overflow-hidden flex items-center justify-center">
                            <span className="text-xs text-gray-400 font-cards">+{deck.cards.length - 5}</span>
                          </div>
                        )}
                      </div>

                      <div className="mt-2 flex justify-end">
                        <Button
                          size="sm"
                          className="h-7 bg-ena-yellow text-black hover:bg-ena-yellow/80 font-main"
                          onClick={(e) => {
                            e.stopPropagation()
                            loadDeck(deck)
                          }}
                        >
                          <ArrowRight className="h-3 w-3 mr-1" />
                          LOAD
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

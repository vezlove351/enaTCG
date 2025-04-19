"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Shield, Swords, Zap, Hand, Flame, Clock, Heart, User, Trophy } from "lucide-react"
import { GameCard } from "@/components/game-card"
import { CombatLog } from "@/components/combat-log"
import { initialDeck, shuffleDeck } from "@/lib/game-data"

export function GameBoard({ opponent, gameMode, selectedDeck, onExit, isMobile }) {
  // Game state
  const [playerDeck, setPlayerDeck] = useState([])
  const [opponentDeck, setOpponentDeck] = useState([])
  const [playerHand, setPlayerHand] = useState([])
  const [opponentHand, setOpponentHand] = useState([])
  const [playerField, setPlayerField] = useState([null, null, null, null, null])
  const [opponentField, setOpponentField] = useState([null, null, null, null, null])
  const [playerMana, setPlayerMana] = useState(0)
  const [opponentMana, setOpponentMana] = useState(0)
  const [playerHealth, setPlayerHealth] = useState(20)
  const [opponentHealth, setOpponentHealth] = useState(20)
  const [currentTurn, setCurrentTurn] = useState("player")
  const [turnPhase, setTurnPhase] = useState("draw") // draw, mana, action, attack, end
  const [selectedCard, setSelectedCard] = useState(null)
  const [selectedFieldSlot, setSelectedFieldSlot] = useState(null)
  const [attackingCard, setAttackingCard] = useState(null)
  const [combatLog, setCombatLog] = useState([])
  const [turnCount, setTurnCount] = useState(1)
  const [opponentInfo, setOpponentInfo] = useState({
    name: opponent === "player" ? "CyberNinja_42" : "AI Opponent",
    avatar: "/placeholder.svg?height=64&width=64",
    rank: opponent === "player" ? "Gold" : "Bot",
  })
  const [gameResult, setGameResult] = useState(null) // null, "win", "loss"
  const [rewards, setRewards] = useState({
    ena: 0,
    xp: 0,
    nftChance: 0,
  })

  // Initialize game
  useEffect(() => {
    // Use selected deck if available, otherwise use initial deck
    const deckToUse = selectedDeck?.cards || initialDeck

    const pDeck = shuffleDeck([...deckToUse])
    const oDeck = shuffleDeck([...initialDeck])

    setPlayerDeck(pDeck)
    setOpponentDeck(oDeck)

    // Initial draw
    const initialPlayerHand = pDeck.slice(0, 5)
    const initialOpponentHand = oDeck.slice(0, 5)

    setPlayerHand(initialPlayerHand)
    setOpponentHand(initialOpponentHand)

    setPlayerDeck(pDeck.slice(5))
    setOpponentDeck(oDeck.slice(5))

    addToCombatLog(`Game started against ${opponentInfo.name}. It's your turn!`)
  }, [selectedDeck, opponentInfo.name])

  const addToCombatLog = (message) => {
    setCombatLog((prev) => {
      const newLog = [message, ...prev]
      return newLog.slice(0, 5) // Keep only last 5 messages
    })
  }

  const drawCard = (isPlayer) => {
    if (isPlayer) {
      if (playerDeck.length === 0) {
        addToCombatLog("Your deck is empty! You lose 1 health.")
        setPlayerHealth((prev) => prev - 1)
        return
      }

      const newCard = playerDeck[0]
      setPlayerHand((prev) => [...prev, newCard])
      setPlayerDeck((prev) => prev.slice(1))
      addToCombatLog("You drew a card.")
    } else {
      if (opponentDeck.length === 0) {
        addToCombatLog("Opponent's deck is empty! They lose 1 health.")
        setOpponentHealth((prev) => prev - 1)
        return
      }

      const newCard = opponentDeck[0]
      setOpponentHand((prev) => [...prev, newCard])
      setOpponentDeck((prev) => prev.slice(1))
      addToCombatLog("Opponent drew a card.")
    }
  }

  const addMana = (isPlayer) => {
    if (isPlayer) {
      setPlayerMana((prev) => prev + 1)
      addToCombatLog(`You gained 1 mana. Total: ${playerMana + 1}`)
    } else {
      setOpponentMana((prev) => prev + 1)
      addToCombatLog(`Opponent gained 1 mana. Total: ${opponentMana + 1}`)
    }
  }

  const playCard = (cardIndex, fieldIndex) => {
    const card = playerHand[cardIndex]

    if (card.manaCost > playerMana) {
      addToCombatLog(`Not enough mana to play ${card.name}!`)
      return false
    }

    // For unit cards
    if (card.cardType === "UNIT") {
      if (playerField[fieldIndex] !== null) {
        addToCombatLog("This field slot is already occupied!")
        return false
      }

      const newField = [...playerField]
      newField[fieldIndex] = card
      setPlayerField(newField)

      setPlayerHand((prev) => prev.filter((_, i) => i !== cardIndex))
      setPlayerMana((prev) => prev - card.manaCost)

      addToCombatLog(`You played ${card.name} to the field.`)
      return true
    }

    // For spell cards
    if (card.cardType === "SPELL") {
      // Handle spell effects here
      // For simplicity, just remove the card and reduce mana
      setPlayerHand((prev) => prev.filter((_, i) => i !== cardIndex))
      setPlayerMana((prev) => prev - card.manaCost)

      addToCombatLog(`You cast ${card.name}.`)
      return true
    }

    return false
  }

  const attackWithCard = (attackerIndex, targetIndex = null) => {
    const attacker = playerField[attackerIndex]

    if (!attacker) {
      addToCombatLog("No unit in this slot to attack with!")
      return false
    }

    if (attacker.hasAttacked) {
      addToCombatLog(`${attacker.name} has already attacked this turn!`)
      return false
    }

    // If no target specified, attack opponent directly
    if (targetIndex === null) {
      setOpponentHealth((prev) => prev - attacker.attack)

      // Mark as attacked
      const newField = [...playerField]
      newField[attackerIndex] = { ...attacker, hasAttacked: true }
      setPlayerField(newField)

      addToCombatLog(`${attacker.name} attacked opponent directly for ${attacker.attack} damage!`)
      return true
    }

    // Attack enemy unit
    const target = opponentField[targetIndex]

    if (!target) {
      addToCombatLog("No enemy unit in this slot to attack!")
      return false
    }

    // Calculate damage
    const newTarget = { ...target, defense: target.defense - attacker.attack }
    const newAttacker = { ...attacker, defense: attacker.defense - target.attack, hasAttacked: true }

    // Update fields
    const newOpponentField = [...opponentField]
    const newPlayerField = [...playerField]

    // Check if units are destroyed
    if (newTarget.defense <= 0) {
      newOpponentField[targetIndex] = null
      addToCombatLog(`${attacker.name} destroyed ${target.name}!`)
    } else {
      newOpponentField[targetIndex] = newTarget
      addToCombatLog(`${attacker.name} dealt ${attacker.attack} damage to ${target.name}.`)
    }

    if (newAttacker.defense <= 0) {
      newPlayerField[attackerIndex] = null
      addToCombatLog(`${target.name} destroyed ${attacker.name}!`)
    } else {
      newPlayerField[attackerIndex] = newAttacker
      addToCombatLog(`${target.name} dealt ${target.attack} damage to ${attacker.name}.`)
    }

    setPlayerField(newPlayerField)
    setOpponentField(newOpponentField)

    return true
  }

  const endTurn = () => {
    if (currentTurn === "player") {
      // Reset attack flags
      setPlayerField((prev) => prev.map((card) => (card ? { ...card, hasAttacked: false } : null)))

      setCurrentTurn("opponent")
      setTurnPhase("draw")
      addToCombatLog("You ended your turn. Opponent's turn begins.")

      // Simulate opponent turn
      setTimeout(() => {
        simulateOpponentTurn()
      }, 1000)
    } else {
      // Reset attack flags
      setOpponentField((prev) => prev.map((card) => (card ? { ...card, hasAttacked: false } : null)))

      setCurrentTurn("player")
      setTurnPhase("draw")
      setTurnCount((prev) => prev + 1)
      addToCombatLog(`Turn ${turnCount + 1} begins. It's your turn!`)

      // Auto-draw for player
      drawCard(true)
      setTurnPhase("mana")

      // Auto-add mana for player
      setTimeout(() => {
        addMana(true)
        setTurnPhase("action")
      }, 500)
    }
  }

  const simulateOpponentTurn = () => {
    // Draw phase
    drawCard(false)

    setTimeout(() => {
      // Mana phase
      addMana(false)

      setTimeout(() => {
        // Action phase - play a random card if possible
        const playableCards = opponentHand.filter((card) => card.manaCost <= opponentMana)

        if (playableCards.length > 0) {
          const randomCardIndex = Math.floor(Math.random() * playableCards.length)
          const cardToPlay = playableCards[randomCardIndex]
          const cardIndex = opponentHand.findIndex((c) => c.id === cardToPlay.id)

          // Find empty slot
          const emptySlots = opponentField.map((slot, index) => (slot === null ? index : -1)).filter((i) => i !== -1)

          if (emptySlots.length > 0 && cardToPlay.cardType === "UNIT") {
            const randomSlot = emptySlots[Math.floor(Math.random() * emptySlots.length)]

            // Play the card
            const newField = [...opponentField]
            newField[randomSlot] = cardToPlay
            setOpponentField(newField)

            setOpponentHand((prev) => prev.filter((_, i) => i !== cardIndex))
            setOpponentMana((prev) => prev - cardToPlay.manaCost)

            addToCombatLog(`Opponent played ${cardToPlay.name} to the field.`)
          }
        }

        setTimeout(() => {
          // Attack phase - attack with all units
          const attackingUnits = opponentField.map((card, index) => (card ? { card, index } : null)).filter(Boolean)

          if (attackingUnits.length > 0) {
            attackingUnits.forEach(({ card, index }) => {
              // Decide whether to attack player directly or a unit
              const playerUnits = playerField.map((card, index) => (card ? { card, index } : null)).filter(Boolean)

              if (playerUnits.length === 0 || Math.random() > 0.7) {
                // Attack player directly
                setPlayerHealth((prev) => prev - card.attack)
                addToCombatLog(`Opponent's ${card.name} attacked you directly for ${card.attack} damage!`)
              } else {
                // Attack a random player unit
                const randomUnitIndex = Math.floor(Math.random() * playerUnits.length)
                const targetIndex = playerUnits[randomUnitIndex].index
                const target = playerUnits[randomUnitIndex].card

                // Calculate damage
                const newTarget = { ...target, defense: target.defense - card.attack }
                const newAttacker = { ...card, defense: card.defense - target.attack }

                // Update fields
                const newPlayerField = [...playerField]
                const newOpponentField = [...opponentField]

                // Check if units are destroyed
                if (newTarget.defense <= 0) {
                  newPlayerField[targetIndex] = null
                  addToCombatLog(`Opponent's ${card.name} destroyed your ${target.name}!`)
                } else {
                  newPlayerField[targetIndex] = newTarget
                  addToCombatLog(`Opponent's ${card.name} dealt ${card.attack} damage to your ${target.name}.`)
                }

                if (newAttacker.defense <= 0) {
                  newOpponentField[index] = null
                  addToCombatLog(`Your ${target.name} destroyed opponent's ${card.name}!`)
                } else {
                  newOpponentField[index] = newAttacker
                  addToCombatLog(`Your ${target.name} dealt ${target.attack} damage to opponent's ${card.name}.`)
                }

                setPlayerField(newPlayerField)
                setOpponentField(newOpponentField)
              }
            })
          }

          setTimeout(() => {
            // End turn
            endTurn()
          }, 1000)
        }, 1000)
      }, 1000)
    }, 1000)
  }

  const handleCardClick = (cardIndex) => {
    if (currentTurn !== "player" || turnPhase !== "action") return

    setSelectedCard(cardIndex)
  }

  const handleFieldSlotClick = (slotIndex, isPlayerField) => {
    if (currentTurn !== "player") return

    // In action phase, place cards
    if (turnPhase === "action" && selectedCard !== null && isPlayerField) {
      const success = playCard(selectedCard, slotIndex)
      if (success) {
        setSelectedCard(null)
      }
    }

    // In attack phase, select attacker or target
    if (turnPhase === "attack") {
      if (isPlayerField) {
        // Select attacker
        setAttackingCard(slotIndex)
        setSelectedFieldSlot(null)
      } else if (attackingCard !== null) {
        // Select target and attack
        attackWithCard(attackingCard, slotIndex)
        setAttackingCard(null)
      }
    }
  }

  const handlePhaseChange = (phase) => {
    if (currentTurn !== "player") return

    setTurnPhase(phase)
    addToCombatLog(`Entering ${phase} phase.`)

    if (phase === "draw") {
      drawCard(true)
      setTurnPhase("mana")
    } else if (phase === "mana") {
      addMana(true)
      setTurnPhase("action")
    }
  }

  const handleDirectAttack = () => {
    if (currentTurn !== "player" || turnPhase !== "attack" || attackingCard === null) return

    const attacker = playerField[attackingCard]

    if (!attacker) {
      addToCombatLog("No unit selected to attack with!")
      return
    }

    if (attacker.hasAttacked) {
      addToCombatLog(`${attacker.name} has already attacked this turn!`)
      return
    }

    // Attack opponent directly
    setOpponentHealth((prev) => prev - attacker.attack)

    // Mark as attacked
    const newField = [...playerField]
    newField[attackingCard] = { ...attacker, hasAttacked: true }
    setPlayerField(newField)

    addToCombatLog(`${attacker.name} attacked opponent directly for ${attacker.attack} damage!`)
    setAttackingCard(null)
  }

  const calculateRewards = (isWinner) => {
    // Calculate rewards based on game mode and outcome
    if (isWinner) {
      const baseEna = opponent === "player" ? 100 : 25
      const baseXp = opponent === "player" ? 50 : 15
      const nftChance = opponent === "player" ? 5 : 1

      setRewards({
        ena: baseEna,
        xp: baseXp,
        nftChance,
      })
    } else {
      // Consolation rewards
      const baseEna = opponent === "player" ? 20 : 5
      const baseXp = opponent === "player" ? 10 : 5

      setRewards({
        ena: baseEna,
        xp: baseXp,
        nftChance: 0,
      })
    }
  }

  // Check for game over
  useEffect(() => {
    if (playerHealth <= 0) {
      setGameResult("loss")
      calculateRewards(false)
    } else if (opponentHealth <= 0) {
      setGameResult("win")
      calculateRewards(true)
    }
  }, [playerHealth, opponentHealth, opponent])

  return (
    <div className="relative w-full h-full flex flex-col">
      {/* Top bar with exit button and player info */}
      <div className="flex justify-between items-center mb-4">
        <Button variant="outline" onClick={onExit} className="text-white font-main">
          <ArrowLeft className="mr-2 h-4 w-4" /> EXIT GAME
        </Button>
        <div className="flex items-center gap-4 font-cards">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4 text-ena-yellow" />
            <span>TURN {turnCount}</span>
          </div>
          <div className="flex items-center gap-1">
            <div className={`h-3 w-3 rounded-full ${currentTurn === "player" ? "bg-ena-green" : "bg-ena-red"}`}></div>
            <span>{currentTurn === "player" ? "YOUR TURN" : "OPPONENT TURN"}</span>
          </div>
        </div>
      </div>

      {/* Game board */}
      <div className="flex-1 grid grid-rows-[auto_1fr_auto] gap-4">
        {/* Opponent area */}
        <div className="bg-ena-darkgray/50 rounded-lg p-4">
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center gap-2">
              <div className="bg-ena-red rounded-full p-1 overflow-hidden h-8 w-8">
                {opponentInfo.avatar ? (
                  <img
                    src={opponentInfo.avatar || "/placeholder.svg"}
                    alt="Opponent"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <User className="h-6 w-6" />
                )}
              </div>
              <div>
                <span className="font-bold font-main">{opponentInfo.name}</span>
                {opponent === "player" && (
                  <div className="flex items-center gap-1 text-xs text-gray-400">
                    <Trophy className="h-3 w-3 text-ena-yellow" />
                    <span>{opponentInfo.rank}</span>
                  </div>
                )}
              </div>
            </div>
            <div className="flex items-center gap-4 font-cards">
              <div className="flex items-center gap-1">
                <Heart className="h-5 w-5 text-ena-red" />
                <span>{opponentHealth} HP</span>
              </div>
              <div className="flex items-center gap-1">
                <Zap className="h-5 w-5 text-ena-purple" />
                <span>{opponentMana} MANA</span>
              </div>
              <div className="flex items-center gap-1">
                <Hand className="h-5 w-5 text-ena-blue" />
                <span>{opponentHand.length} CARDS</span>
              </div>
            </div>
          </div>

          {/* Opponent field */}
          <div className="grid grid-cols-5 gap-2">
            {opponentField.map((card, index) => (
              <div
                key={`opponent-field-${index}`}
                className={`aspect-[2/3] rounded border ${
                  card ? "border-ena-yellow bg-ena-darkgray/50" : "border-gray-600 bg-gray-700/20"
                } ${currentTurn === "player" && turnPhase === "attack" && attackingCard !== null ? "cursor-pointer hover:border-ena-red" : ""}`}
                onClick={() => handleFieldSlotClick(index, false)}
              >
                {card && <GameCard card={card} mini={true} />}
              </div>
            ))}
          </div>
        </div>

        {/* Middle area with combat log */}
        <div className="grid grid-cols-[1fr_auto] gap-4">
          {/* Main battlefield */}
          <div className="bg-ena-darkgray/30 rounded-lg p-4 flex flex-col">
            {/* Turn phases */}
            <div className="flex justify-center mb-4">
              <div className="bg-ena-darkgray rounded-lg p-1 flex">
                <Button
                  variant={turnPhase === "draw" ? "default" : "ghost"}
                  size="sm"
                  className={turnPhase === "draw" ? "bg-ena-yellow text-black font-main" : "text-gray-300 font-main"}
                  onClick={() => handlePhaseChange("draw")}
                  disabled={currentTurn !== "player"}
                >
                  <Hand className="h-4 w-4 mr-1" /> DRAW
                </Button>
                <Button
                  variant={turnPhase === "mana" ? "default" : "ghost"}
                  size="sm"
                  className={turnPhase === "mana" ? "bg-ena-yellow text-black font-main" : "text-gray-300 font-main"}
                  onClick={() => handlePhaseChange("mana")}
                  disabled={currentTurn !== "player"}
                >
                  <Zap className="h-4 w-4 mr-1" /> MANA
                </Button>
                <Button
                  variant={turnPhase === "action" ? "default" : "ghost"}
                  size="sm"
                  className={turnPhase === "action" ? "bg-ena-yellow text-black font-main" : "text-gray-300 font-main"}
                  onClick={() => handlePhaseChange("action")}
                  disabled={currentTurn !== "player"}
                >
                  <Flame className="h-4 w-4 mr-1" /> ACTION
                </Button>
                <Button
                  variant={turnPhase === "attack" ? "default" : "ghost"}
                  size="sm"
                  className={turnPhase === "attack" ? "bg-ena-yellow text-black font-main" : "text-gray-300 font-main"}
                  onClick={() => setTurnPhase("attack")}
                  disabled={currentTurn !== "player"}
                >
                  <Swords className="h-4 w-4 mr-1" /> ATTACK
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-300 font-main"
                  onClick={endTurn}
                  disabled={currentTurn !== "player"}
                >
                  <Clock className="h-4 w-4 mr-1" /> END TURN
                </Button>
              </div>
            </div>

            {/* Attack instructions */}
            {currentTurn === "player" && turnPhase === "attack" && (
              <div className="text-center mb-4 text-sm font-cards">
                {!attackingCard ? (
                  <p>SELECT ONE OF YOUR UNITS TO ATTACK WITH</p>
                ) : (
                  <div className="flex flex-col items-center">
                    <p>SELECT AN ENEMY UNIT TO ATTACK, OR</p>
                    <Button
                      variant="destructive"
                      size="sm"
                      className="mt-1 bg-ena-red font-main"
                      onClick={handleDirectAttack}
                    >
                      ATTACK OPPONENT DIRECTLY
                    </Button>
                  </div>
                )}
              </div>
            )}

            {/* Player field */}
            <div className="grid grid-cols-5 gap-2 mt-auto">
              {playerField.map((card, index) => (
                <div
                  key={`player-field-${index}`}
                  className={`aspect-[2/3] rounded border ${
                    card ? "border-ena-yellow bg-ena-darkgray/50" : "border-gray-600 bg-gray-700/20"
                  } ${
                    currentTurn === "player" &&
                    (
                      (turnPhase === "action" && selectedCard !== null) ||
                        (turnPhase === "attack" && !card?.hasAttacked)
                    )
                      ? "cursor-pointer hover:border-ena-yellow"
                      : ""
                  } ${attackingCard === index ? "border-ena-green border-2" : ""}`}
                  onClick={() => handleFieldSlotClick(index, true)}
                >
                  {card && <GameCard card={card} mini={true} disabled={card.hasAttacked} />}
                </div>
              ))}
            </div>

            {/* Game result overlay */}
            {gameResult && (
              <div className="absolute inset-0 bg-black/80 flex items-center justify-center z-50">
                <div className="bg-ena-darkgray p-6 rounded-lg border border-ena-yellow max-w-md text-center">
                  <h2 className="text-2xl font-bold mb-4 font-main">
                    {gameResult === "win" ? (
                      <span className="text-ena-green">VICTORY!</span>
                    ) : (
                      <span className="text-ena-red">DEFEAT</span>
                    )}
                  </h2>

                  <p className="mb-6 font-cards">
                    {gameResult === "win"
                      ? "Congratulations! You have defeated your opponent."
                      : "You have been defeated. Better luck next time!"}
                  </p>

                  <div className="bg-black/30 p-4 rounded-lg mb-6">
                    <h3 className="font-bold mb-3 text-ena-yellow font-main">REWARDS</h3>
                    <div className="grid grid-cols-3 gap-3 font-cards">
                      <div className="bg-ena-darkgray/50 p-3 rounded-lg text-center">
                        <div className="text-sm text-gray-400 mb-1">$ENA</div>
                        <div className="text-xl font-bold text-ena-yellow">+{rewards.ena}</div>
                      </div>
                      <div className="bg-ena-darkgray/50 p-3 rounded-lg text-center">
                        <div className="text-sm text-gray-400 mb-1">XP</div>
                        <div className="text-xl font-bold text-ena-green">+{rewards.xp}</div>
                      </div>
                      <div className="bg-ena-darkgray/50 p-3 rounded-lg text-center">
                        <div className="text-sm text-gray-400 mb-1">NFT CHANCE</div>
                        <div className="text-xl font-bold text-ena-purple">{rewards.nftChance}%</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3 justify-center">
                    <Button
                      variant="outline"
                      className="border-ena-yellow text-ena-yellow hover:bg-ena-yellow/10 font-main"
                      onClick={onExit}
                    >
                      EXIT
                    </Button>
                    <Button
                      className="bg-ena-yellow text-black hover:bg-ena-yellow/80 font-main"
                      onClick={() => {
                        // Reset game state
                        setGameResult(null)
                        setPlayerHealth(20)
                        setOpponentHealth(20)
                        setPlayerMana(0)
                        setOpponentMana(0)
                        setPlayerField([null, null, null, null, null])
                        setOpponentField([null, null, null, null, null])
                        setTurnCount(1)
                        setCombatLog([])

                        // Reinitialize game
                        const pDeck = shuffleDeck([...(selectedDeck?.cards || initialDeck)])
                        const oDeck = shuffleDeck([...initialDeck])

                        setPlayerDeck(pDeck)
                        setOpponentDeck(oDeck)

                        const initialPlayerHand = pDeck.slice(0, 5)
                        const initialOpponentHand = oDeck.slice(0, 5)

                        setPlayerHand(initialPlayerHand)
                        setOpponentHand(initialOpponentHand)

                        setPlayerDeck(pDeck.slice(5))
                        setOpponentDeck(oDeck.slice(5))

                        setCurrentTurn("player")
                        setTurnPhase("draw")

                        addToCombatLog("New game started. It's your turn!")
                      }}
                    >
                      PLAY AGAIN
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {/* Tutorial tooltip */}
            {currentTurn === "player" && turnCount === 1 && !gameResult && (
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-ena-darkgray/90 p-4 rounded-lg border border-ena-yellow max-w-md z-40 shadow-lg">
                <h3 className="text-lg font-bold text-ena-yellow mb-2 font-main">WELCOME TO ENA UNIVERSE TCG</h3>
                <p className="font-cards mb-3">THIS IS YOUR FIRST TURN. HERE'S HOW TO PLAY:</p>
                <ul className="space-y-2 font-cards text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-ena-yellow font-bold">1.</span>
                    <span>YOU'VE ALREADY DRAWN A CARD AND GAINED 1 MANA.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-ena-yellow font-bold">2.</span>
                    <span>DURING THE ACTION PHASE, SELECT A CARD FROM YOUR HAND THAT COSTS 1 MANA OR LESS.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-ena-yellow font-bold">3.</span>
                    <span>CLICK ON AN EMPTY FIELD SLOT TO PLACE YOUR UNIT.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-ena-yellow font-bold">4.</span>
                    <span>PROCEED TO THE ATTACK PHASE, BUT YOU WON'T BE ABLE TO ATTACK YET.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-ena-yellow font-bold">5.</span>
                    <span>END YOUR TURN AND WATCH THE OPPONENT'S MOVES.</span>
                  </li>
                </ul>
                <Button
                  className="mt-4 w-full bg-ena-yellow text-black hover:bg-ena-yellow/80 font-main"
                  onClick={() => document.querySelector(".absolute.top-1\\/2")?.classList.add("hidden")}
                >
                  GOT IT
                </Button>
              </div>
            )}
          </div>

          {/* Combat log */}
          <CombatLog messages={combatLog} />
        </div>

        {/* Player area */}
        <div className="bg-ena-darkgray/50 rounded-lg p-4">
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center gap-2">
              <div className="bg-ena-blue rounded-full p-1">
                <Shield className="h-5 w-5" />
              </div>
              <span className="font-bold font-main">YOU</span>
            </div>
            <div className="flex items-center gap-4 font-cards">
              <div className="flex items-center gap-1">
                <Heart className="h-5 w-5 text-ena-red" />
                <span>{playerHealth} HP</span>
              </div>
              <div className="flex items-center gap-1">
                <Zap className="h-5 w-5 text-ena-purple" />
                <span>{playerMana} MANA</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="relative">
                  <Hand className="h-5 w-5 text-ena-blue" />
                  {playerDeck.length > 0 && (
                    <div className="absolute -top-1 -right-1 bg-ena-yellow text-black text-xs rounded-full h-4 w-4 flex items-center justify-center">
                      {playerDeck.length}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Player hand */}
          <div className="flex justify-center gap-2 overflow-x-auto py-2">
            {playerHand.map((card, index) => (
              <div
                key={`player-hand-${index}`}
                className={`shrink-0 ${selectedCard === index ? "transform -translate-y-2" : ""} ${
                  currentTurn === "player" && turnPhase === "action" && card.manaCost <= playerMana
                    ? "cursor-pointer hover:-translate-y-2 transition-transform"
                    : ""
                }`}
                onClick={() => handleCardClick(index)}
              >
                <GameCard
                  card={card}
                  disabled={currentTurn !== "player" || turnPhase !== "action" || card.manaCost > playerMana}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

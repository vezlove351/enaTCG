import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Wallet, Coins } from "lucide-react"
import { client } from "@/client";
import { ConnectButton } from "thirdweb/react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <header className="container mx-auto py-6 relative z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Zap className="h-8 w-8 text-ena-yellow" />
            <h1 className="text-2xl font-bold tracking-wider">ENA UNIVERSE</h1>
          </div>
          <nav className="hidden md:block">
            <ul className="flex gap-8 font-main">
              <li>
                <Link href="/" className="hover:text-ena-yellow transition">
                  HOME
                </Link>
              </li>
              <li>
                <Link href="/play" className="hover:text-ena-yellow transition">
                  PLAY
                </Link>
              </li>
              <li>
                <Link href="/cards" className="hover:text-ena-yellow transition">
                  CARDS
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-ena-yellow transition">
                  ABOUT
                </Link>
              </li>
              <li>
                <Link href="/staking" className="hover:text-ena-yellow transition">
                  STAKING
                </Link>
              </li>
              <li>
                <Link href="/tokenomics" className="hover:text-ena-yellow transition">
                  TOKENOMICS
                </Link>
              </li>
            </ul>
          </nav>
          <ConnectButton client={client} />
          {/* <Button className="bg-ena-yellow text-black hover:bg-ena-yellow/80 font-main">CONNECT WALLET</Button> */}
        </div>
      </header>

      <main className="flex-1">
        <section className="relative py-20 overflow-hidden">
          {/* Video Background */}
          <div className="absolute inset-0 w-full h-full z-0">
            <div className="absolute inset-0 bg-black/60 z-10"></div>
            <video autoPlay loop muted playsInline className="w-full h-full object-cover">
              <source src="/videos/abstract-bg.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Hero Content */}
          <div className="container mx-auto text-center relative z-20">
            <div className="max-w-4xl mx-auto px-4">
              <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-ena-yellow via-ena-yellow/80 to-ena-yellow">
                ENA UNIVERSE TCG
              </h2>
              <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-300 font-cards">
                THE FIRST TRUE AI-BORN WEB3 TRADING CARD GAME. BATTLE WITH UNIQUE CARDS IN A FUTURISTIC UNIVERSE
                DESIGNED AND BALANCED BY AI.
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-ena-yellow text-black hover:bg-ena-yellow/80 text-lg font-main">
                  <Link href="/play">PLAY NOW</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-ena-yellow text-ena-yellow hover:bg-ena-yellow/10 text-lg font-main"
                >
                  <Link href="/cards">EXPLORE CARDS</Link>
                </Button>
              </div>

              {/* Animated Glow Effect */}
              <div className="mt-16 relative">
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-64 h-64 bg-ena-yellow/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-ena-yellow/30 rounded-full blur-xl animate-ping"></div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-black to-ena-darkgray">
          <div className="container mx-auto">
            <h3 className="text-3xl font-bold mb-12 text-center">FEATURED CARDS</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              <CardPreview
                name="SCARLET REVENANT"
                rarity="COMMON"
                type="ASHEN ORDER"
                attack={6}
                defense={5}
                imagePath="/cards/scarlet-revenant.png"
                description="If Scarlet Revenant is the last character on your field, it gains +2 Attack and +2 Defense."
                cardColor="red-card"
              />
              <CardPreview
                name="GHOST OPERATIVE"
                rarity="LEGENDARY"
                type="ZERO DIVISION"
                attack={4}
                defense={7}
                imagePath="/cards/ghost-operative.png"
                description="This unit cannot be targeted by enemy spells or abilities while cloaked."
                special="HOLOGRAPHIC"
                cardColor="blue-card"
              />
              <CardPreview
                name="REFLEX ENHANCER"
                rarity="EPIC"
                type="SHINOBYTE"
                attack={3}
                defense={4}
                imagePath="/cards/reflex-enhancer.png"
                description="Grants +1 Speed and +1 Dodge when equipped to a Shinobyte character. Counterattack (deal 1 damage when targeted by an attack once per turn)."
                cardColor="green-card"
              />
              <CardPreview
                name="ENERGY CORE"
                rarity="NEUTRAL"
                type="BOOST"
                attack={0}
                defense={0}
                imagePath="/cards/energy-core.png"
                description="Attach to any character. It gains +1 ATK and can use abilities twice per turn. If attached to a Nova Synth character, also gain (recover 1 HP at the start of your turn)."
                cardColor="neutral-card"
              />
              <CardPreview
                name="REGENERATION"
                rarity="RARE"
                type="NOVA SYNTH"
                attack={0}
                defense={0}
                imagePath="/cards/regeneration.png"
                description="Restore 2 HP to one of your characters."
                cardType="SPELL"
                manaCost={2}
                cardColor="mana-card"
              />
            </div>
          </div>
        </section>

        <section className="py-20 container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">GAME FEATURES</h3>
              <ul className="space-y-4 font-cards">
                <FeatureItem title="1V1 BATTLES" description="Challenge other players in strategic turn-based combat" />
                <FeatureItem
                  title="UNIQUE CARD ABILITIES"
                  description="Each card has special powers that can turn the tide of battle"
                />
                <FeatureItem
                  title="BLOCKCHAIN INTEGRATION"
                  description="True ownership of your cards with Web3 technology"
                />
                <FeatureItem
                  title="AI-BALANCED GAMEPLAY"
                  description="Fair and competitive gameplay designed by artificial intelligence"
                />
                <FeatureItem title="REGULAR UPDATES" description="New cards and features added regularly" />
              </ul>
              <Button asChild className="mt-8 bg-ena-yellow text-black hover:bg-ena-yellow/80 font-main">
                <Link href="/play">
                  START PLAYING <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden border-2 border-ena-yellow">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="ENA Universe Gameplay"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* New Tokenomics & Staking Section */}
        <section className="py-20 bg-gradient-to-b from-ena-darkgray to-black">
          <div className="container mx-auto">
            <h3 className="text-3xl font-bold mb-12 text-center">TOKENOMICS & STAKING</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-ena-darkgray/50 p-6 rounded-lg border border-ena-yellow">
                <div className="flex items-center gap-3 mb-4">
                  <Coins className="h-8 w-8 text-ena-yellow" />
                  <h4 className="text-xl font-bold font-main">ENA TOKEN ECONOMY</h4>
                </div>
                <p className="mb-4 font-cards">
                  THE $ENA TOKEN POWERS THE ENTIRE ENA UNIVERSE ECOSYSTEM, ENABLING PLAYERS TO STAKE, TRADE, AND UNLOCK
                  EXCLUSIVE CONTENT.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-black/30 p-3 rounded-lg text-center">
                    <div className="text-sm text-gray-400 mb-1">TOTAL SUPPLY</div>
                    <div className="text-lg font-bold text-ena-yellow">2.1B $ENA</div>
                  </div>
                  <div className="bg-black/30 p-3 rounded-lg text-center">
                    <div className="text-sm text-gray-400 mb-1">BLOCKCHAIN</div>
                    <div className="text-lg font-bold text-ena-yellow">SONEIUM</div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <Button asChild className="bg-ena-yellow text-black hover:bg-ena-yellow/80 font-main">
                    <Link href="/tokenomics">VIEW TOKENOMICS</Link>
                  </Button>
                </div>
              </div>

              <div className="bg-ena-darkgray/50 p-6 rounded-lg border border-ena-yellow">
                <div className="flex items-center gap-3 mb-4">
                  <Wallet className="h-8 w-8 text-ena-yellow" />
                  <h4 className="text-xl font-bold font-main">STAKING REWARDS</h4>
                </div>
                <p className="mb-4 font-cards">
                  STAKE YOUR NFT CARDS AND $ENA TOKENS TO EARN PASSIVE REWARDS AND EXCLUSIVE BENEFITS IN THE ENA
                  UNIVERSE.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-black/30 p-3 rounded-lg text-center">
                    <div className="text-sm text-gray-400 mb-1">NFT STAKING</div>
                    <div className="text-lg font-bold text-ena-yellow">60 $ENA/DAY</div>
                  </div>
                  <div className="bg-black/30 p-3 rounded-lg text-center">
                    <div className="text-sm text-gray-400 mb-1">TOKEN STAKING</div>
                    <div className="text-lg font-bold text-ena-yellow">5% DAILY APY</div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <Button asChild className="bg-ena-yellow text-black hover:bg-ena-yellow/80 font-main">
                    <Link href="/staking">START STAKING</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-ena-darkgray py-10">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Zap className="h-6 w-6 text-ena-yellow" />
              <span className="text-xl font-bold tracking-wider font-main">ENA UNIVERSE</span>
            </div>
            <div className="text-gray-400 text-sm font-cards">
              © 2025 ENA UNIVERSE. ALL RIGHTS RESERVED. DESIGNED & BALANCED BY AI.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

interface CardPreviewProps {
  name: string;
  rarity: string;
  type: string;
  attack: number;
  defense: number;
  imagePath: string;
  description: string;
  special?: string;
  cardType?: string;
  manaCost?: number;
  cardColor?: string;
}

function CardPreview({
  name,
  rarity,
  type,
  attack,
  defense,
  imagePath,
  description,
  special,
  cardType = "UNIT",
  manaCost,
  cardColor = "",
}: CardPreviewProps) {
  return (
    <div
      className={`group relative aspect-[2/3] rounded-lg overflow-hidden border-2 border-ena-yellow transition-transform hover:scale-105 hover:shadow-lg hover:shadow-ena-yellow/20 ${cardColor}`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10"></div>
      <Image src={imagePath || "/placeholder.svg?height=300&width=200"} alt={name} fill className="object-cover z-0" />
      <div className="absolute top-2 left-2 right-2 flex justify-between items-start z-20">
        <div className="bg-black/70 px-2 py-1 rounded text-xs font-bold text-ena-yellow font-cards">{rarity}</div>
        {special && (
          <div className="bg-ena-yellow/90 px-2 py-1 rounded text-xs font-bold text-black font-cards">{special}</div>
        )}
      </div>
      <div className="absolute top-10 left-2 bg-black/70 px-2 py-1 rounded text-xs font-bold text-white font-cards">
        {type}
      </div>
      {cardType === "UNIT" ? (
        <div className="absolute top-2 right-2 flex flex-col gap-1 z-20">
          <div className="bg-ena-red/90 px-2 py-1 rounded text-xs font-bold font-cards">ATK: {attack}</div>
          <div className="bg-ena-blue/90 px-2 py-1 rounded text-xs font-bold font-cards">DEF: {defense}</div>
        </div>
      ) : (
        <div className="absolute top-2 right-2 z-20">
          <div className="bg-ena-green/90 px-2 py-1 rounded text-xs font-bold font-cards">{cardType}</div>
        </div>
      )}
      {manaCost !== undefined && (
        <div className="absolute bottom-16 right-2 bg-ena-purple/90 px-2 py-1 rounded-full text-xs font-bold z-20 font-cards">
          {manaCost} MANA
        </div>
      )}
      <div className="absolute bottom-0 left-0 right-0 p-3 bg-black/80 z-20">
        <h4 className="text-sm font-bold mb-1 text-white card-title">{name}</h4>
        <p className="text-xs text-gray-300 line-clamp-2 font-cards">{description}</p>
      </div>
    </div>
  )
}

interface FeatureItemProps {
  title: string;
  description: string;
}

function FeatureItem({ title, description }: FeatureItemProps) {
  return (
    <li className="flex gap-3">
      <div className="mt-1 bg-ena-yellow rounded-full p-1 h-fit">
        <Zap className="h-4 w-4 text-black" />
      </div>
      <div>
        <h4 className="font-bold text-lg font-main">{title}</h4>
        <p className="text-gray-300">{description}</p>
      </div>
    </li>
  )
}

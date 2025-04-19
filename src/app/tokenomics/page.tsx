"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Coins, BarChart3, PieChart, Lock, Clock, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function TokenomicsPage() {
  const [activeTab, setActiveTab] = useState("overview")

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
        <h1 className="text-4xl font-bold mb-8 text-center">ENA UNIVERSE ECONOMY</h1>

        <Tabs defaultValue="overview" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-3 mb-8 bg-ena-darkgray">
            <TabsTrigger value="overview" className="font-main">
              OVERVIEW
            </TabsTrigger>
            <TabsTrigger value="staking" className="font-main">
              STAKING
            </TabsTrigger>
            <TabsTrigger value="tokenomics" className="font-main">
              TOKENOMICS
            </TabsTrigger>
          </TabsList>

          {/* OVERVIEW TAB */}
          <TabsContent value="overview">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <Card className="bg-ena-darkgray/50 border-ena-yellow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-ena-yellow">
                    <Coins className="h-5 w-5" />
                    ENA TOKEN ($ENA)
                  </CardTitle>
                  <CardDescription className="text-gray-300 font-cards">
                    THE NATIVE CURRENCY OF THE ENA UNIVERSE ECOSYSTEM
                  </CardDescription>
                </CardHeader>
                <CardContent className="font-cards">
                  <p className="mb-4">
                    THE ENA TOKEN ($ENA) IS BUILT ON THE SONEIUM BLOCKCHAIN, POWERING THE ENTIRE ENA UNIVERSE ECOSYSTEM.
                    IT ENABLES PLAYERS TO PARTICIPATE IN THE GAME ECONOMY, STAKE FOR REWARDS, AND UNLOCK EXCLUSIVE
                    CONTENT.
                  </p>
                  <div className="flex items-center justify-between bg-black/30 p-3 rounded-lg mb-3">
                    <span>TOTAL SUPPLY:</span>
                    <span className="text-ena-yellow font-bold">2,100,000,000 $ENA</span>
                  </div>
                  <div className="flex items-center justify-between bg-black/30 p-3 rounded-lg">
                    <span>BLOCKCHAIN:</span>
                    <span className="text-ena-yellow font-bold">SONEIUM (SONY)</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-ena-yellow text-black hover:bg-ena-yellow/80 font-main">
                    CONNECT WALLET
                  </Button>
                </CardFooter>
              </Card>

              <Card className="bg-ena-darkgray/50 border-ena-yellow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-ena-yellow">
                    <Award className="h-5 w-5" />
                    NFT CARDS
                  </CardTitle>
                  <CardDescription className="text-gray-300 font-cards">
                    COLLECTIBLE DIGITAL ASSETS WITH REAL UTILITY
                  </CardDescription>
                </CardHeader>
                <CardContent className="font-cards">
                  <p className="mb-4">
                    ENA UNIVERSE NFT CARDS ARE UNIQUE DIGITAL COLLECTIBLES THAT SERVE AS BOTH GAME PIECES AND STAKING
                    ASSETS. EACH CARD IS MINTED ON THE SONEIUM BLOCKCHAIN WITH VERIFIABLE AUTHENTICITY AND OWNERSHIP.
                  </p>
                  <div className="grid grid-cols-2 gap-3 mb-3">
                    <div className="bg-black/30 p-3 rounded-lg text-center">
                      <div className="text-xs text-gray-400">COMMON CARDS</div>
                      <div className="text-ena-yellow font-bold">LOWER REWARDS</div>
                    </div>
                    <div className="bg-black/30 p-3 rounded-lg text-center">
                      <div className="text-xs text-gray-400">LEGENDARY CARDS</div>
                      <div className="text-ena-yellow font-bold">HIGHER REWARDS</div>
                    </div>
                  </div>
                  <div className="bg-black/30 p-3 rounded-lg text-center">
                    <div className="text-xs text-gray-400">SPECIAL MANA CARDS</div>
                    <div className="text-ena-yellow font-bold">HIGHEST REWARDS + EXCLUSIVE BONUSES</div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-ena-yellow text-black hover:bg-ena-yellow/80 font-main">
                    <Link href="/cards">EXPLORE CARDS</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>

            <div className="bg-ena-darkgray/50 rounded-lg p-6 mb-8 border border-ena-yellow">
              <h2 className="text-2xl font-bold mb-4 text-ena-yellow font-main">BLOCKCHAIN IMPLEMENTATION</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-xl font-bold mb-3 font-main">NFT COLLECTION ON SONEIUM</h3>
                  <ul className="space-y-2 font-cards">
                    <li className="flex items-start gap-2">
                      <span className="text-ena-yellow font-bold">•</span>
                      <span>ALL CARDS MINTED AS NFTS ON THE SONEIUM BLOCKCHAIN</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-ena-yellow font-bold">•</span>
                      <span>UNIQUE QR CODE FOR ON-CHAIN VERIFICATION</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-ena-yellow font-bold">•</span>
                      <span>PHYSICAL CARDS WITH QR CODES FOR COLLECTION TRACKING</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-ena-yellow font-bold">•</span>
                      <span>DIRECT ACCESS TO UPDATES AND ECOSYSTEM DEVELOPMENT</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3 font-main">VERIFICATION & UTILITY</h3>
                  <ul className="space-y-2 font-cards">
                    <li className="flex items-start gap-2">
                      <span className="text-ena-yellow font-bold">•</span>
                      <span>SCAN QR CODES TO VERIFY AUTHENTICITY</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-ena-yellow font-bold">•</span>
                      <span>NFTS UNLOCK EXCLUSIVE IN-GAME FEATURES</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-ena-yellow font-bold">•</span>
                      <span>ENTRY PASSES FOR TOURNAMENTS AND SPECIAL EVENTS</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-ena-yellow font-bold">•</span>
                      <span>STAKING FOR PASSIVE REWARDS</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-black/30 p-4 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-ena-yellow font-main">AIRDROP & NFT-BASED REWARDS</h3>
                <p className="mb-3 font-cards">
                  EVERY 3 MONTHS, HOLDERS OF ENA UNIVERSE NFTS WILL RECEIVE AN AIRDROP OF $ENA AND POSSIBLY ADDITIONAL
                  NFT CARDS.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="bg-ena-darkgray p-3 rounded-lg text-center">
                    <div className="text-sm font-bold mb-1">COMMON NFTS</div>
                    <div className="text-xs text-gray-400">LOWER AIRDROP BUT MORE AFFORDABLE</div>
                  </div>
                  <div className="bg-ena-darkgray p-3 rounded-lg text-center">
                    <div className="text-sm font-bold mb-1">LEGENDARY NFTS</div>
                    <div className="text-xs text-gray-400">HIGHER AIRDROP REWARDS</div>
                  </div>
                  <div className="bg-ena-darkgray p-3 rounded-lg text-center">
                    <div className="text-sm font-bold mb-1">SPECIAL MANA NFTS</div>
                    <div className="text-xs text-gray-400">HIGHEST TIER AIRDROPS AND EXCLUSIVE BONUSES</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-ena-darkgray/50 rounded-lg p-6 border border-ena-yellow">
              <h2 className="text-2xl font-bold mb-4 text-ena-yellow font-main">SUSTAINABILITY & GROWTH</h2>
              <ul className="space-y-3 font-cards">
                <li className="flex items-start gap-2">
                  <span className="text-ena-yellow font-bold">•</span>
                  <span>
                    EARLY ADOPTERS BENEFIT THE MOST, RECEIVING HIGHER RETURNS THROUGH INITIAL NFT AIRDROPS AND REWARDS
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-ena-yellow font-bold">•</span>
                  <span>
                    THE MODEL ENSURES ORGANIC GROWTH, WITH THE TOKEN AND NFT ECOSYSTEM EVOLVING BASED ON REAL COMMUNITY
                    ENGAGEMENT
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-ena-yellow font-bold">•</span>
                  <span>
                    LONG-TERM GOAL: ESTABLISH $ENA AS A VALUABLE TOKEN BOTH WITHIN THE ENA UNIVERSE ECOSYSTEM AND THE
                    BROADER BLOCKCHAIN GAMING SPACE
                  </span>
                </li>
              </ul>

              <div className="mt-6 flex justify-center">
                <Button className="bg-ena-yellow text-black hover:bg-ena-yellow/80 font-main">
                  <Link href={`#${activeTab === "overview" ? "staking" : ""}`} onClick={() => setActiveTab("staking")}>
                    LEARN ABOUT STAKING
                  </Link>
                </Button>
              </div>
            </div>
          </TabsContent>

          {/* STAKING TAB */}
          <TabsContent value="staking">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div className="bg-ena-darkgray/50 rounded-lg p-6 border border-ena-yellow">
                <h2 className="text-2xl font-bold mb-4 text-ena-yellow font-main flex items-center gap-2">
                  <Award className="h-6 w-6" />
                  NFT STAKING PROCESS
                </h2>
                <div className="relative mb-6 bg-black/30 p-4 rounded-lg">
                  <Image
                    src="/images/nft-staking-process.png"
                    alt="NFT Staking Process"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>

                <h3 className="text-xl font-bold mb-3 font-main">HOW NFT STAKING WORKS</h3>
                <div className="space-y-4 font-cards">
                  <div className="bg-black/30 p-3 rounded-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="bg-ena-yellow rounded-full p-1 h-6 w-6 flex items-center justify-center text-black font-bold">
                        1
                      </div>
                      <h4 className="font-bold">COLLECTION & PURCHASE</h4>
                    </div>
                    <p className="text-sm ml-8">COLLECT OR PURCHASE ENA UNIVERSE NFT CARDS FROM THE MARKETPLACE</p>
                  </div>

                  <div className="bg-black/30 p-3 rounded-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="bg-ena-yellow rounded-full p-1 h-6 w-6 flex items-center justify-center text-black font-bold">
                        2
                      </div>
                      <h4 className="font-bold">STAKE YOUR NFTS</h4>
                    </div>
                    <p className="text-sm ml-8">STAKE YOUR NFTS ON THE ENA UNIVERSE DAPP TO START EARNING REWARDS</p>
                  </div>

                  <div className="bg-black/30 p-3 rounded-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="bg-ena-yellow rounded-full p-1 h-6 w-6 flex items-center justify-center text-black font-bold">
                        3
                      </div>
                      <h4 className="font-bold">EARN FIXED REWARDS</h4>
                    </div>
                    <p className="text-sm ml-8">RECEIVE FIXED DAILY ENA TOKEN REWARDS BASED ON YOUR STAKED NFTS</p>
                  </div>

                  <div className="bg-black/30 p-3 rounded-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="bg-ena-yellow rounded-full p-1 h-6 w-6 flex items-center justify-center text-black font-bold">
                        4
                      </div>
                      <h4 className="font-bold">CLAIM ANYTIME</h4>
                    </div>
                    <p className="text-sm ml-8">CLAIM YOUR EARNED ENA TOKENS AT ANY TIME</p>
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="text-xl font-bold mb-3 font-main">REWARD STRUCTURE</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-cards">
                    <div className="bg-black/30 p-3 rounded-lg">
                      <h4 className="font-bold text-ena-yellow mb-2">FACTION MINERS</h4>
                      <ul className="space-y-1 text-sm">
                        <li className="flex justify-between">
                          <span>SHINOBYTE:</span>
                          <span className="text-ena-green">60 ENA/DAY</span>
                        </li>
                        <li className="flex justify-between">
                          <span>ASHEN ORDER:</span>
                          <span className="text-ena-red">60 ENA/DAY</span>
                        </li>
                        <li className="flex justify-between">
                          <span>NOVA SYNTH:</span>
                          <span className="text-ena-purple">60 ENA/DAY</span>
                        </li>
                        <li className="flex justify-between">
                          <span>NOVA DIGITAL:</span>
                          <span className="text-gray-300">60 ENA/DAY</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-black/30 p-3 rounded-lg">
                      <h4 className="font-bold text-ena-yellow mb-2">SPECIAL MINERS</h4>
                      <ul className="space-y-1 text-sm">
                        <li className="flex justify-between">
                          <span>NEUTRAL MINER:</span>
                          <span className="text-ena-gold">50 ENA/DAY</span>
                        </li>
                        <li className="flex justify-between">
                          <span>MANA MINER:</span>
                          <span className="text-ena-purple">40 ENA/DAY</span>
                        </li>
                        <li className="flex justify-between">
                          <span>DECREASING RATE:</span>
                          <span>30 → 20 ENA/DAY</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-ena-darkgray/50 rounded-lg p-6 border border-ena-yellow">
                <h2 className="text-2xl font-bold mb-4 text-ena-yellow font-main flex items-center gap-2">
                  <Coins className="h-6 w-6" />
                  TOKEN STAKING PROCESS
                </h2>
                <div className="relative mb-6 bg-black/30 p-4 rounded-lg">
                  <Image
                    src="/images/token-staking-process.png"
                    alt="Token Staking Process"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>

                <h3 className="text-xl font-bold mb-3 font-main">HOW TOKEN STAKING WORKS</h3>
                <div className="space-y-4 font-cards">
                  <div className="bg-black/30 p-3 rounded-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="bg-ena-yellow rounded-full p-1 h-6 w-6 flex items-center justify-center text-black font-bold">
                        1
                      </div>
                      <h4 className="font-bold">ACQUIRE $ENA TOKENS</h4>
                    </div>
                    <p className="text-sm ml-8">OBTAIN $ENA TOKENS THROUGH NFT STAKING, AIRDROPS, OR EXCHANGES</p>
                  </div>

                  <div className="bg-black/30 p-3 rounded-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="bg-ena-yellow rounded-full p-1 h-6 w-6 flex items-center justify-center text-black font-bold">
                        2
                      </div>
                      <h4 className="font-bold">STAKE YOUR TOKENS</h4>
                    </div>
                    <p className="text-sm ml-8">STAKE YOUR $ENA TOKENS ON THE ENA UNIVERSE DAPP</p>
                  </div>

                  <div className="bg-black/30 p-3 rounded-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="bg-ena-yellow rounded-full p-1 h-6 w-6 flex items-center justify-center text-black font-bold">
                        3
                      </div>
                      <h4 className="font-bold">EARN APY REWARDS</h4>
                    </div>
                    <p className="text-sm ml-8">EARN REWARDS BASED ON THE ANNUAL PERCENTAGE YIELD (APY)</p>
                  </div>

                  <div className="bg-black/30 p-3 rounded-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="bg-ena-yellow rounded-full p-1 h-6 w-6 flex items-center justify-center text-black font-bold">
                        4
                      </div>
                      <h4 className="font-bold">LOCK IN OR UNLOCK ANYTIME</h4>
                    </div>
                    <p className="text-sm ml-8">FLEXIBILITY TO LOCK YOUR TOKENS FOR HIGHER APY OR WITHDRAW ANYTIME</p>
                  </div>

                  <div className="bg-black/30 p-3 rounded-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="bg-ena-yellow rounded-full p-1 h-6 w-6 flex items-center justify-center text-black font-bold">
                        5
                      </div>
                      <h4 className="font-bold">DAILY CLAIM</h4>
                    </div>
                    <p className="text-sm ml-8">CLAIM YOUR EARNED REWARDS DAILY</p>
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="text-xl font-bold mb-3 font-main">APY RATES</h3>
                  <div className="bg-black/30 p-4 rounded-lg font-cards">
                    <div className="flex justify-between items-center mb-2">
                      <span>INITIAL APY (EARLY STAGE):</span>
                      <span className="text-ena-yellow font-bold">5-7% DAILY</span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span>STANDARD APY (LATER STAGE):</span>
                      <span className="text-ena-yellow font-bold">0.5-2% DAILY</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>LOCKED STAKING BONUS:</span>
                      <span className="text-ena-yellow font-bold">+0.5-1% ADDITIONAL</span>
                    </div>

                    <div className="mt-4 text-sm text-gray-400">
                      NOTE: APY RATES WILL ADJUST OVER TIME AS THE TOKEN ECOSYSTEM MATURES AND STABILIZES.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-ena-darkgray/50 rounded-lg p-6 border border-ena-yellow">
              <h2 className="text-2xl font-bold mb-4 text-ena-yellow font-main">STAKING BENEFITS</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-cards">
                <div className="bg-black/30 p-4 rounded-lg">
                  <div className="bg-ena-yellow rounded-full p-2 h-10 w-10 flex items-center justify-center text-black mb-3">
                    <Coins className="h-5 w-5" />
                  </div>
                  <h3 className="font-bold mb-2">PASSIVE INCOME</h3>
                  <p className="text-sm text-gray-300">
                    EARN PASSIVE REWARDS JUST BY HOLDING AND STAKING YOUR NFTS AND TOKENS
                  </p>
                </div>

                <div className="bg-black/30 p-4 rounded-lg">
                  <div className="bg-ena-yellow rounded-full p-2 h-10 w-10 flex items-center justify-center text-black mb-3">
                    <Lock className="h-5 w-5" />
                  </div>
                  <h3 className="font-bold mb-2">ECOSYSTEM STABILITY</h3>
                  <p className="text-sm text-gray-300">
                    STAKING HELPS MAINTAIN A STABLE TOKEN ECONOMY BY REDUCING CIRCULATING SUPPLY
                  </p>
                </div>

                <div className="bg-black/30 p-4 rounded-lg">
                  <div className="bg-ena-yellow rounded-full p-2 h-10 w-10 flex items-center justify-center text-black mb-3">
                    <Award className="h-5 w-5" />
                  </div>
                  <h3 className="font-bold mb-2">EXCLUSIVE ACCESS</h3>
                  <p className="text-sm text-gray-300">
                    STAKERS GET PRIORITY ACCESS TO NEW FEATURES, CARDS, AND SPECIAL EVENTS
                  </p>
                </div>
              </div>

              <div className="mt-6 flex justify-center">
                <Button className="bg-ena-yellow text-black hover:bg-ena-yellow/80 font-main">
                  <Link
                    href={`#${activeTab === "staking" ? "tokenomics" : ""}`}
                    onClick={() => setActiveTab("tokenomics")}
                  >
                    VIEW TOKENOMICS
                  </Link>
                </Button>
              </div>
            </div>
          </TabsContent>

          {/* TOKENOMICS TAB */}
          <TabsContent value="tokenomics">
            <div className="bg-ena-darkgray/50 rounded-lg p-6 mb-8 border border-ena-yellow">
              <h2 className="text-2xl font-bold mb-6 text-ena-yellow font-main flex items-center gap-2">
                <PieChart className="h-6 w-6" />
                ENA TOKEN DISTRIBUTION
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <div className="aspect-square relative mb-6">
                    <TokenDistributionChart />
                  </div>
                </div>

                <div className="font-cards">
                  <h3 className="text-xl font-bold mb-4 font-main">ALLOCATION BREAKDOWN</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 bg-ena-green rounded-sm"></div>
                          <span className="font-bold">NFT STAKING</span>
                        </div>
                        <span>30% (630,000,000 $ENA)</span>
                      </div>
                      <Progress value={30} className="h-2 bg-gray-700" indicatorClassName="bg-ena-green" />
                      <p className="text-xs text-gray-400 mt-1">REWARDS FOR NFT HOLDERS WHO STAKE THEIR CARDS</p>
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 bg-ena-blue rounded-sm"></div>
                          <span className="font-bold">TOKEN STAKING</span>
                        </div>
                        <span>30% (630,000,000 $ENA)</span>
                      </div>
                      <Progress value={30} className="h-2 bg-gray-700" indicatorClassName="bg-ena-blue" />
                      <p className="text-xs text-gray-400 mt-1">REWARDS FOR USERS WHO STAKE THEIR $ENA TOKENS</p>
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 bg-ena-purple rounded-sm"></div>
                          <span className="font-bold">LIQUIDITY POOLS</span>
                        </div>
                        <span>20% (420,000,000 $ENA)</span>
                      </div>
                      <Progress value={20} className="h-2 bg-gray-700" indicatorClassName="bg-ena-purple" />
                      <p className="text-xs text-gray-400 mt-1">ALLOCATED TO PROVIDE MARKET LIQUIDITY</p>
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 bg-ena-yellow rounded-sm"></div>
                          <span className="font-bold">MARKETING</span>
                        </div>
                        <span>10% (210,000,000 $ENA)</span>
                      </div>
                      <Progress value={10} className="h-2 bg-gray-700" indicatorClassName="bg-ena-yellow" />
                      <p className="text-xs text-gray-400 mt-1">ALLOCATED FOR MARKETING CAMPAIGNS AND PROMOTIONS</p>
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 bg-ena-red rounded-sm"></div>
                          <span className="font-bold">TEAM</span>
                        </div>
                        <span>5% (105,000,000 $ENA)</span>
                      </div>
                      <Progress value={5} className="h-2 bg-gray-700" indicatorClassName="bg-ena-red" />
                      <p className="text-xs text-gray-400 mt-1">ALLOCATED TO THE DEVELOPMENT TEAM</p>
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 bg-ena-gold rounded-sm"></div>
                          <span className="font-bold">AIRDROP</span>
                        </div>
                        <span>5% (105,000,000 $ENA)</span>
                      </div>
                      <Progress value={5} className="h-2 bg-gray-700" indicatorClassName="bg-ena-gold" />
                      <p className="text-xs text-gray-400 mt-1">ALLOCATED FOR COMMUNITY AIRDROPS AND REWARDS</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-black/30 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-bold mb-4 text-ena-yellow font-main">WHY THIS ALLOCATION?</h3>
                <p className="mb-4 font-cards">
                  THE TOKENOMICS STRUCTURE IS DESIGNED TO PROVIDE STRONG INCENTIVES FOR EARLY ADOPTION WHILE ENSURING
                  THE LONG-TERM SUSTAINABILITY OF THE ENA UNIVERSE ECOSYSTEM. BY ALLOCATING A SUBSTANTIAL AMOUNT TO NFT
                  AND TOKEN STAKING, WE AIM TO REWARD USERS WHO COMMIT TO THE ECOSYSTEM EARLY.
                </p>
                <p className="font-cards">
                  THE LIQUIDITY POOLS WILL PROVIDE ESSENTIAL MARKET DEPTH AND STABILITY, WHILE MARKETING AND AIRDROPS
                  WILL HELP DRIVE AWARENESS AND ADOPTION. THE TEAM'S ALLOCATION ENSURES THAT THERE IS CONTINUOUS
                  DEVELOPMENT AND SUPPORT FOR THE ECOSYSTEM, WHILE A WELL-BALANCED DISTRIBUTION ENSURES THE VALUE OF THE
                  TOKEN WILL GROW OVER TIME.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-cards">
                <div className="bg-black/30 p-4 rounded-lg">
                  <h3 className="font-bold mb-3 flex items-center gap-2">
                    <Clock className="h-5 w-5 text-ena-yellow" />
                    VESTING SCHEDULE
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex justify-between">
                      <span>TEAM TOKENS:</span>
                      <span>12-MONTH VESTING PERIOD</span>
                    </li>
                    <li className="flex justify-between">
                      <span>MARKETING TOKENS:</span>
                      <span>RELEASED QUARTERLY</span>
                    </li>
                    <li className="flex justify-between">
                      <span>STAKING REWARDS:</span>
                      <span>RELEASED DAILY</span>
                    </li>
                    <li className="flex justify-between">
                      <span>LIQUIDITY POOLS:</span>
                      <span>LOCKED FOR 6 MONTHS</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-black/30 p-4 rounded-lg">
                  <h3 className="font-bold mb-3 flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-ena-yellow" />
                    TOKEN UTILITY
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-ena-yellow font-bold">•</span>
                      <span>PURCHASE NEW CARD PACKS AND EXPANSIONS</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-ena-yellow font-bold">•</span>
                      <span>ENTRY FEES FOR TOURNAMENTS</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-ena-yellow font-bold">•</span>
                      <span>GOVERNANCE VOTING RIGHTS</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-ena-yellow font-bold">•</span>
                      <span>UNLOCK EXCLUSIVE CONTENT AND FEATURES</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <Button className="bg-ena-yellow text-black hover:bg-ena-yellow/80 font-main">
                <Link href="/play">START PLAYING NOW</Link>
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

// Token Distribution Chart Component
function TokenDistributionChart() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg viewBox="0 0 400 400" className="w-full h-full">
        <defs>
          <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="0" stdDeviation="5" floodColor="#000" floodOpacity="0.5" />
          </filter>
        </defs>

        {/* NFT Staking - 30% */}
        <path
          d="M200,200 L200,0 A200,200 0 0,1 373.2,100 Z"
          fill="#7ed957"
          stroke="#000"
          strokeWidth="1"
          filter="url(#shadow)"
        />

        {/* Token Staking - 30% */}
        <path
          d="M200,200 L373.2,100 A200,200 0 0,1 373.2,300 Z"
          fill="#0c49ac"
          stroke="#000"
          strokeWidth="1"
          filter="url(#shadow)"
        />

        {/* Liquidity Pools - 20% */}
        <path
          d="M200,200 L373.2,300 A200,200 0 0,1 200,400 Z"
          fill="#8449b5"
          stroke="#000"
          strokeWidth="1"
          filter="url(#shadow)"
        />

        {/* Marketing - 10% */}
        <path
          d="M200,200 L200,400 A200,200 0 0,1 95.5,369.5 Z"
          fill="#ffe100"
          stroke="#000"
          strokeWidth="1"
          filter="url(#shadow)"
        />

        {/* Team - 5% */}
        <path
          d="M200,200 L95.5,369.5 A200,200 0 0,1 26.8,300 Z"
          fill="#7c200f"
          stroke="#000"
          strokeWidth="1"
          filter="url(#shadow)"
        />

        {/* Airdrop - 5% */}
        <path
          d="M200,200 L26.8,300 A200,200 0 0,1 26.8,100 L200,200 Z"
          fill="#c89116"
          stroke="#000"
          strokeWidth="1"
          filter="url(#shadow)"
        />

        {/* Center circle */}
        <circle cx="200" cy="200" r="60" fill="#272a2f" stroke="#000" strokeWidth="1" filter="url(#shadow)" />

        {/* Center text */}
        <text
          x="200"
          y="190"
          textAnchor="middle"
          fill="#fff"
          fontSize="14"
          fontWeight="bold"
          fontFamily="'Orbitron', sans-serif"
        >
          $ENA
        </text>
        <text x="200" y="210" textAnchor="middle" fill="#ffe100" fontSize="12" fontFamily="'Orbitron', sans-serif">
          2.1B TOKENS
        </text>

        {/* Labels */}
        <text
          x="250"
          y="70"
          textAnchor="middle"
          fill="#fff"
          fontSize="12"
          fontWeight="bold"
          fontFamily="'Rajdhani', sans-serif"
        >
          NFT STAKING 30%
        </text>
        <text
          x="320"
          y="200"
          textAnchor="middle"
          fill="#fff"
          fontSize="12"
          fontWeight="bold"
          fontFamily="'Rajdhani', sans-serif"
        >
          TOKEN STAKING 30%
        </text>
        <text
          x="280"
          y="330"
          textAnchor="middle"
          fill="#fff"
          fontSize="12"
          fontWeight="bold"
          fontFamily="'Rajdhani', sans-serif"
        >
          LIQUIDITY 20%
        </text>
        <text
          x="150"
          y="350"
          textAnchor="middle"
          fill="#fff"
          fontSize="12"
          fontWeight="bold"
          fontFamily="'Rajdhani', sans-serif"
        >
          MARKETING 10%
        </text>
        <text
          x="70"
          y="300"
          textAnchor="middle"
          fill="#fff"
          fontSize="12"
          fontWeight="bold"
          fontFamily="'Rajdhani', sans-serif"
        >
          TEAM 5%
        </text>
        <text
          x="70"
          y="100"
          textAnchor="middle"
          fill="#fff"
          fontSize="12"
          fontWeight="bold"
          fontFamily="'Rajdhani', sans-serif"
        >
          AIRDROP 5%
        </text>
      </svg>
    </div>
  )
}

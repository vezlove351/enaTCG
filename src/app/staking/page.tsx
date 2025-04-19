"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Coins, Award, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function StakingPage() {
  const [nftStakeAmount, setNftStakeAmount] = useState(1)
  const [tokenStakeAmount, setTokenStakeAmount] = useState(1000)
  const [lockPeriod, setLockPeriod] = useState(30)

  // Simulated data
  const estimatedNftRewards = nftStakeAmount * 60
  const estimatedTokenRewards = (tokenStakeAmount * 0.05 * lockPeriod) / 30
  const baseApy = 5
  const bonusApy = (lockPeriod / 30) * 0.5
  const totalApy = baseApy + (lockPeriod > 0 ? bonusApy : 0)

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
        <h1 className="text-4xl font-bold mb-8 text-center">ENA UNIVERSE STAKING</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <Card className="bg-ena-darkgray/50 border-ena-yellow col-span-1 lg:col-span-3">
            <CardHeader>
              <CardTitle className="text-ena-yellow font-main">STAKING DASHBOARD</CardTitle>
              <CardDescription className="font-cards">STAKE YOUR NFTS AND TOKENS TO EARN REWARDS</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-cards">
                <div className="bg-black/30 p-4 rounded-lg text-center">
                  <div className="text-sm text-gray-400 mb-1">TOTAL VALUE STAKED</div>
                  <div className="text-2xl font-bold text-ena-yellow">1,245,678 $ENA</div>
                </div>
                <div className="bg-black/30 p-4 rounded-lg text-center">
                  <div className="text-sm text-gray-400 mb-1">TOTAL NFTS STAKED</div>
                  <div className="text-2xl font-bold text-ena-yellow">3,456</div>
                </div>
                <div className="bg-black/30 p-4 rounded-lg text-center">
                  <div className="text-sm text-gray-400 mb-1">YOUR PENDING REWARDS</div>
                  <div className="text-2xl font-bold text-ena-yellow">0 $ENA</div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button className="bg-ena-yellow text-black hover:bg-ena-yellow/80 font-main">CONNECT WALLET</Button>
            </CardFooter>
          </Card>
        </div>

        <Tabs defaultValue="nft-staking" className="w-full">
          <TabsList className="grid grid-cols-2 mb-8 bg-ena-darkgray">
            <TabsTrigger value="nft-staking" className="font-main">
              NFT STAKING
            </TabsTrigger>
            <TabsTrigger value="token-staking" className="font-main">
              TOKEN STAKING
            </TabsTrigger>
          </TabsList>

          {/* NFT STAKING TAB */}
          <TabsContent value="nft-staking">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Card className="bg-ena-darkgray/50 border-ena-yellow h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-ena-yellow">
                      <Award className="h-5 w-5" />
                      NFT STAKING
                    </CardTitle>
                    <CardDescription className="font-cards">
                      STAKE YOUR ENA UNIVERSE NFT CARDS TO EARN DAILY REWARDS
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="bg-black/30 p-4 rounded-lg">
                      <h3 className="font-bold mb-3 font-main">HOW IT WORKS</h3>
                      <ol className="space-y-2 font-cards">
                        <li className="flex items-start gap-2">
                          <span className="bg-ena-yellow text-black rounded-full h-5 w-5 flex items-center justify-center text-xs font-bold flex-shrink-0">
                            1
                          </span>
                          <span>CONNECT YOUR WALLET CONTAINING ENA UNIVERSE NFT CARDS</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="bg-ena-yellow text-black rounded-full h-5 w-5 flex items-center justify-center text-xs font-bold flex-shrink-0">
                            2
                          </span>
                          <span>SELECT THE NFTS YOU WANT TO STAKE FROM YOUR COLLECTION</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="bg-ena-yellow text-black rounded-full h-5 w-5 flex items-center justify-center text-xs font-bold flex-shrink-0">
                            3
                          </span>
                          <span>APPROVE THE STAKING TRANSACTION</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="bg-ena-yellow text-black rounded-full h-5 w-5 flex items-center justify-center text-xs font-bold flex-shrink-0">
                            4
                          </span>
                          <span>START EARNING FIXED DAILY REWARDS BASED ON YOUR STAKED NFTS</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="bg-ena-yellow text-black rounded-full h-5 w-5 flex items-center justify-center text-xs font-bold flex-shrink-0">
                            5
                          </span>
                          <span>CLAIM YOUR REWARDS ANYTIME OR COMPOUND THEM FOR GREATER RETURNS</span>
                        </li>
                      </ol>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-black/30 p-4 rounded-lg">
                        <h3 className="font-bold mb-3 font-main">DAILY REWARDS BY FACTION</h3>
                        <ul className="space-y-2 font-cards">
                          <li className="flex justify-between items-center">
                            <div className="flex items-center gap-2">
                              <div className="w-3 h-3 bg-ena-green rounded-full"></div>
                              <span>SHINOBYTE</span>
                            </div>
                            <span className="text-ena-yellow">60 $ENA/DAY</span>
                          </li>
                          <li className="flex justify-between items-center">
                            <div className="flex items-center gap-2">
                              <div className="w-3 h-3 bg-ena-red rounded-full"></div>
                              <span>ASHEN ORDER</span>
                            </div>
                            <span className="text-ena-yellow">60 $ENA/DAY</span>
                          </li>
                          <li className="flex justify-between items-center">
                            <div className="flex items-center gap-2">
                              <div className="w-3 h-3 bg-ena-purple rounded-full"></div>
                              <span>NOVA SYNTH</span>
                            </div>
                            <span className="text-ena-yellow">60 $ENA/DAY</span>
                          </li>
                          <li className="flex justify-between items-center">
                            <div className="flex items-center gap-2">
                              <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                              <span>NOVA DIGITAL</span>
                            </div>
                            <span className="text-ena-yellow">60 $ENA/DAY</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-black/30 p-4 rounded-lg">
                        <h3 className="font-bold mb-3 font-main">SPECIAL MINERS</h3>
                        <ul className="space-y-2 font-cards">
                          <li className="flex justify-between items-center">
                            <div className="flex items-center gap-2">
                              <div className="w-3 h-3 bg-ena-gold rounded-full"></div>
                              <span>NEUTRAL MINER</span>
                            </div>
                            <span className="text-ena-yellow">50 $ENA/DAY</span>
                          </li>
                          <li className="flex justify-between items-center">
                            <div className="flex items-center gap-2">
                              <div className="w-3 h-3 bg-ena-purple rounded-full"></div>
                              <span>MANA MINER</span>
                            </div>
                            <span className="text-ena-yellow">40 $ENA/DAY</span>
                          </li>
                          <li className="flex justify-between items-center">
                            <div className="flex items-center gap-2">
                              <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                              <span>TIER 3 MINER</span>
                            </div>
                            <span className="text-ena-yellow">30 $ENA/DAY</span>
                          </li>
                          <li className="flex justify-between items-center">
                            <div className="flex items-center gap-2">
                              <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                              <span>TIER 4 MINER</span>
                            </div>
                            <span className="text-ena-yellow">20 $ENA/DAY</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-black/30 p-4 rounded-lg">
                      <h3 className="font-bold mb-3 font-main">IMPORTANT NOTES</h3>
                      <ul className="space-y-2 font-cards">
                        <li className="flex items-start gap-2">
                          <span className="text-ena-yellow font-bold">•</span>
                          <span>STAKED NFTS REMAIN IN YOUR WALLET BUT ARE LOCKED FROM TRADING UNTIL UNSTAKED</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-ena-yellow font-bold">•</span>
                          <span>REWARDS ARE CALCULATED AND DISTRIBUTED DAILY</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-ena-yellow font-bold">•</span>
                          <span>YOU CAN UNSTAKE YOUR NFTS AT ANY TIME WITH NO PENALTY</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-ena-yellow font-bold">•</span>
                          <span>REWARD RATES MAY ADJUST OVER TIME AS THE ECOSYSTEM EVOLVES</span>
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <Card className="bg-ena-darkgray/50 border-ena-yellow h-full">
                  <CardHeader>
                    <CardTitle className="text-ena-yellow">NFT STAKING CALCULATOR</CardTitle>
                    <CardDescription className="font-cards">ESTIMATE YOUR POTENTIAL REWARDS</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4 font-cards">
                      <div>
                        <label className="block mb-2 text-sm">NUMBER OF NFTS TO STAKE</label>
                        <div className="flex items-center gap-2">
                          <Input
                            type="number"
                            min="1"
                            value={nftStakeAmount}
                            onChange={(e) => setNftStakeAmount(Number.parseInt(e.target.value) || 1)}
                            className="bg-black/30 border-gray-700"
                          />
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                  <Info className="h-4 w-4" />
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>Enter the number of NFTs you plan to stake</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                      </div>

                      <div className="bg-black/30 p-4 rounded-lg">
                        <h3 className="font-bold mb-3">ESTIMATED REWARDS</h3>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span>DAILY:</span>
                            <span className="text-ena-yellow">{estimatedNftRewards} $ENA</span>
                          </div>
                          <div className="flex justify-between">
                            <span>WEEKLY:</span>
                            <span className="text-ena-yellow">{estimatedNftRewards * 7} $ENA</span>
                          </div>
                          <div className="flex justify-between">
                            <span>MONTHLY:</span>
                            <span className="text-ena-yellow">{estimatedNftRewards * 30} $ENA</span>
                          </div>
                          <div className="flex justify-between">
                            <span>YEARLY:</span>
                            <span className="text-ena-yellow">{estimatedNftRewards * 365} $ENA</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-black/30 p-4 rounded-lg">
                      <h3 className="font-bold mb-3 font-main">YOUR NFT COLLECTION</h3>
                      <div className="text-center py-6 font-cards">
                        <p className="mb-2">CONNECT YOUR WALLET TO VIEW YOUR NFTS</p>
                        <Button className="bg-ena-yellow text-black hover:bg-ena-yellow/80 font-main">
                          CONNECT WALLET
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* TOKEN STAKING TAB */}
          <TabsContent value="token-staking">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Card className="bg-ena-darkgray/50 border-ena-yellow h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-ena-yellow">
                      <Coins className="h-5 w-5" />
                      TOKEN STAKING
                    </CardTitle>
                    <CardDescription className="font-cards">STAKE YOUR $ENA TOKENS TO EARN APY REWARDS</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="bg-black/30 p-4 rounded-lg">
                      <h3 className="font-bold mb-3 font-main">HOW IT WORKS</h3>
                      <ol className="space-y-2 font-cards">
                        <li className="flex items-start gap-2">
                          <span className="bg-ena-yellow text-black rounded-full h-5 w-5 flex items-center justify-center text-xs font-bold flex-shrink-0">
                            1
                          </span>
                          <span>CONNECT YOUR WALLET CONTAINING $ENA TOKENS</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="bg-ena-yellow text-black rounded-full h-5 w-5 flex items-center justify-center text-xs font-bold flex-shrink-0">
                            2
                          </span>
                          <span>ENTER THE AMOUNT OF $ENA YOU WANT TO STAKE</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="bg-ena-yellow text-black rounded-full h-5 w-5 flex items-center justify-center text-xs font-bold flex-shrink-0">
                            3
                          </span>
                          <span>CHOOSE YOUR LOCK PERIOD (OPTIONAL) FOR HIGHER APY</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="bg-ena-yellow text-black rounded-full h-5 w-5 flex items-center justify-center text-xs font-bold flex-shrink-0">
                            4
                          </span>
                          <span>APPROVE THE STAKING TRANSACTION</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="bg-ena-yellow text-black rounded-full h-5 w-5 flex items-center justify-center text-xs font-bold flex-shrink-0">
                            5
                          </span>
                          <span>START EARNING APY REWARDS BASED ON YOUR STAKED AMOUNT</span>
                        </li>
                      </ol>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-black/30 p-4 rounded-lg">
                        <h3 className="font-bold mb-3 font-main">APY RATES</h3>
                        <div className="space-y-3 font-cards">
                          <div className="flex justify-between items-center">
                            <span>BASE APY:</span>
                            <span className="text-ena-yellow">5% DAILY</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span>30-DAY LOCK BONUS:</span>
                            <span className="text-ena-yellow">+0.5% DAILY</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span>60-DAY LOCK BONUS:</span>
                            <span className="text-ena-yellow">+1% DAILY</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span>90-DAY LOCK BONUS:</span>
                            <span className="text-ena-yellow">+1.5% DAILY</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-black/30 p-4 rounded-lg">
                        <h3 className="font-bold mb-3 font-main">LOCK PERIODS</h3>
                        <ul className="space-y-2 font-cards">
                          <li className="flex items-start gap-2">
                            <span className="text-ena-yellow font-bold">•</span>
                            <span>FLEXIBLE: NO LOCK, WITHDRAW ANYTIME (BASE APY)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-ena-yellow font-bold">•</span>
                            <span>30-DAY LOCK: HIGHER APY, LOCKED FOR 30 DAYS</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-ena-yellow font-bold">•</span>
                            <span>60-DAY LOCK: EVEN HIGHER APY, LOCKED FOR 60 DAYS</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-ena-yellow font-bold">•</span>
                            <span>90-DAY LOCK: MAXIMUM APY, LOCKED FOR 90 DAYS</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-black/30 p-4 rounded-lg">
                      <h3 className="font-bold mb-3 font-main">IMPORTANT NOTES</h3>
                      <ul className="space-y-2 font-cards">
                        <li className="flex items-start gap-2">
                          <span className="text-ena-yellow font-bold">•</span>
                          <span>REWARDS ARE CALCULATED AND DISTRIBUTED DAILY</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-ena-yellow font-bold">•</span>
                          <span>EARLY UNSTAKING FROM LOCKED PERIODS INCURS A 10% PENALTY</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-ena-yellow font-bold">•</span>
                          <span>APY RATES MAY ADJUST OVER TIME AS THE ECOSYSTEM EVOLVES</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-ena-yellow font-bold">•</span>
                          <span>COMPOUNDING YOUR REWARDS CAN SIGNIFICANTLY INCREASE YOUR RETURNS</span>
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <Card className="bg-ena-darkgray/50 border-ena-yellow h-full">
                  <CardHeader>
                    <CardTitle className="text-ena-yellow">TOKEN STAKING CALCULATOR</CardTitle>
                    <CardDescription className="font-cards">ESTIMATE YOUR POTENTIAL REWARDS</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4 font-cards">
                      <div>
                        <label className="block mb-2 text-sm">AMOUNT OF $ENA TO STAKE</label>
                        <div className="flex items-center gap-2">
                          <Input
                            type="number"
                            min="1"
                            value={tokenStakeAmount}
                            onChange={(e) => setTokenStakeAmount(Number.parseInt(e.target.value) || 1000)}
                            className="bg-black/30 border-gray-700"
                          />
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                  <Info className="h-4 w-4" />
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>Enter the amount of $ENA tokens you plan to stake</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                      </div>

                      <div>
                        <label className="block mb-2 text-sm">LOCK PERIOD (DAYS)</label>
                        <div className="space-y-2">
                          <Slider
                            value={[lockPeriod]}
                            min={0}
                            max={90}
                            step={30}
                            onValueChange={(value) => setLockPeriod(value[0])}
                            className="py-4"
                          />
                          <div className="flex justify-between text-xs text-gray-400">
                            <span>FLEXIBLE</span>
                            <span>30 DAYS</span>
                            <span>60 DAYS</span>
                            <span>90 DAYS</span>
                          </div>
                          <div className="text-center mt-2">
                            <span className="text-ena-yellow font-bold">{lockPeriod} DAYS</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-black/30 p-4 rounded-lg">
                        <h3 className="font-bold mb-3">ESTIMATED REWARDS</h3>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span>CURRENT APY:</span>
                            <span className="text-ena-yellow">{totalApy.toFixed(2)}% DAILY</span>
                          </div>
                          <div className="flex justify-between">
                            <span>DAILY:</span>
                            <span className="text-ena-yellow">
                              {((tokenStakeAmount * totalApy) / 100).toFixed(2)} $ENA
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span>MONTHLY:</span>
                            <span className="text-ena-yellow">
                              {(((tokenStakeAmount * totalApy) / 100) * 30).toFixed(2)} $ENA
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span>TOTAL AFTER LOCK PERIOD:</span>
                            <span className="text-ena-yellow">{estimatedTokenRewards.toFixed(2)} $ENA</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-black/30 p-4 rounded-lg">
                      <h3 className="font-bold mb-3 font-main">YOUR $ENA BALANCE</h3>
                      <div className="text-center py-6 font-cards">
                        <p className="mb-2">CONNECT YOUR WALLET TO VIEW YOUR BALANCE</p>
                        <Button className="bg-ena-yellow text-black hover:bg-ena-yellow/80 font-main">
                          CONNECT WALLET
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-8 text-center">
          <p className="mb-4 font-cards">LEARN MORE ABOUT ENA UNIVERSE TOKENOMICS</p>
          <Button className="bg-ena-yellow text-black hover:bg-ena-yellow/80 font-main">
            <Link href="/tokenomics">VIEW TOKENOMICS</Link>
          </Button>
        </div>
      </main>
    </div>
  )
}

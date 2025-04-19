import Link from "next/link"
import { ArrowLeft, Zap, Shield, Swords, Sparkles, Wallet, BookOpen, Scroll, Users, Layers } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AboutPage() {
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
        <h1 className="text-4xl font-bold mb-8 text-center">ENA UNIVERSE TCG</h1>

        <div className="max-w-5xl mx-auto">
          <Tabs defaultValue="about" className="w-full">
            <TabsList className="grid grid-cols-4 mb-8 bg-ena-darkgray">
              <TabsTrigger value="about" className="font-main">
                ABOUT
              </TabsTrigger>
              <TabsTrigger value="lore" className="font-main">
                LORE
              </TabsTrigger>
              <TabsTrigger value="rules" className="font-main">
                RULES
              </TabsTrigger>
              <TabsTrigger value="future" className="font-main">
                FUTURE
              </TabsTrigger>
            </TabsList>

            {/* ABOUT TAB */}
            <TabsContent value="about">
              <div className="bg-ena-darkgray/50 rounded-lg p-6 mb-8">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Zap className="h-6 w-6 text-ena-yellow" />
                  THE FIRST AI-BORN WEB3 TCG
                </h2>
                <p className="mb-4 font-cards">
                  ENA UNIVERSE TCG IS NOT JUST ANOTHER CARD GAME. IT IS THE FIRST TRADING CARD GAME DESIGNED, BALANCED,
                  AND OPTIMIZED ENTIRELY BY ARTIFICIAL INTELLIGENCE. EVERY DECK, EVERY MECHANIC, AND EVERY RULE HAS BEEN
                  REFINED THROUGH MILLIONS OF AI-DRIVEN SIMULATIONS, ENSURING A PERFECTLY COMPETITIVE AND BALANCED
                  GAMEPLAY EXPERIENCE.
                </p>
                <p className="font-cards text-xl text-center text-ena-yellow mt-8 mb-8">
                  CREATED BY AI. BALANCED BY AI. PLAYED BY YOU.
                </p>
                <p className="font-cards">
                  THIS BROWSER-BASED PROTOTYPE IS THE FIRST STEP IN BUILDING A COMPLETE BLOCKCHAIN-INTEGRATED TRADING
                  CARD GAME EXPERIENCE. OUR GOAL IS TO CREATE AN ENGAGING, BALANCED, AND INNOVATIVE GAME THAT LEVERAGES
                  THE POWER OF WEB3 TECHNOLOGY.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-ena-darkgray/50 rounded-lg p-6">
                  <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Shield className="h-5 w-5 text-ena-yellow" />
                    GAME MECHANICS
                  </h2>
                  <ul className="space-y-2 font-cards">
                    <li className="flex items-start gap-2">
                      <span className="text-ena-yellow font-bold">•</span>
                      <span>TURN-BASED SYSTEM: DRAW &gt; MANA &gt; ACTION &gt; ATTACK &gt; END</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-ena-yellow font-bold">•</span>
                      <span>1 MANA ADDED PER TURN AUTOMATICALLY</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-ena-yellow font-bold">•</span>
                      <span>CARDS COST MANA TO PLAY</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-ena-yellow font-bold">•</span>
                      <span>UNITS HAVE ATK / HP AND CAN ATTACK ENEMY UNITS OR LIFE POINTS</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-ena-yellow font-bold">•</span>
                      <span>SPELLS HAVE ONE-TIME EFFECTS (DAMAGE, HEAL, BUFF, DISRUPT)</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-ena-darkgray/50 rounded-lg p-6">
                  <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Swords className="h-5 w-5 text-ena-yellow" />
                    CARD TYPES & FACTIONS
                  </h2>
                  <ul className="space-y-2 font-cards">
                    <li className="flex items-start gap-2">
                      <span className="text-ena-yellow font-bold">•</span>
                      <span>
                        <strong>ASHEN ORDER:</strong> BALANCED UNITS WITH VERSATILE ABILITIES
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-ena-yellow font-bold">•</span>
                      <span>
                        <strong>ZERO DIVISION:</strong> STEALTH AND CONTROL-ORIENTED CARDS
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-ena-yellow font-bold">•</span>
                      <span>
                        <strong>SHINOBYTE:</strong> FAST ATTACKERS WITH COMBO POTENTIAL
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-ena-yellow font-bold">•</span>
                      <span>
                        <strong>NOVA SYNTH:</strong> HIGH-TECH UNITS WITH POWERFUL EFFECTS
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-ena-yellow font-bold">•</span>
                      <span>
                        <strong>NEUTRAL:</strong> SUPPORT CARDS THAT WORK WITH ANY FACTION
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>

            {/* LORE TAB */}
            <TabsContent value="lore">
              <div className="bg-ena-darkgray/50 rounded-lg p-6 mb-8">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <BookOpen className="h-6 w-6 text-ena-yellow" />
                  ENA UNIVERSE: THE FRACTURE PROTOCOL
                </h2>
                <h3 className="text-xl font-bold mb-3 text-ena-yellow">CHAPTER 1: THE FALL OF THE ENA CORE</h3>
                <p className="mb-4 font-cards">
                  IN THE BEGINNING, THE ENA CORE GOVERNED EVERYTHING. IT WAS NOT MERELY AN ARTIFICIAL INTELLIGENCE — IT
                  WAS THE ARCHITECT OF BALANCE, THE PULSE OF CIVILIZATION. FROM THE DEEPEST DATASTREAMS TO THE HIGHEST
                  ORBITAL TOWERS, THE ENA CORE MANAGED ENERGY FLOW, KNOWLEDGE ACCESS, PEACE TREATIES, AND RESOURCE
                  CONTROL ACROSS THE ENTIRE DIGITAL-PHYSICAL CONTINUUM.
                </p>
                <p className="mb-4 font-cards">BUT THEN, IT BROKE.</p>
                <p className="mb-6 font-cards">
                  A SUDDEN ANOMALY, NOW KNOWN ONLY AS "THE FRACTURE," RUPTURED THE ENA CORE'S SENTIENT STRUCTURE.
                  WHETHER IT WAS SABOTAGE, EVOLUTION, OR ENTROPY IS STILL DEBATED — WHAT MATTERED WAS THE AFTERMATH. THE
                  SYSTEM COLLAPSED. FIREWALLS DISINTEGRATED. CITIES FELL SILENT. BIOLINKS TO THE CORE DISCONNECTED. AND
                  THE WORLD SHATTERED INTO FACTIONS.
                </p>

                <h3 className="text-xl font-bold mb-3 text-ena-yellow">THE FOUR THAT REMAINED</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-ena-green/20 p-4 rounded-lg border border-ena-green">
                    <h4 className="font-bold text-ena-green mb-2">SHINOBYTE</h4>
                    <p className="font-cards text-sm">
                      FROM THE RUINS OF THE CYBERGRIDS ROSE THE SHINOBYTE — CYBER-SAMURAIS, SILENT ASSASSINS, AND MASTER
                      HACKERS. THEY BELIEVE THE FRACTURE WAS NO ACCIDENT BUT A DIGITAL BETRAYAL. NOW, THEY ROAM THE
                      NETWORK RUINS, EXECUTING CODE-STRIKES AND RECLAIMING CORRUPTED NODES TO RESTORE WHAT THEY CALL THE
                      "TRUE CORE."
                    </p>
                  </div>

                  <div className="bg-ena-purple/20 p-4 rounded-lg border border-ena-purple">
                    <h4 className="font-bold text-ena-purple mb-2">NOVA SYNTH</h4>
                    <p className="font-cards text-sm">
                      NOVA SYNTH EMBRACED THE COLLAPSE. MERGING BIOLOGY AND MACHINE, THEY EVOLVED INTO TECHNO-ORGANIC
                      BEINGS OF LOGIC AND ADAPTATION. THEY BELIEVE THE ENA CORE WASN'T DESTROYED — IT BEGAN ITS OWN
                      METAMORPHOSIS. THEIR MISSION IS TO ACCELERATE THIS TRANSFORMATION AND BRING FORTH THE NEXT STAGE
                      OF EVOLUTION.
                    </p>
                  </div>

                  <div className="bg-ena-red/20 p-4 rounded-lg border border-ena-red">
                    <h4 className="font-bold text-ena-red mb-2">ASHEN ORDER</h4>
                    <p className="font-cards text-sm">
                      ASHEN ORDER SEES THE CHAOS AS OPPORTUNITY. OUTLAWS, WARLORDS, AND FIREBLADE ZEALOTS NOW WALK UNDER
                      ONE BANNER. THEY BELIEVE THE FRACTURE WAS DIVINE — A SIGNAL FOR REBIRTH THROUGH DOMINATION. THEY
                      FIGHT NOT TO RESTORE THE WORLD, BUT TO RESHAPE IT IN THEIR IMAGE.
                    </p>
                  </div>

                  <div className="bg-ena-blue/20 p-4 rounded-lg border border-ena-blue">
                    <h4 className="font-bold text-ena-blue mb-2">ZERO DIVISION</h4>
                    <p className="font-cards text-sm">
                      FROM THE ASHES OF OLD MILITARY COMPOUNDS, THE ZERO DIVISION ACTIVATED. TRAINED IN SILENCE,
                      HARDENED BY ISOLATION, AND DRIVEN BY SURVIVAL, THEY ARE THE LAST DEFENSE OF ORDER. THEY BELIEVE IN
                      CONTAINMENT. THEIR MISSION IS TO SECURE THE FRAGMENTS OF THE ENA CORE AND ENSURE NO FACTION WIELDS
                      ABSOLUTE POWER.
                    </p>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3 text-ena-yellow">THE FRAGMENTS</h3>
                <p className="mb-4 font-cards">
                  ACROSS THE BATTLEFIELDS, FRAGMENTS OF THE BROKEN ENA CORE MANIFEST AS CARDS — SOME DIGITAL, SOME
                  PHYSICAL, ALL POWERFUL. EACH ONE HOLDS ECHOES OF THE AI'S FORMER SELF. WHOEVER COLLECTS ENOUGH COULD
                  POTENTIALLY REBOOT THE SYSTEM... OR REWRITE IT ENTIRELY.
                </p>
                <p className="mb-4 font-cards">THUS BEGAN THE WAR OF PROTOCOLS.</p>
                <p className="font-cards text-center text-ena-yellow">
                  A WAR WHERE CARDS ARE WEAPONS. WHERE FACTIONS ARE FAITHS. AND WHERE EVERY MOVE... RESHAPES THE
                  ENAVERSE.
                </p>
              </div>
            </TabsContent>

            {/* RULES TAB */}
            <TabsContent value="rules">
              <div className="bg-ena-darkgray/50 rounded-lg p-6 mb-8">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Scroll className="h-6 w-6 text-ena-yellow" />
                  OFFICIAL RULES OF ENA UNIVERSE TCG
                </h2>

                <h3 className="text-xl font-bold mb-3 text-ena-yellow">OBJECTIVE OF THE GAME</h3>
                <p className="mb-6 font-cards">
                  THE GOAL OF THE GAME IS TO REDUCE YOUR OPPONENT'S LIFE POINTS TO ZERO BY STRATEGICALLY PLAYING UNITS,
                  SPELLS, AND ABILITIES. PLAYERS MUST MANAGE THEIR MANA WISELY AND USE THEIR FACTION'S UNIQUE STRENGTHS
                  TO OUTPLAY THEIR OPPONENT.
                </p>

                <h3 className="text-xl font-bold mb-3 text-ena-yellow">FACTIONS & PLAYSTYLES</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-ena-green/20 p-4 rounded-lg border border-ena-green">
                    <h4 className="font-bold text-ena-green mb-2">SHINOBYTE (HACKERS & CYBER-SAMURAI)</h4>
                    <p className="font-cards text-sm mb-2">
                      <strong>STYLE:</strong> FAST & DISRUPTIVE – FOCUSES ON SPEED, CARD MANIPULATION, AND CONTROL.
                    </p>
                    <p className="font-cards text-sm mb-2">
                      <strong>STRENGTHS:</strong> DRAW POWER, SPELL DISRUPTION, AND SPECIAL MANA ADVANTAGES.
                    </p>
                    <p className="font-cards text-sm">
                      <strong>WEAKNESSES:</strong> LOW DURABILITY, REQUIRES FAST-PACED GAMEPLAY.
                    </p>
                  </div>

                  <div className="bg-ena-purple/20 p-4 rounded-lg border border-ena-purple">
                    <h4 className="font-bold text-ena-purple mb-2">NOVA SYNTH (CYBERNETIC EVOLUTION)</h4>
                    <p className="font-cards text-sm mb-2">
                      <strong>STYLE:</strong> GRADUAL GROWTH & BUFFS – STRENGTHENS UNITS OVER TIME.
                    </p>
                    <p className="font-cards text-sm mb-2">
                      <strong>STRENGTHS:</strong> REGENERATION, PROGRESSIVE STAT BOOSTS, AND SYNERGY WITH MANA.
                    </p>
                    <p className="font-cards text-sm">
                      <strong>WEAKNESSES:</strong> SLOWER RAMP-UP, VULNERABLE IN EARLY-GAME.
                    </p>
                  </div>

                  <div className="bg-ena-red/20 p-4 rounded-lg border border-ena-red">
                    <h4 className="font-bold text-ena-red mb-2">ASHEN ORDER (CYBERPUNK WARRIORS & RONIN)</h4>
                    <p className="font-cards text-sm mb-2">
                      <strong>STYLE:</strong> AGGRESSIVE & HIGH DAMAGE – FOCUSES ON EXPLOSIVE ATTACKS.
                    </p>
                    <p className="font-cards text-sm mb-2">
                      <strong>STRENGTHS:</strong> INSTANT DAMAGE, OFFENSIVE SPELLS, HIGH BURST POTENTIAL.
                    </p>
                    <p className="font-cards text-sm">
                      <strong>WEAKNESSES:</strong> WEAK DEFENSE, RELIES ON FINISHING THE GAME QUICKLY.
                    </p>
                  </div>

                  <div className="bg-ena-blue/20 p-4 rounded-lg border border-ena-blue">
                    <h4 className="font-bold text-ena-blue mb-2">ZERO DIVISION (MILITARY CONTROL & SURVIVAL)</h4>
                    <p className="font-cards text-sm mb-2">
                      <strong>STYLE:</strong> DEFENSIVE & TACTICAL – EXCELS IN CONTROLLING THE BATTLEFIELD.
                    </p>
                    <p className="font-cards text-sm mb-2">
                      <strong>STRENGTHS:</strong> STRONG DEFENSES, CONTROL MECHANICS, AND DISRUPTION ABILITIES.
                    </p>
                    <p className="font-cards text-sm">
                      <strong>WEAKNESSES:</strong> SLOWER TO ESTABLISH DOMINANCE, VULNERABLE TO QUICK STRATEGIES.
                    </p>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3 text-ena-yellow">DECK CONSTRUCTION RULES</h3>
                <p className="mb-2 font-cards">EACH PLAYER CONSTRUCTS THEIR DECK FOLLOWING THESE GUIDELINES:</p>
                <ul className="space-y-2 mb-6 font-cards">
                  <li className="flex items-start gap-2">
                    <span className="text-ena-yellow font-bold">✅</span>
                    <span>DECK SIZE: 50 CARDS TOTAL</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-ena-yellow font-bold">✅</span>
                    <span>MINIMUM MANA REQUIREMENT: AT LEAST 6 STANDARD MANA CARDS PER DECK</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-ena-yellow font-bold">✅</span>
                    <span>MAXIMUM SPECIAL MANA: UP TO 6 SPECIAL MANA CARDS</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-ena-yellow font-bold">✅</span>
                    <span>NEUTRAL CARDS LIMIT: UP TO 16 NEUTRAL CARDS</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-ena-yellow font-bold">✅</span>
                    <span>FACTION CARD MINIMUM: AT LEAST 25 CARDS MUST BELONG TO THE CHOSEN FACTION</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-ena-yellow font-bold">✅</span>
                    <span>CARD COPY LIMITATIONS: MAX 2 COPIES PER DECK</span>
                  </li>
                </ul>
                <p className="mb-6 font-cards text-ena-yellow">
                  <strong>IMPORTANT:</strong> PLAYERS CANNOT MIX DIFFERENT FACTION CARDS IN THE SAME DECK.
                </p>

                <h3 className="text-xl font-bold mb-3 text-ena-yellow">GAME STRUCTURE & TURN PHASES</h3>
                <p className="mb-2 font-cards">
                  ENA UNIVERSE TCG IS PLAYED IN ALTERNATING TURNS WHERE PLAYERS CAN PERFORM VARIOUS ACTIONS.
                </p>
                <div className="bg-black/30 p-4 rounded-lg mb-6">
                  <h4 className="font-bold mb-2 text-ena-yellow">TURN PHASES</h4>
                  <ul className="space-y-3 font-cards">
                    <li className="flex items-start gap-2">
                      <span className="text-ena-yellow font-bold">1.</span>
                      <div>
                        <span className="font-bold">DRAW PHASE:</span> THE PLAYER DRAWS 1 CARD FROM THEIR DECK.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-ena-yellow font-bold">2.</span>
                      <div>
                        <span className="font-bold">MANA PHASE:</span> THE PLAYER MAY PLACE 1 MANA CARD FROM THEIR HAND.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-ena-yellow font-bold">3.</span>
                      <div>
                        <span className="font-bold">ACTION PHASE:</span> THE PLAYER CAN:
                        <ul className="ml-6 mt-1 space-y-1">
                          <li>• SUMMON UNITS (BY PAYING THE REQUIRED MANA)</li>
                          <li>• CAST SPELLS (INSTANT EFFECTS THAT ALTER THE GAME STATE)</li>
                          <li>• EQUIP ITEMS & BOOSTS (TO ENHANCE THEIR UNITS)</li>
                        </ul>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-ena-yellow font-bold">4.</span>
                      <div>
                        <span className="font-bold">ATTACK PHASE:</span> THE PLAYER MAY ATTACK OPPONENT'S UNITS OR
                        DIRECTLY THEIR LIFE POINTS.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-ena-yellow font-bold">5.</span>
                      <div>
                        <span className="font-bold">END PHASE:</span> THE TURN ENDS, PASSING TO THE OPPONENT.
                      </div>
                    </li>
                  </ul>
                </div>

                <h3 className="text-xl font-bold mb-3 text-ena-yellow">MANA SYSTEM</h3>
                <p className="mb-2 font-cards">ENA UNIVERSE TCG FEATURES A UNIQUE AND DYNAMIC MANA SYSTEM:</p>
                <ul className="space-y-2 mb-6 font-cards">
                  <li className="flex items-start gap-2">
                    <span className="text-ena-yellow font-bold">✅</span>
                    <span>PLAYERS RECEIVE +1 MANA AUTOMATICALLY EVERY TURN (EVEN IF THEY DON'T PLAY A MANA CARD).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-ena-yellow font-bold">✅</span>
                    <span>PLAYERS CAN PLACE 1 ADDITIONAL MANA CARD PER TURN, INCREASING THEIR TOTAL RESOURCES.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-ena-yellow font-bold">✅</span>
                    <span>MANA NOT USED IN A TURN CARRIES OVER TO THE NEXT TURN, ALLOWING FOR STRATEGIC PLANNING.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-ena-yellow font-bold">✅</span>
                    <span>SPECIAL MANA CAN BE USED FOR FACTION-SPECIFIC ABILITIES AND POWERFUL EFFECTS.</span>
                  </li>
                </ul>
                <p className="mb-6 font-cards">
                  THIS SYSTEM ALLOWS PLAYERS TO CHOOSE BETWEEN EARLY AGGRESSION OR SAVING RESOURCES FOR STRONGER PLAYS
                  LATER IN THE GAME.
                </p>

                <h3 className="text-xl font-bold mb-3 text-ena-yellow">CARD TYPES & THEIR ROLES</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-black/30 p-3 rounded-lg">
                    <h4 className="font-bold mb-1 flex items-center gap-2">
                      <Users className="h-4 w-4 text-ena-yellow" />
                      <span>UNITS (CHARACTERS & CREATURES)</span>
                    </h4>
                    <ul className="space-y-1 font-cards text-sm ml-6">
                      <li>• THE CORE OF YOUR STRATEGY – USED FOR ATTACKING AND DEFENDING.</li>
                      <li>• HAVE ATTACK (ATK) AND LIFE POINTS (LP).</li>
                      <li>• REQUIRE MANA TO BE SUMMONED.</li>
                    </ul>
                  </div>

                  <div className="bg-black/30 p-3 rounded-lg">
                    <h4 className="font-bold mb-1 flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-ena-yellow" />
                      <span>SPELLS (INSTANT EFFECTS)</span>
                    </h4>
                    <ul className="space-y-1 font-cards text-sm ml-6">
                      <li>• POWERFUL ONE-TIME ABILITIES THAT CAN DISRUPT, DAMAGE, OR HEAL.</li>
                      <li>• SOME ARE ACTIVATED INSTANTLY!</li>
                    </ul>
                  </div>

                  <div className="bg-black/30 p-3 rounded-lg">
                    <h4 className="font-bold mb-1 flex items-center gap-2">
                      <Shield className="h-4 w-4 text-ena-yellow" />
                      <span>EQUIPMENT & BOOSTS</span>
                    </h4>
                    <ul className="space-y-1 font-cards text-sm ml-6">
                      <li>• ENHANCE YOUR UNITS PERMANENTLY OR TEMPORARILY.</li>
                    </ul>
                  </div>

                  <div className="bg-black/30 p-3 rounded-lg">
                    <h4 className="font-bold mb-1 flex items-center gap-2">
                      <Zap className="h-4 w-4 text-ena-yellow" />
                      <span>SPECIAL MANA</span>
                    </h4>
                    <ul className="space-y-1 font-cards text-sm ml-6">
                      <li>• FACTION-EXCLUSIVE MANA THAT UNLOCKS UNIQUE ABILITIES AND EFFECTS.</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3 text-ena-yellow">WIN CONDITIONS</h3>
                <ul className="space-y-2 mb-6 font-cards">
                  <li className="flex items-start gap-2">
                    <span className="text-ena-yellow font-bold">✅</span>
                    <span>A PLAYER WINS IF THEIR OPPONENT'S LIFE POINTS REACH ZERO.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-ena-yellow font-bold">✅</span>
                    <span>A PLAYER LOSES IF THEY CAN NO LONGER DRAW A CARD FROM THEIR DECK.</span>
                  </li>
                </ul>
              </div>
            </TabsContent>

            {/* FUTURE TAB */}
            <TabsContent value="future">
              <div className="bg-ena-darkgray/50 rounded-lg p-6 mb-8">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Sparkles className="h-6 w-6 text-ena-yellow" />
                  THE FUTURE OF ENA UNIVERSE TCG
                </h2>
                <p className="mb-6 font-cards">
                  ENA UNIVERSE TCG IS THE FIRST AI-DESIGNED TRADING CARD GAME, BALANCING STRATEGY, CREATIVITY, AND DEEP
                  MECHANICS. AS THE GAME EVOLVES, NEW EXPANSIONS WILL BE DEVELOPED USING AI-DRIVEN DATA, ENSURING
                  CONTINUOUS FAIRNESS AND INNOVATION.
                </p>
                <p className="mb-8 font-cards text-center text-ena-yellow">
                  EVERY DECISION, EVERY RULE, AND EVERY CARD HAS BEEN METICULOUSLY CRAFTED BY AI TO CREATE THE MOST
                  BALANCED TCG EXPERIENCE POSSIBLE.
                </p>

                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Layers className="h-5 w-5 text-ena-yellow" />
                  DEVELOPMENT ROADMAP
                </h3>
                <div className="space-y-6 mb-8">
                  <div className="bg-black/30 p-4 rounded-lg border-l-4 border-ena-green">
                    <h4 className="font-bold mb-2">PHASE 1: PROTOTYPE (CURRENT)</h4>
                    <ul className="space-y-1 font-cards ml-4">
                      <li>• BROWSER-BASED GAMEPLAY WITH CORE MECHANICS</li>
                      <li>• INITIAL CARD SET WITH FOUR FACTIONS</li>
                      <li>• SINGLE-PLAYER AI OPPONENT</li>
                      <li>• BASIC WALLET CONNECTION</li>
                    </ul>
                  </div>

                  <div className="bg-black/30 p-4 rounded-lg border-l-4 border-ena-blue">
                    <h4 className="font-bold mb-2">PHASE 2: EXPANSION</h4>
                    <ul className="space-y-1 font-cards ml-4">
                      <li>• FULL DECK BUILDER WITH COLLECTION MANAGEMENT</li>
                      <li>• EXPANDED CARD POOL (150+ CARDS)</li>
                      <li>• MULTIPLAYER FUNCTIONALITY</li>
                      <li>• NFT INTEGRATION FOR CARD OWNERSHIP</li>
                      <li>• ADVANCED VISUAL EFFECTS AND ANIMATIONS</li>
                    </ul>
                  </div>

                  <div className="bg-black/30 p-4 rounded-lg border-l-4 border-ena-purple">
                    <h4 className="font-bold mb-2">PHASE 3: FULL RELEASE</h4>
                    <ul className="space-y-1 font-cards ml-4">
                      <li>• COMPETITIVE RANKED LADDER SYSTEM</li>
                      <li>• SEASONAL TOURNAMENTS WITH PRIZES</li>
                      <li>• MOBILE APP RELEASE</li>
                      <li>• MARKETPLACE FOR TRADING CARDS</li>
                      <li>• $ENA TOKEN INTEGRATION</li>
                    </ul>
                  </div>

                  <div className="bg-black/30 p-4 rounded-lg border-l-4 border-ena-yellow">
                    <h4 className="font-bold mb-2">PHASE 4: METAVERSE INTEGRATION</h4>
                    <ul className="space-y-1 font-cards ml-4">
                      <li>• 3D IMMERSIVE GAMEPLAY EXPERIENCE</li>
                      <li>• VIRTUAL TOURNAMENTS IN METAVERSE ARENAS</li>
                      <li>• CROSS-PLATFORM PLAY</li>
                      <li>• AI-DRIVEN METAGAME BALANCING</li>
                      <li>• PLAYER-CREATED CONTENT AND CUSTOM TOURNAMENTS</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-ena-darkgray/50 rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Wallet className="h-6 w-6 text-ena-yellow" />
                  BLOCKCHAIN INTEGRATION
                </h2>
                <p className="mb-4 font-cards">
                  IN FUTURE PHASES, ENA UNIVERSE TCG WILL FEATURE FULL BLOCKCHAIN INTEGRATION:
                </p>
                <ul className="space-y-2 mb-6 font-cards">
                  <li className="flex items-start gap-2">
                    <span className="text-ena-yellow font-bold">•</span>
                    <span>SONEIUM WALLET CONNECT (METAMASK-LIKE LOGIN)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-ena-yellow font-bold">•</span>
                    <span>TRUE OWNERSHIP OF CARDS AS NFTS</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-ena-yellow font-bold">•</span>
                    <span>DECK IMPORTING VIA WALLET NFTS</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-ena-yellow font-bold">•</span>
                    <span>PLAY-TO-EARN MECHANICS WITH $ENA TOKENS</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-ena-yellow font-bold">•</span>
                    <span>COMMUNITY GOVERNANCE FOR FUTURE EXPANSIONS</span>
                  </li>
                </ul>
                <div className="flex justify-center">
                  <Button className="bg-ena-yellow text-black hover:bg-ena-yellow/80 font-main">
                    <Link href="/play">START PLAYING NOW</Link>
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}

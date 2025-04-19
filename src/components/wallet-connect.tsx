"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Wallet, Loader2, CheckCircle, AlertCircle } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface WalletConnectProps {
  onConnect?: (walletInfo: { address: string; balance: number; walletType: string }) => void;
  className?: string;
}

export function WalletConnect({ onConnect, className = "" }: WalletConnectProps) {
  const [isConnecting, setIsConnecting] = useState(false)
  const [isConnected, setIsConnected] = useState(false)
  const [walletAddress, setWalletAddress] = useState("")
  const [walletBalance, setWalletBalance] = useState(0)
  const [error, setError] = useState("")
  const [dialogOpen, setDialogOpen] = useState(false)

  // Simulated wallet connection
  const connectWallet = async (walletType: string) => {
    setIsConnecting(true)
    setError("")

    try {
      // Simulate API call to connect wallet
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Simulate successful connection
      const simulatedAddress = `0x${Math.random().toString(16).slice(2, 12)}...${Math.random().toString(16).slice(2, 6)}`
      const simulatedBalance = Math.floor(Math.random() * 10000)

      setWalletAddress(simulatedAddress)
      setWalletBalance(simulatedBalance)
      setIsConnected(true)

      if (onConnect) {
        onConnect({
          address: simulatedAddress,
          balance: simulatedBalance,
          walletType,
        })
      }

      setDialogOpen(false)
    } catch (err) {
      setError("Failed to connect wallet. Please try again.")
    } finally {
      setIsConnecting(false)
    }
  }

  const disconnectWallet = () => {
    setIsConnected(false)
    setWalletAddress("")
    setWalletBalance(0)
  }

  return (
    <>
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogTrigger asChild>
          {isConnected ? (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    className={`font-main border-ena-yellow text-ena-yellow hover:bg-ena-yellow/10 ${className}`}
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      setDialogOpen(true)
                    }}
                  >
                    <Wallet className="mr-2 h-4 w-4" />
                    {walletAddress}
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Connected • {walletBalance} $ENA</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ) : (
            <Button
              className={`bg-ena-yellow text-black hover:bg-ena-yellow/80 font-main ${className}`}
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                setDialogOpen(true)
              }}
            >
              <Wallet className="mr-2 h-4 w-4" />
              CONNECT WALLET
            </Button>
          )}
        </DialogTrigger>
        <DialogContent className="bg-ena-darkgray border border-ena-yellow">
          <DialogHeader>
            <DialogTitle className="text-ena-yellow font-main">
              {isConnected ? "WALLET CONNECTED" : "CONNECT YOUR WALLET"}
            </DialogTitle>
            <DialogDescription className="font-cards">
              {isConnected
                ? "Your wallet is connected to ENA Universe"
                : "Connect your wallet to access ENA Universe features"}
            </DialogDescription>
          </DialogHeader>

          {isConnected ? (
            <div className="space-y-4 py-4">
              <div className="bg-black/30 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <h3 className="font-bold font-main">WALLET CONNECTED</h3>
                </div>
                <div className="space-y-2 font-cards">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Address:</span>
                    <span>{walletAddress}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Balance:</span>
                    <span className="text-ena-yellow">{walletBalance} $ENA</span>
                  </div>
                </div>
              </div>

              <Button variant="destructive" className="w-full font-main" onClick={disconnectWallet}>
                DISCONNECT WALLET
              </Button>
            </div>
          ) : (
            <div className="space-y-4 py-4">
              {error && (
                <div className="bg-red-900/30 border border-red-500 p-3 rounded-lg flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
                  <p className="text-sm font-cards">{error}</p>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <WalletOption
                  name="SONEIUM WALLET"
                  icon="/images/soneium-wallet.png"
                  description="Connect using Soneium's official wallet"
                  onClick={() => connectWallet("soneium")}
                  isLoading={isConnecting}
                />

                <WalletOption
                  name="METAMASK"
                  icon="/images/metamask-wallet.png"
                  description="Connect using MetaMask wallet"
                  onClick={() => connectWallet("metamask")}
                  isLoading={isConnecting}
                />

                <WalletOption
                  name="WALLET CONNECT"
                  icon="/images/walletconnect.png"
                  description="Connect using WalletConnect"
                  onClick={() => connectWallet("walletconnect")}
                  isLoading={isConnecting}
                />

                <WalletOption
                  name="COINBASE WALLET"
                  icon="/images/coinbase-wallet.png"
                  description="Connect using Coinbase Wallet"
                  onClick={() => connectWallet("coinbase")}
                  isLoading={isConnecting}
                />
              </div>

              <div className="text-center text-xs text-gray-400 font-cards">
                By connecting your wallet, you agree to the Terms of Service and Privacy Policy
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}

interface WalletOptionProps {
  name: string;
  icon?: string;
  description: string;
  onClick: () => void;
  isLoading: boolean;
}

function WalletOption({ name, icon, description, onClick, isLoading }: WalletOptionProps) {
  return (
    <button
      className="bg-black/30 p-4 rounded-lg hover:bg-black/50 transition border border-gray-700 hover:border-ena-yellow text-left"
      onClick={onClick}
      disabled={isLoading}
    >
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 bg-gray-800 rounded-full flex items-center justify-center overflow-hidden">
          {icon ? (
            <img src={icon || "/placeholder.svg"} alt={name} className="h-8 w-8 object-contain" />
          ) : (
            <Wallet className="h-5 w-5 text-gray-400" />
          )}
        </div>
        <div>
          <h3 className="font-bold font-main">{name}</h3>
          <p className="text-xs text-gray-400 font-cards">{description}</p>
        </div>
        {isLoading && <Loader2 className="h-4 w-4 ml-auto animate-spin" />}
      </div>
    </button>
  )
}

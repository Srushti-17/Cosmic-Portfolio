import { Rocket } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="py-8 border-t-2 border-indigo-700 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="flex items-center justify-center w-8 h-8 bg-indigo-900 border-2 border-cyan-400 rounded-lg mr-2">
              <Rocket className="h-4 w-4 text-cyan-400" />
            </div>
            <span className="text-lg font-bold text-cyan-400 font-mono">COSMIC EXPLORER</span>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-4 md:mb-0">
            <Link href="#hero" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors font-mono">
              MISSION START
            </Link>
            <Link href="#about" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors font-mono">
              PLAYER STATS
            </Link>
            <Link href="#projects" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors font-mono">
              ARTIFACTS
            </Link>
            <Link href="#skills" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors font-mono">
              SKILL TREE
            </Link>
            <Link href="#contact" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors font-mono">
              COMMS
            </Link>
          </div>

          <div className="text-sm text-gray-400 font-mono">&copy; {new Date().getFullYear()} COSMIC EXPLORER</div>
        </div>

        <div className="mt-6 text-center text-xs text-gray-500 font-mono">
          <p>CREATIVITY UNLEASHED</p>
        </div>
      </div>
    </footer>
  )
}

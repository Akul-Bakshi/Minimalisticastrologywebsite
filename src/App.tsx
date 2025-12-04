import { KundaliChart } from './components/kundali-chart';
import { ChatInterface } from './components/chat-interface';
import { Menu, User, ChevronDown, Moon, Sun } from 'lucide-react';
import { useState } from 'react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={`h-screen flex flex-col overflow-hidden ${isDarkMode ? 'bg-[#2D2B2A]' : 'bg-[#F4F3EE]'}`}>
      {/* Header */}
      <header className={`px-4 py-3 border-b flex-shrink-0 ${isDarkMode ? 'border-[#4A4745]' : 'border-[#B1ADA1]/30'}`}>
        <div className="flex items-center justify-between">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`p-2 -ml-2 rounded-lg transition-colors ${isDarkMode ? 'active:bg-[#3D3B39]' : 'active:bg-[#FFFFFF]'}`}
            aria-label="Menu"
          >
            <Menu className={`w-5 h-5 ${isDarkMode ? 'text-[#EEEBE6]' : 'text-[#000000]'}`} />
          </button>
          
          <h1 className={`absolute left-1/2 -translate-x-1/2 ${isDarkMode ? 'text-[#EEEBE6]' : 'text-[#000000]'}`}>freeastro.ai</h1>
          
          <button
            className={`p-2 -mr-2 rounded-lg transition-colors ${isDarkMode ? 'active:bg-[#3D3B39]' : 'active:bg-[#FFFFFF]'}`}
            aria-label="Login"
          >
            <User className={`w-5 h-5 ${isDarkMode ? 'text-[#EEEBE6]' : 'text-[#000000]'}`} />
          </button>
        </div>
      </header>

      {/* Menu Overlay */}
      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/20 z-40"
            onClick={() => setIsMenuOpen(false)}
          />
          <div className={`fixed top-0 left-0 bottom-0 w-64 border-r z-50 p-4 ${isDarkMode ? 'bg-[#2D2B2A] border-[#4A4745]' : 'bg-[#F4F3EE] border-[#B1ADA1]/30'}`}>
            <div className="space-y-4 h-full flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <h2 className={isDarkMode ? 'text-[#EEEBE6]' : 'text-[#000000]'}>Menu</h2>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className={`p-2 rounded-lg transition-colors ${isDarkMode ? 'active:bg-[#3D3B39]' : 'active:bg-[#FFFFFF]'}`}
                >
                  <span className={`text-xl ${isDarkMode ? 'text-[#EEEBE6]' : 'text-[#000000]'}`}>×</span>
                </button>
              </div>
              
              <div className={`text-sm flex-1 ${isDarkMode ? 'text-[#9B9792]' : 'text-[#B1ADA1]'}`}>
                More options coming soon...
              </div>

              {/* Dark/Light Mode Toggle */}
              <div className={`border-t pt-4 ${isDarkMode ? 'border-[#4A4745]' : 'border-[#B1ADA1]/30'}`}>
                <div className="flex items-center justify-between">
                  <span className={`text-sm ${isDarkMode ? 'text-[#EEEBE6]' : 'text-[#000000]'}`}>
                    {isDarkMode ? 'Dark Mode' : 'Light Mode'}
                  </span>
                  <button
                    onClick={() => setIsDarkMode(!isDarkMode)}
                    className={`relative w-14 h-7 rounded-full transition-colors ${isDarkMode ? 'bg-[#D4714C]' : 'bg-[#C15F3C]'}`}
                    aria-label="Toggle theme"
                  >
                    <div
                      className={`absolute top-1 w-5 h-5 rounded-full bg-white transition-transform flex items-center justify-center ${
                        isDarkMode ? 'translate-x-8' : 'translate-x-1'
                      }`}
                    >
                      {isDarkMode ? (
                        <Moon className="w-3 h-3 text-[#2D2B2A]" />
                      ) : (
                        <Sun className="w-3 h-3 text-[#C15F3C]" />
                      )}
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Kundali Section */}
      <div className="flex-1 overflow-hidden min-h-0">
        <KundaliChart isDarkMode={isDarkMode} />
      </div>

      {/* Read Kundali Analysis Button */}
      <div className="flex-shrink-0 px-4 pb-3">
        <button className={`w-full rounded-lg p-3 border transition-colors ${
          isDarkMode 
            ? 'bg-[#3D3B39] border-[#4A4745] active:bg-[#4A4745]' 
            : 'bg-[#FFFFFF] border-[#B1ADA1]/30 active:bg-[#F4F3EE]'
        }`}>
          <div className="flex flex-col items-center gap-1.5">
            <p className={`text-sm ${isDarkMode ? 'text-[#EEEBE6]' : 'text-[#000000]'}`}>Read Kundali Analysis</p>
            <ChevronDown className={`w-4 h-4 ${isDarkMode ? 'text-[#9B9792]' : 'text-[#B1ADA1]'}`} />
          </div>
        </button>
      </div>

      {/* Chat Section */}
      <div className="flex-shrink-0">
        <ChatInterface isDarkMode={isDarkMode} />
      </div>
    </div>
  );
}
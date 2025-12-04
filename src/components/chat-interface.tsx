import { useState } from 'react';
import { Send, Sparkles, ChevronUp, ChevronDown } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'astrologer';
  timestamp: Date;
}

const suggestions = [
  'Career',
  'Relationships',
  'Marriage',
  'Job',
  'Life Purpose',
  'Health',
  'Finance',
  'Education'
];

interface ChatInterfaceProps {
  isDarkMode: boolean;
}

export function ChatInterface({ isDarkMode }: ChatInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: 'Hello! I\'m here to help you understand your kundali. Feel free to ask me anything about your birth chart.',
      sender: 'astrologer',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSend = () => {
    if (inputValue.trim()) {
      const userMessage: Message = {
        id: messages.length + 1,
        text: inputValue,
        sender: 'user',
        timestamp: new Date(),
      };

      const astrologerMessage: Message = {
        id: messages.length + 2,
        text: 'Thank you for your question. Based on your chart, I can provide insights on your planetary positions and their influences.',
        sender: 'astrologer',
        timestamp: new Date(),
      };

      setMessages([...messages, userMessage, astrologerMessage]);
      setInputValue('');
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(`Tell me about my ${suggestion.toLowerCase()}`);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // Show only the welcome message or all messages based on expansion state
  const displayMessages = isExpanded ? messages : [messages[0]];
  
  // Only show arrow button if there's chat history (more than just welcome message)
  const hasHistory = messages.length > 1;

  return (
    <div className={`border-t flex flex-col ${isExpanded ? 'h-[50vh]' : ''} ${
      isDarkMode ? 'border-[#4A4745] bg-[#2D2B2A]' : 'border-[#B1ADA1]/30 bg-[#F4F3EE]'
    }`}>
      {/* Messages with expand/collapse button */}
      <div className="relative">
        <div className={`overflow-y-auto p-3 space-y-2 ${isExpanded ? 'h-[calc(50vh-180px)]' : ''}`}>
          {displayMessages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] rounded-2xl px-3 py-2 ${
                  message.sender === 'user'
                    ? isDarkMode 
                      ? 'bg-[#D4714C] text-[#EEEBE6]'
                      : 'bg-[#C15F3C] text-[#FFFFFF]'
                    : isDarkMode
                      ? 'bg-[#3D3B39] text-[#EEEBE6]'
                      : 'bg-[#FFFFFF] text-[#000000]'
                }`}
              >
                {message.sender === 'astrologer' && (
                  <div className="flex items-center gap-1 mb-1">
                    <Sparkles className={`w-3 h-3 ${isDarkMode ? 'text-[#D4714C]' : 'text-[#C15F3C]'}`} />
                    <span className={`text-xs ${isDarkMode ? 'text-[#9B9792]' : 'text-[#B1ADA1]'}`}>Astrologer</span>
                  </div>
                )}
                <p className="text-sm">{message.text}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Expand/Collapse Arrow Button - Only show if there's history */}
        {hasHistory && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={`absolute top-3 right-3 p-1.5 border rounded-full transition-colors ${
              isDarkMode 
                ? 'bg-[#3D3B39] border-[#4A4745] active:bg-[#4A4745]'
                : 'bg-[#FFFFFF] border-[#B1ADA1]/30 active:bg-[#F4F3EE]'
            }`}
            aria-label={isExpanded ? "Collapse chat" : "Expand chat history"}
          >
            {isExpanded ? (
              <ChevronDown className={`w-4 h-4 ${isDarkMode ? 'text-[#EEEBE6]' : 'text-[#000000]'}`} />
            ) : (
              <ChevronUp className={`w-4 h-4 ${isDarkMode ? 'text-[#EEEBE6]' : 'text-[#000000]'}`} />
            )}
          </button>
        )}
      </div>

      {/* Suggestions */}
      <div className={`border-t px-3 py-2 flex-shrink-0 ${
        isDarkMode ? 'border-[#4A4745]' : 'border-[#B1ADA1]/30'
      }`}>
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
          {suggestions.map((suggestion) => (
            <button
              key={suggestion}
              onClick={() => handleSuggestionClick(suggestion)}
              className={`px-3 py-1.5 border rounded-full text-xs whitespace-nowrap transition-colors ${
                isDarkMode
                  ? 'bg-[#3D3B39] border-[#4A4745] text-[#EEEBE6] active:bg-[#4A4745]'
                  : 'bg-[#FFFFFF] border-[#B1ADA1]/30 text-[#000000] active:bg-[#F4F3EE]'
              }`}
            >
              {suggestion}
            </button>
          ))}
        </div>
      </div>

      {/* Input */}
      <div className={`p-3 border-t flex-shrink-0 ${
        isDarkMode ? 'border-[#4A4745]' : 'border-[#B1ADA1]/30'
      }`}>
        <div className="flex gap-2 items-end">
          <div className={`flex-1 rounded-full px-4 py-2 border ${
            isDarkMode 
              ? 'bg-[#3D3B39] border-[#4A4745]'
              : 'bg-[#FFFFFF] border-[#B1ADA1]/30'
          }`}>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask about your kundali..."
              className={`w-full bg-transparent outline-none text-sm ${
                isDarkMode 
                  ? 'text-[#EEEBE6] placeholder:text-[#9B9792]'
                  : 'text-[#000000] placeholder:text-[#B1ADA1]'
              }`}
            />
          </div>
          <button
            onClick={handleSend}
            className={`p-3 rounded-full transition-colors ${
              isDarkMode
                ? 'bg-[#D4714C] active:bg-[#C15F3C]'
                : 'bg-[#C15F3C] active:bg-[#D4714C]'
            }`}
            aria-label="Send message"
          >
            <Send className={`w-4 h-4 ${isDarkMode ? 'text-[#EEEBE6]' : 'text-[#FFFFFF]'}`} />
          </button>
        </div>
      </div>
    </div>
  );
}
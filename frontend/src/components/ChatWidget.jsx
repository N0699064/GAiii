import React from 'react';
import { MessageCircle } from 'lucide-react';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-[#f7d046] to-[#d4af37] hover:from-[#f2c14e] hover:to-[#c89a1c] rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 z-50"
      >
        <MessageCircle className="w-6 h-6 text-white" />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50">
          <div className="bg-gradient-to-r from-[#f7d046] to-[#d4af37] text-gray-900 p-4">
            <h3 className="font-bold">GoldrushAi</h3>
            <p className="text-[#9c7b16] text-sm">We typically reply within minutes</p>
          </div>
          <div className="p-4 h-64 bg-gray-50">
            <div className="bg-white rounded-lg p-3 shadow-sm max-w-[80%]">
              <p className="text-sm text-gray-700">Hi there! How can we help you today?</p>
            </div>
          </div>
          <div className="p-4 border-t border-gray-100">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Type a message..."
                className="flex-1 border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
              />
              <button className="bg-gradient-to-r from-[#f7d046] to-[#d4af37] hover:from-[#f2c14e] hover:to-[#c89a1c] text-gray-900 px-4 py-2 rounded-lg transition-colors">
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;

import { useState } from 'react';

const ChatBot: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div 
      className="fixed right-5 bottom-5"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      onTouchStart={() => setIsVisible(true)}
    >
      <div className="w-15 h-15 bg-blue-500 rounded-full cursor-pointer flex items-center justify-center">
        <span className="text-white text-2xl">💬</span>
      </div>
      <div 
        className={`absolute right-0 bottom-20 w-80 h-96 bg-white border border-gray-200 rounded-lg shadow-lg p-4 transition-transform duration-300 ease-in-out ${
          isVisible ? 'translate-x-5' : 'translate-x-full'
        }`}
      >
        <h2 className="text-xl font-bold mb-4">Chatbot</h2>
        {/* Add chat interface elements here */}
      </div>
    </div>
  );
};

export default ChatBot;
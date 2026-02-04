import { useState } from 'react';
import './App.css';

import Logo from './assets/Icon.svg';
import InfoIcon from './assets/Info.svg';
import JoyIcon from './assets/Joy.svg';
import HappyIcon from './assets/Happy.svg';
import NeutralIcon from './assets/Neutral.svg';
import SadIcon from './assets/Sad.svg';
import AngryIcon from './assets/Angry.svg';

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 border-b border-gray-700">
        <div className="flex items-center space-x-3">
          <img src={Logo} alt="Chatty Logo" className="w-8 h-8" />
          <span className="text-xl font-bold">Chatty</span>
        </div>
        
        <button className="p-2 rounded-full hover:bg-gray-700 transition-colors">
          <img src={InfoIcon} alt="Info" className="w-6 h-6" />
        </button>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Centered Title */}
        <div className="text-center mb-12">
          <h1 className="text-6xl md:text-7xl font-bold mb-4">
            Chatty<span className="text-red-500">.</span>
          </h1>
        </div>

        {/* Chat Input Area */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-gray-700">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="How are you feeling today?"
            className="w-full bg-transparent text-white placeholder-gray-500 focus:outline-none resize-none h-32"
          />
          
          <div className="flex justify-between items-center mt-4">
            <div className="flex space-x-2">
              {/* Character count or other info can go here */}
              <span className="text-gray-500 text-sm">
                {message.length}/500
              </span>
            </div>
            
            <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full font-medium transition-colors">
              Send
            </button>
          </div>
        </div>

        {/* Emotion Buttons */}
        <div className="text-center">
          <h2 className="text-gray-400 mb-6">How are you feeling?</h2>
          
          <div className="flex justify-center flex-wrap gap-4">
            {[
              { icon: JoyIcon, label: 'Joy', color: 'bg-yellow-500 hover:bg-yellow-600' },
              { icon: HappyIcon, label: 'Happy', color: 'bg-green-500 hover:bg-green-600' },
              { icon: NeutralIcon, label: 'Neutral', color: 'bg-blue-500 hover:bg-blue-600' },
              { icon: SadIcon, label: 'Sad', color: 'bg-indigo-500 hover:bg-indigo-600' },
              { icon: AngryIcon, label: 'Angry', color: 'bg-red-500 hover:bg-red-600' },
            ].map((emotion) => (
              <button
                key={emotion.label}
                className={`${emotion.color} rounded-full p-4 w-16 h-16 flex flex-col items-center justify-center transition-all transform hover:scale-105`}
              >
                <img src={emotion.icon} alt={emotion.label} className="w-8 h-8" />
                <span className="text-xs mt-1">{emotion.label}</span>
              </button>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
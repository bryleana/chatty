import { useState, useRef, useEffect } from 'react';
import './App.css';

import Logo from './assets/Icon.svg';
import InfoIcon from './assets/Info.svg';
import SendIcon from './assets/Send.svg';
import JoyIcon from './assets/Joy.svg';
import HappyIcon from './assets/Happy.svg';
import NeutralIcon from './assets/Neutral.svg';
import SadIcon from './assets/Sad.svg';
import AngryIcon from './assets/Angry.svg';

function App() {
  const [message, setMessage] = useState('');
  const [selectedEmotion, setSelectedEmotion] = useState(null);
  const textareaRef = useRef(null);

  const emotions = [
    { key: 'joy', icon: JoyIcon, label: 'Joy', color: 'from-gray-300 to-green-900' },
    { key: 'happy', icon: HappyIcon, label: 'Happy', color: 'from-gray-300 to-yellow-900' },
    { key: 'neutral', icon: NeutralIcon, label: 'Neutral', color: 'from-gray-300 to-gray-500' },
    { key: 'sad', icon: SadIcon, label: 'Sad', color: 'from-gray-300 to-blue-900' },
    { key: 'angry', icon: AngryIcon, label: 'Angry', color: 'from-gray-300 to-red-900' },
  ];

  const getGradientClasses = () => {
    if (!selectedEmotion) return 'from-gray-900 to-gray-800';
    const emotion = emotions.find(e => e.key === selectedEmotion);
    return `from-gray-900 ${emotion.color}`;
  };

  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    textarea.style.height = 'auto';
    const maxHeight = 150;
    const newHeight = Math.min(textarea.scrollHeight, maxHeight);
    textarea.style.height = `${newHeight}px`;
  };

  useEffect(() => {
    adjustTextareaHeight();
  }, [message]);
  const handleTextareaChange = (e) => {
    setMessage(e.target.value);
  };
  const handleEmotionSelect = (emotionKey) => {
    setSelectedEmotion(selectedEmotion === emotionKey ? null : emotionKey);
  };

  return (
    <div className={`min-h-screen bg-gradient-to-b ${getGradientClasses()} text-white transition-all duration-500 select-none`}>
      <header className="flex justify-between items-center px-4 sm:px-6 py-4">
        <div className="flex items-center space-x-2 sm:space-x-3">
          <img src={Logo} alt="Chatty Logo" className="w-6 h-6 sm:w-8 sm:h-8" />
          <span className="text-lg sm:text-xl font-bold">
            chatty<span className="text-red-400">.</span>
          </span>
        </div>
        
        <button 
          className="p-1 sm:p-2 rounded-full hover:bg-gray-700 transition-colors group relative select-none"
          title="Information"
        >
          <img src={InfoIcon} alt="Info" className="w-5 h-5 sm:w-6 sm:h-6" />
          <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs bg-gray-900 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none select-none hidden sm:block">
            Information
          </span>
        </button>
      </header>

      <main className="container mx-auto px-3 sm:px-4 py-8 sm:py-12 max-w-4xl select-none">
        <div className="text-center mb-4 sm:mb-5">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mt-10 sm:mt-25">
            chatty<span className="text-red-400">.</span>
          </h1>
        </div>

        {/* EMOTION BUTTONS */}
        <div className="text-center px-2">
          <h2 className="text-gray-400 text-sm sm:text-base mb-2 sm:mb-3">
            Select an emotion of Chatty's reply
          </h2>
          
          <div className="flex justify-center flex-wrap gap-3 sm:gap-4">
            {emotions.map((emotion) => (
              <div key={emotion.key} className="relative group">
                <button
                  onClick={() => handleEmotionSelect(emotion.key)}
                  className={`
                    rounded-full w-8 h-8 sm:w-10 sm:h-10 mb-8 sm:mb-10 flex flex-col items-center justify-center 
                    transition-all transform hover:scale-110 select-none
                    ${selectedEmotion === emotion.key 
                      ? 'ring-0 ring-gray-600 ring-offset-transparent scale-125 sm:scale-140' 
                      : 'bg-gray-700 hover:bg-gray-600'
                    }
                  `}
                >
                  <img 
                    src={emotion.icon} 
                    alt={emotion.label} 
                    className={`w-5 h-5 sm:w-7 sm:h-7 ${selectedEmotion === emotion.key ? 'opacity-100' : 'opacity-80'}`}
                  />
                </button>
                <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs bg-gray-900 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none select-none hidden sm:block">
                  {emotion.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* TEXT FIELD */}
        <div className="bg-gray-800 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 mb-6 sm:mb-8 border-none mx-2 sm:mx-0">
          <div className="flex items-start gap-3 sm:gap-4">
            <textarea
              ref={textareaRef}
              value={message}
              onChange={handleTextareaChange}
              placeholder="Ask chatty.."
              className="flex-1 bg-transparent text-white placeholder-gray-500 focus:outline-none resize-none min-h-[40px] sm:min-h-[48px] max-h-[150px] py-2 sm:py-3 px-2 sm:px-3 text-sm sm:text-base overflow-y-auto select-auto"
              style={{ height: '40px' }} 
              rows="1"
            />
            
            <button 
              className="text-white pt-2 sm:pt-3 pr-2 sm:pr-3 rounded-full font-medium transition-colors flex-shrink-0 group relative cursor-pointer hover:text-gray-300 select-none"
              title="Send message"
            >
              <img src={SendIcon} alt="Send" className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs bg-gray-900 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none select-none hidden sm:block">
                Send message
              </span>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
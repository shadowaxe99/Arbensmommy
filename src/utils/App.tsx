import React, { useState } from 'react';
import Terminal from '../components/Terminal/Terminal';
import Chat from '../components/Chat/Chat';
import { sendMessageToOpenAI } from './OpenAIAPI';

const App: React.FC = () => {
  const [terminalInput, setTerminalInput] = useState('');
  const [chatMessages, setChatMessages] = useState<string[]>([]);

  const handleTerminalInput = async (input: string) => {
    setTerminalInput(input);
    const response = await sendMessageToOpenAI(input);
    setChatMessages([...chatMessages, response]);
  };

  return (
    <div>
      <Terminal onInput={handleTerminalInput} />
      <Chat messages={chatMessages} />
    </div>
  );
};

export default App;
import React, { useState, useEffect } from 'react';
import OpenAIAPI from '../../utils/OpenAIAPI';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    // Fetch initial chat messages
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    // Fetch initial messages from server
    const initialMessages = await OpenAIAPI.getInitialMessages();
    setMessages(initialMessages);
  };

  const sendMessage = async () => {
    // Send user input to server and get response
    const response = await OpenAIAPI.sendMessage(input);

    // Update messages state with new response
    setMessages([...messages, { text: input, sender: 'user' }, { text: response, sender: 'bot' }]);

    // Clear input field
    setInput('');
  };

  return (
    <div className="chat-container">
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            {message.text}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
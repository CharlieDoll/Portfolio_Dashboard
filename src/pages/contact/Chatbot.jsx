import axios from 'axios';
import React, { useState } from 'react';

function Chatbot() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSend = async () => {
    const response = await axios.post('http://localhost:5000/chat', { message: input });
    setMessages([...messages, { user: 'User', text: input }, { user: 'Bot', text: response.data }]);
    setInput('');
  };

  return (
    <div className="chatbot">
      {messages.map((msg, index) => (
        <div key={index} className={`message ${msg.user}`}>
          <strong>{msg.user}:</strong> {msg.text}
        </div>
      ))}
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask me anything..."
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
}

export default Chatbot;

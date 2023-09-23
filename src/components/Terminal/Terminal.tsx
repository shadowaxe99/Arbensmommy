import React, { useState, useEffect, useRef } from 'react';

const Terminal = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleInputSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Process the input and generate output using OpenAI GPT API
    // Set the output state with the generated response
    setOutput(`You entered: ${input}`);
    setInput('');
  };

  return (
    <div>
      <form onSubmit={handleInputSubmit}>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          ref={inputRef}
        />
        <button type="submit">Submit</button>
      </form>
      <div>{output}</div>
    </div>
  );
};

export default Terminal;
import { useState, useRef, useEffect } from 'react';
import { calculateSum } from './Component/stringCalculator';

const App = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState('');

  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const resultRef = useRef<HTMLParagraphElement | HTMLDivElement>(null);
  

const handleCalculate = () => {
  if (!input.trim()) {
    setError('Please enter some numbers.');
    setResult(null);
    resultRef.current?.focus();  
    setInput('');
    return;
  }

  const sum = calculateSum(input);

  if (sum === null) {
    setError('Please enter valid numbers.');
    setResult(null);
    resultRef.current?.focus(); 
    setInput(''); 
    return;
  }

  setError('');
  setResult(sum);
  setInput(''); 
  resultRef.current?.focus(); };


  useEffect(() => {
    if (result !== null) {
      resultRef.current?.focus();
    }
  }, [result]);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleCalculate();
    }
  };

  const handleSkipToMain = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    textareaRef.current?.focus();
  };

  return (
    <div className="container">
      <a href="#mainContent" className="skip-link" onClick={handleSkipToMain}>
        Skip to main content
      </a>

      <header role="banner">
        <img
          src="https://images.unsplash.com/photo-1594352161389-11756265d1b5?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={600}
          height={400}
          alt="Decorative abstract colors"
        />
        <h1>String Calculator</h1>
      </header>

      <main id="mainContent" role="main">
        <label htmlFor="numbersInput">
          Enter numbers (comma or space separated):
        </label>

        <textarea
          id="numbersInput"
          ref={textareaRef}
          placeholder="Enter numbers (comma or space separated)"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          aria-label="Enter numbers for calculation"
          aria-invalid={error ? 'true' : 'false'}
          onKeyDown={handleKeyPress}
        />

        <button onClick={handleCalculate}>Calculate</button>

        {result !== null && (
          <p
            className="result"
            aria-live="polite"
            tabIndex={-1}
            ref={resultRef}
          >
            Result: {result}
          </p>
        )}

        {error && (
          <div role="alert" className="error" tabIndex={0}>
            {error}
          </div>
        )}

        <div role="status" aria-live="polite">
          <p>Make sure you enter numbers correctly!</p>
        </div>
      </main>
    </div>
  );
};

export default App;

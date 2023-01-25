import './App.css';
import { useState } from 'react';
import Button from './components/button';

const App = () => {
  const [input, setInput] = useState('');

  const [words, setWords] = useState([]);

  const handleButtons = (e) => {
    e.preventDefault();
    const newWords = input.split(' ');
    setWords(newWords);
    setInput('');
  };

  return (
    <>
      <div className="App">
        <form onSubmit={handleButtons}>
        <p>Hello world</p>
        Testo: <input value={input} onChange={e => setInput(e.target.value)} />
        <p className="AppParagraph">Sono un paragrafo dinamico, scrivi qualcosa per vederlo qui sotto: <br/><b>{input}</b></p>
        <Button words={handleButtons} />
        </form>
      </div>
      <div>
        {words.map((word) => (
          <button key={word}>{word}</button>
        ))}
      </div>
    </>
    
  );
}

export default App;

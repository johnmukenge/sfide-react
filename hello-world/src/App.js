import './App.css';
import { useState } from 'react';

function App() {
  const [input, setInput] = useState('');
  return (
    <div className="App">
      <p>Hello world</p>
      Testo: <input value={input} onChange={e => setInput(e.target.value)} />
      <p className="AppParagraph">Sono un paragrafo dinamico, scrivi qualcosa per vederlo qui sotto: <br/><b>{input}</b></p>
    </div>
  );
}

export default App;

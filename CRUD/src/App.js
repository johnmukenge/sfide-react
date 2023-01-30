import './App.css';
import { useState } from 'react';
import Button from './components/button';
import Item from './components/item';
const App = () => {
  const [currentText, setCurrentText] = useState('');

  const [list, setList] = useState([]);

  const addText = () => {
    setList(prevState => [...prevState, { Text: currentText, State: 0 }]);
    setCurrentText('');
  };
  const searchText = () => {
    list.forEach(el => {
      el.State = el.Text.indexOf(currentText) >= 0 ? 1 : 0;
    });
    setList(prevState => [...prevState]);
  };
  const deleteItem = (item) => {
    console.log(item);
    setList(list.filter(l => l.Text !== item));
  };
  return (
    <>
      <div className="App">
        <input type="text" value={currentText} onChange={(e) => setCurrentText(e.target.value)} />
        <Button caption="Add" action={addText} />
        <Button caption="Search" action={searchText} />
        <ul>
          {list.map(el => (<Item key={el.Text} state={el.State} value={el.Text} deleteAction={deleteItem} />))}
        </ul>
      </div>
    </>
  );
}

export default App;

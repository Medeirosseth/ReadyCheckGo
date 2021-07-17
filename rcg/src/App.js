import './App.css';
import React, {useState} from "react";
import Form from './components/Form';
import CheckList from './components/CheckList';


function App() {
  const [inputText, setInputText] = useState('');
  const [items, setItems] = useState([]);
  return (
    <div className="App">
      <header>Testing, Testing, is this thing on?</header>
      <Form 
        setInputText={setInputText}
        setItems={setItems}
        items={items}
        inputText={inputText}
      />
      <CheckList
        items={items} 
      />
    </div>
  );
}


export default App;

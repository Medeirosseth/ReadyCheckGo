import './App.css';
import React, {useState} from "react";
import Form from './components/Form';
import CheckList from './components/CheckList';


function App() {
  const [inputText, setInputText] = useState('');
  const [items, setItems] = useState([]);
  const [status, setStatus] = useState('all')
  return (
    <div className="App">
      <header>Testing, Testing, is this thing on?</header>
      <Form 
        setInputText={setInputText}
        setItems={setItems}
        items={items}
        inputText={inputText}
        setStatus={setStatus}
      />
      <CheckList
        items={items} 
        setItems={setItems}
      />
    </div>
  );
}


export default App;

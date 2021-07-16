import './App.css';
import React, {useState} from "react";
import Form from './components/Form';

function App() {
  const [inputText, setInputText] = useState("");
  return (
    <div className="App">
      <header>Testing, Testing, is this thing on?</header>
      <Form 
        setInputText={setInputText}
      
      />
    </div>
  );
}

export default App;

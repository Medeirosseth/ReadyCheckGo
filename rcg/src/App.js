import './App.css';
import React, {useState} from "react";
import Form from './components/Form';

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setToDos] = useState([]);
  return (
    <div className="App">
      <header>Testing, Testing, is this thing on?</header>
      <Form 
        setInputText={setInputText}
        setToDos={setToDos}
        todos={todos}
        inputText={inputText}
      />
    </div>
  );
}

export default App;

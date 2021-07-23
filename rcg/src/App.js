import './App.css';
import React, {useState, useEffect, useRef } from "react";
//import { useSpring, animated } from 'react-spring'
import Form from './components/Form';
import CheckList from './components/CheckList';



function App() {
  // const textOneRef = useRef();
  // const textOneStyle = useSpring({
  //   from: {
  //     opacity:0
  //   },
  //   to:{
  //     opacity: 1
  //   }
  // })

  const [inputText, setInputText] = useState('');
  const [items, setItems] = useState([]);
  const [status, setStatus] = useState('all')
  const [filteredItems, setFilteredItems] = useState([])

  useEffect(() => {
    filterHandler()
  }, [items, status] )



  const filterHandler = () => {
    switch(status){
      case "completed":
        setFilteredItems(items.filter((item) => item.completed === true ))
        break;
      case "uncompleted":
        setFilteredItems(items.filter((item) => item.completed === false))
        break;
      default:
        setFilteredItems(items);
        break;
    }
  }



  return (
    <div className="App">
      <header>Testing, Testing, is this thing on?</header>
      <animated.h1 style={textOneStyle}> Ready </animated.h1>
      <h1>Check</h1>
      <h1>Go</h1>
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
        filteredItems={filteredItems}
      />
    </div>
  );
}


export default App;

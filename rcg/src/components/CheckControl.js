import React, {useState, useEffect, useRef } from "react";
//import { useSpring, animated } from 'react-spring'
import Form from "./Form"
import CheckList from "./CheckList";


const CheckControl = ()=> {
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


export default CheckControl;
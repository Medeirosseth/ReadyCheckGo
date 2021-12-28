import React, {useState, useEffect } from "react";
import Form from "./Form/Form"
import CheckList from "./CheckList/CheckList";


const CheckControl = ()=> {
  const [inputText, setInputText] = useState('');
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem('CheckControl--items') || '[]')
  );
  const [status, setStatus] = useState('all')
  const [filteredItems, setFilteredItems] = useState(
    JSON.parse(localStorage.getItem('CheckControl--filteredItems') || '[]')
  )

  useEffect(() => {
    localStorage.setItem('CheckControl--items', JSON.stringify(items))
    localStorage.setItem('CheckControl--filteredItems', JSON.stringify(filteredItems))
  }, [items, filteredItems])

  useEffect(() => {
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
    
    filterHandler()
  }, [items, status] )

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
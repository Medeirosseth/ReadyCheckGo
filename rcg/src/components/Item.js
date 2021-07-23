import React from "react";


const Item = ({text, setItems, items, item}) => {

  const deleteHandler = () => {
    setItems(items.filter(el => el.id !== item.id))
    console.log(item)
  }

  const completeHandler = () => {
    setItems(items.map((element) => {
      if(element.id === item.id){
        return {
          ...element, completed: !element.completed
        }
      }
      return element;
    }))
  }

  return (
    <div className="item">
      <li className={`checklist-item ${item.completed ? "completed" : ""}`}>{text}</li>
      <button onClick={completeHandler} className="complete-btn" > 
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  )
}

export default Item;
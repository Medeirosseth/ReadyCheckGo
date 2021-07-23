import React from "react";


const Item = ({text, setItems, items, item}) => {

  const deleteHandler = () => {
    setItems(items.filter(el => el.id !== item.id))
    console.log(item)
  }

  const completeHandler = () => {
    setItems(items.map((e) => {
      if(e.id === item.id){
        return {
          ...e, completed: !e.completed
        }
      }
      return e;
    }))
  }

  return(
    <div className="todo">
      <li className={`todo-item ${item.completed ? "completed" : ""}`}>{text}</li>
      <button onClick={completeHandler} className="complete-btn" > 
        <i className="fas fa-check">COMPLETED</i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash">DELETE</i>
      </button>
    </div>
  )
}

export default Item;
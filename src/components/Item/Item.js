import React from "react";
import './item.css'

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
    <div className="item">
      <div className="itemContainer">
        <li className={`checklist-item ${item.completed ? "completed" : ""}`}>{text}</li>
        <div className="completeDeleteContainer ">
          <button onClick={completeHandler} className="complete-btn" > <i className=" fas fa-check"></i></button>
          <button onClick={deleteHandler} className="trash-btn"><i className="fas fa-trash"></i></button>
        </div>
      </div>
    </div>
  )
}

export default Item;
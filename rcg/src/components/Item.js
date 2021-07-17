import React from "react";


const Item = ({text, setItems, items, item}) => {

  const deleteHandler = () => {
    setItems(items.filter(e => e.id !== item.id))
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

  return (
    <div className="item">
      <li className="todo-item">{text}</li>
      <button>
        <i onClick={completeHandler} className="fas fa-check">CHECK</i>
      </button>
      <button>
        <i onClick={deleteHandler} className="fas fa-trash">Trash</i>
      </button>
    </div>

  );
}

export default Item;
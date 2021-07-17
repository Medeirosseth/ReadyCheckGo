import React from "react";


const Item = ({text, setItems, items, item}) => {

  const deleteHandler = () => {
    setItems(items.filter(e => e.id !== item.id))
    console.log(item)
  }

  return (
    <div className="item">
      <li className="todo-item">{text}</li>
      <button>
        <i className="fas fa-check">CHECK</i>
      </button>
      <button>
        <i onClick={deleteHandler} className="fas fa-trash">Trash</i>
      </button>
    </div>

  );
}

export default Item;
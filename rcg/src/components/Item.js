import React from "react";


const Item = ({text}) => {
  return (
    <div className="item">
      <li className="todo-item">{text}</li>
      <button>
        <i className="fas fa-check">CHECK</i>
      </button>
      <button>
        <i className="fas fa-trash">Trash</i>
      </button>
    </div>

  );
}

export default Item;
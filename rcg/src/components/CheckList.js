import React from "react"
import Item from "./Item"

const CheckList = ({items, setItems, text}) => {
return(
  <div className="checklist-container">
    <ul className="checklist-list">
      {items.map(item => (
        <Item 
          key={item.id}
          text={item.text}
          setItems={setItems}
          items={items}
         />
      ))}
    </ul>
  </div>

)

}


export default CheckList;
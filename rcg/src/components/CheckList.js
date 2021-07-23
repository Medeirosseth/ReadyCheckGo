import React from "react"
import Item from "./Item"

const CheckList = ({items, setItems, text, item}) => {
return(
  <div className="checklist-container">
    <ul className="checklist-list">
      {items.map(item => (
        <Item 
          key={item.id}
          text={item.text}
          setItems={setItems}
          items={items}
          item={item}
         />
      ))}
    </ul>
  </div>

)

}


export default CheckList;
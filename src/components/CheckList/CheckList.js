import React from "react"
import Item from "../Item/Item"

const CheckList = ({items, setItems, filteredItems}) => {
return(
  <div className="checklist-container mb-0">
    <ul className="checklist-list">
      {filteredItems.map(item => (
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
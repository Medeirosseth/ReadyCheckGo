import React from "react"
import Item from "./Item"

const CheckList = ({items, setItems}) => {
return(
  <div>
    <ul>
      {items.map(item => (
        <Item 
          text={item.text}
         />
      ))}
    </ul>
  </div>

)

}


export default CheckList;
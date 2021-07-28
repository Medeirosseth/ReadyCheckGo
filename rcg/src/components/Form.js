import React from "react";
import { v4 } from "uuid";
import { useFireStore} from 'react-redux-firebase'

const Form = ({setInputText, setItems, items, inputText, setStatus}) => {

  const inputTextHandler = (e) => {

    setInputText(e.target.value)
  }

  const inputSubmitHandler = (e) => {
    e.preventDefault();
    setItems([
      ...items,{
        text: inputText,
        completed: false,
        id: v4()
      }
    ])
    setInputText("")
  }

  const statusHandler = (e) => {
    setStatus(e.target.value)
  }
  return(
    <form>
      <input value={inputText} onChange={inputTextHandler} type="text"></input>.
      <button onClick={inputSubmitHandler} type="submit">submit</button>
      <select onChange={statusHandler}>
        <option value="all">ALL</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </select>
    </form>
  )
}

export default Form;
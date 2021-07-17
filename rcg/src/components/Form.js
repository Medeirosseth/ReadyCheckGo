import React from "react"

const Form = ({setInputText, setItems, items, inputText}) => {

  const inputTextHandler = (e) => {
    console.log(e.target.value)
    setInputText(e.target.value)
  }

  const inputSubmitHandler = (e) => {
    e.preventDefault();
    setItems([
      ...items,{
        text: inputText,
        completed: false,
        id: Math.random() * 10
      }
    ])
  }
  return(
    <form>
      <input value={inputText} onChange={inputTextHandler} type="text"></input>
      <button onClick={inputSubmitHandler} type="submit">submit</button>
    </form>
  )
}


export default Form;
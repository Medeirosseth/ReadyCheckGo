import React from "react"

const Form = ({setInputText, setItems, Items, inputText}) => {

  const inputTextHandler = (e) => {
    console.log(e.target.value)
    setInputText(e.target.value)
  }

  const inputSubmitHandler = (e) => {
    e.preventDefault()
    setToDos([
      ...Items,{
        text: inputText,
        completed: false,
        id: Math.random()
      }
      ])
    setInputText('')


  }
  return(
    <form>
      <input onChange={inputTextHandler} type="text"></input>
      <button onClick={inputSubmitHandler} type="submit">submit</button>
    </form>
  )
}


export default Form;
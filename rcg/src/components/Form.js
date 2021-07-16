import React from "react"

const Form = ({setInputText, setToDos, todos, inputText}) => {

  const inputTextHandler = (e) => {
    console.log(e.target.value)
    setInputText(e.target.value)
  }

  const inputSubmitHandler = (e) => {
    e.preventDefault()
    setToDos([
      ...todos,{
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
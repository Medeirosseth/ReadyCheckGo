import React from "react"

const Form = ({setInputText}) => {

  const inputTextHandler = (e) => {
    console.log(e.target.value)

  }
  return(
    <form>
      <input onChange={inputTextHandler} type="text"></input>
      <button type="submit">submit</button>
    </form>
  )
}


export default Form;
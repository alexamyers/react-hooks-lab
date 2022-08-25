import React, { useState } from 'react'

const AddTodo = (props) => {
    console.log(props)

    const [userInput, setUserInput] = useState('')

    const handleChange = (e) => {
        setUserInput(e.target.value)
    }

    const handleAddTodo = (e) => {
        e.preventDefault()
        props.AddTodo(userInput)
        setUserInput('')
    }

    return(
        <div>
        <form onSubmit={ handleAddTodo }>
            <input type='text' placeholder='Add a todo!' onChange={ handleChange }></input>
            <button>Submit</button>
        </form>
        </div>
    )
}

export default AddTodo


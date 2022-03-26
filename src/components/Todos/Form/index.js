import { useState, useEffect } from 'react'

function Form( {todos, setTodos} ) {

  // Default (Constructor) input state = {task: "Learning React", isCompleted: false}
  const [input, setInput] = useState({task: "", isCompleted: false});

  // Clear input
  useEffect(() => {
    setInput({task: "", isCompleted: false})
  }, [todos])

  // Change Input Value - New input object from Constructor
  const onChangeInput = (e) => {
    setInput({...input, task: e.target.value, isCompleted: false})
  }

  // Submit Form
  const onSubmit = (e) => {
    e.preventDefault();

    if (input.task === '') {
      return false;
    }

    console.log(input)
    setTodos([...todos, input]);
  }

  return (
    <header className='header'>
      <h1>todos</h1>
      <form onSubmit={onSubmit}>
        <input 
          className='new-todo'
          placeholder='What needs to be done?'
          name='task'
          value={input.task} 
          onChange={onChangeInput}
          autoFocus 
        />
      </form>
    </header>
  )
}

export default Form
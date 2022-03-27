import { useState, useEffect } from 'react'

import Form from './Form'
import List from './List'


function Todos() {

  const [todos, setTodos] = useState([]);

  // Data from local storage -> add todos array
  useEffect(() => {
    const localStr = JSON.parse(localStorage.getItem("tasks"));

    if (localStr) {
      setTodos(localStr);
    }
  }, [])

  // Add todos array to local storage -> when todos mounted
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(todos))
  }, [todos]);

  // Filters - for - All, Active, Complete
  const [activeTodos, setActiveTodos] = useState("All");

  let filteredTodos =
    activeTodos === "All" ? todos
    : activeTodos === "Active" ? todos.filter(item => item.isCompleted === false)
    : todos.filter(item => item.isCompleted === true);

  return (
    <section className='todoapp'>
      <Form 
        todos={todos} 
        setTodos={setTodos} 
      />

      <List 
        todos={todos} 
        removeTodo={setTodos} 
        updateTodo={setTodos}
        clearAllTodo={setTodos}
        activeTodos={activeTodos}
        setActiveTodos={setActiveTodos}
        filteredTodos={filteredTodos}
      />
    </section>
  )
}

export default Todos
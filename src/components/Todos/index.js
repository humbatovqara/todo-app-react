import { useState, useEffect } from 'react'

import Form from './Form'
import List from './List'
import Footer from './Footer'


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

  return (
    <section className='todoapp'>
      <Form todos={todos} setTodos={setTodos} />
      <List todos={todos} removeTodo={setTodos} />
      <Footer />
    </section>
  )
}

export default Todos
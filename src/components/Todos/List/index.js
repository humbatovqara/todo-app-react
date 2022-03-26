// import {useState, useEffect} from 'react'

function List( {todos, removeTodo} ) {

  // Delete
  const removeItem = (task) => removeTodo(todos.filter((item) => item.task !== task));

  return (
    <>
      <section className='main'>
        <input className='toggle-all' type="checkbox" />
        <label htmlFor='toggle-all'>
          Mark all as complete
        </label>

        <ul className='todo-list'>
          {
            todos.map((todo, index) => 
              <li key={index}>
                <div className="view">
                  <input className='toggle' type="checkbox" />
                  <label>{todo.task}</label>
                  <button onClick={() => removeItem(todo.task)} className='destroy'></button>
                </div>
              </li>
            )
          }
        </ul>
      </section>
    </>
  )
}

export default List
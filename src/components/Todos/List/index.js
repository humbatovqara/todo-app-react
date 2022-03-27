import React from 'react'

function List( {todos, removeTodo, updateTodo, clearAllTodo, activeTodos, setActiveTodos, filteredTodos} ) {

  // Delete Item from storage
  const removeItem = (task) => removeTodo(todos.filter((item) => item.task !== task));

  // Clear all tasks - from storage
  const clearAllTasks = () => {
    clearAllTodo([]);
  }

  // Checked All Completed
  const allTodoCompleted = () => {
    if(todos.every((item) => item.isCompleted)){
      updateTodo(todos.map((item) => {
        return {...item, isCompleted: false}
      }));
    } 
    else {
      updateTodo(todos.map((item) => {
        if( item.isCompleted !== true){
          return {...item, isCompleted: true}
        }
        return {...item}
      }));
    }
  }

  // Checked task in todo
  const checkboxChange = (i) => {
    updateTodo(todos.map((item, index) => {
      if (i === index) {
        item.isCompleted = !item.isCompleted
      }
      return item
    }));
  }

  return (
    <>
      <section className='main'>
        <input type="checkbox" id='toggle-all' className='toggle-all' onChange={() => allTodoCompleted()}  />
        <label htmlFor='toggle-all' className={todos.length === 0 ? "hidden" : "show"}>
          Mark all as complete
        </label>

        <ul className='todo-list'>
          {
            filteredTodos.map((todo, index) => 
              <li key={index} className={todo.isCompleted ? "completed" : ""}>
                <div className="view">
                  <input className='toggle' type="checkbox" checked={todo.isCompleted} onChange={() => checkboxChange(index)} />
                  <label>{todo.task}</label>
                  <button onClick={() => removeItem(todo.task)} className='destroy'></button>
                </div>
              </li>
            )
          }
        </ul>
      </section>

      <footer className={todos.length === 0 ? "hidden" : "footer"}>
            <span className="todo-count">
                <strong>{filteredTodos.length}</strong> items left 
            </span>
            
            <ul className="filters">
                <li>
                    <a onClick={(e) => {setActiveTodos("All")}} className={activeTodos === "All" ? 'selected' : undefined}>All</a>
                </li>
                <li>
                    <a onClick={(e) => {setActiveTodos("Active")}} className={activeTodos === "Active" ? 'selected' : undefined}>Active</a>
                </li>
                <li>
                    <a onClick={(e) => {setActiveTodos("Completed")}} className={activeTodos === "Completed" ? 'selected' : undefined}>Completed</a>
                </li>
            </ul>
            
            <button onClick={clearAllTasks} className="clear-completed">Clear completed</button>
        </footer>
    </>
  )
}

export default List
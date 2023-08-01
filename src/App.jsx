import { useState } from 'react'
import './App.css'

export default function App() {
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState([]);

  function submitHandler(event) {
    event.preventDefault();

    //if you want to use currentValue, you need to pass in a function
    setTodos(currentTodos => {
      return [
        ...currentTodos,
        { 
          id: crypto.randomUUID(),
          title: newItem, 
          completed: false
        },
      ]
    })
    //clears out the input field after submitting
    setNewItem("");
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if(todo.id === id) {
          return { ...todo, completed }
        }
        return todo;
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      //if my todo is not equal to this ID: keep; otherwise remove
      return currentTodos.filter(todo => todo.id !== id)
    })
  }
  return (
    <>
      <form onSubmit={submitHandler} className="form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input 
            value={newItem}
            onChange={event => setNewItem(event.target.value)}
            type="text" 
            id="item" 
          />
        </div>
        <button className="btn">Add</button>
      </form>

      <h2 className="header">To Do List</h2>
      <ul className="list">
        {todos.length === 0 && "No todos"}
        {todos.map(todo => {
          return (
            <li key={todo.id}>
              <label>
                <input 
                type="checkbox" 
                checked={todo.completed}
                onChange={event => toggleTodo(todo.id, event.target.checked)} />
                {todo.title}
              </label>
              <button 
              onClick={() => deleteTodo(todo.id)}
              className="btn btn-danger">Delete</button>
            </li>
          )
        })}
      </ul>
    </>
  )
}



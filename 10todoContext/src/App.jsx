import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TodoProvider } from './Contexts/TodoContext'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev) => [ {id: Date.now(), ...todo} , ...prev ])
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === todo.id ? todo : prevTodo)))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos((prev) => 
      prev.map((prevTodo) => 
        prevTodo.id === id ? {...prevTodo, completed:
          !prevTodo.completed} : prevTodo
        )
      )
  }

  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleCompleted}}>
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    </TodoProvider>
  )
  
}

export default App

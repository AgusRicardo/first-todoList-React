import { useState } from 'react';
import './App.css';
import React from 'react'


function App() {
  // El primer estado es para crear un estado de tipo array vacío para guardar la lista
  const [todos, setTodos] = useState([]); 
  // El segundo estado es para sacar el value del input
  const [todo, setTodo] = useState('');

  // Función para sacar el value del input
  const handleChange = (e) => {
    setTodo(e.target.value);
  }

  // Función donde al completarse el submit del form, se crea un objeto con el value del input
  const handleSubmit = (e) => {
    e.preventDefault()

    const newTodo = {
      id: 1 + Math.random(),
      text: todo,
      completed: false
    }

    // setTodos ejecuta la concatenación del array todos y el nuevo objeto que creamos antes
    setTodos([...todos].concat(newTodo))

    // Ejecutamos el setTodo con un string vacío para vaciar el input
    setTodo('')
  }

  
  return (
    <>
    <header>
      <section className='section-body'>
      <h3>To Do List</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" value={todo} onChange={handleChange}/>
          <input type="submit" value="Agregar"/>
        </form>
        <div className='list'>
          {todos.map((todo) => <div key={todo.id}>{todo.text}</div>)}
        </div>
      </section>
    </header>
  </>
  );
}

export default App;

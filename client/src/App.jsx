import { useState } from 'react'
import './App.css'

//components
import Sidenav from './assets/components/Sidenav'
import InputTodo from './assets/components/InputTodo'
import ListTodos from './assets/components/ListTodos'

function App() {
  
  return (
    <div>
        <Sidenav/>
        <InputTodo/>
    </div>
  )
}

export default App

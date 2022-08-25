import React, { useState } from 'react';
import AddTodo from './components/AddTodo';
import List from './components/List';
import './App.css';


    function App() {
        const [todos, setTodos] = useState([])

        const addTodo = (newTodo) => {
            setTodos([...todos, newTodo])
            console.log(todos)
        }
        return(
            <div className='App'>
                <AddTodo addTodo={ addTodo } />
                <List list={ todos } />
            </div>
        )
        }
    


export default App;

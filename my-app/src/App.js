
import './App.css';
import styled from 'styled-components';

import React, { useState } from 'react';

const HomeConatiner = styled.div`

font-size: 30px;
text-align: center;
border: 3px solid green;

`

const Todocontainer = styled.div`

font-size: 20px;
text-align: center;
border: 3px solid black;

`

function App() {
    

    const [todos, setTodos] = useState([]);
    const [notes, setnotes] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault(); // prevents the default action of the event from occurring
      if (notes.trim() === '') { // built-in method in JavaScript that removes any whitespace characters
        return;
      }
      setnotes(''); //hook
    };
  
    //delletting the to do
    const handleDelete = (index) => {
      setTodos(todos.filter((_, i) => i !== index)); //filter method
    };
    return (
  
  
  <>
<HomeConatiner>To Do's</HomeConatiner>

<Todocontainer>


<div>
      <button onSubmit={handleSubmit}>
        <input
          type="text"
          value={notes}
          onChange={(event) => setnotes(event.target.value)} //onChange event handler to detect when a user modifies the value of an input element and take action based on the new value.
          placeholder="Add a new to-do" //below the unordered list prints the todos through the map method
        />
        <button type="submit">Add a TODO</button>
      </button>
      <ul> 
        {todos.map((todo, index) => ( //map methid that print out evrythinf loop
          <li key={index}>
            {todo}    
            <button onClick={() => handleDelete(index)}>Delete</button> 
          </li>
        ))}
      </ul>
    </div>

  



</Todocontainer>


</> 

  )


}

export default App;

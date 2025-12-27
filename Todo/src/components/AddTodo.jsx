import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addTodo } from '../redux/features/todo/todoSlice';

function AddTodo() {

    // const [input, setInput] = React.useState('');

 const[input , setInput] = useState('');
  const dispatch = useDispatch();


  const addTodoHandler = (e) => {
   e.preventDefault();
   dispatch(addTodo(input))
   setInput('');
  }


  return (

    <form 
      onSubmit={addTodoHandler} 
      className="max-w-md mx-auto mt-10 flex gap-3 items-center"
    >
      <input
      required="true"
        type="text"
        className="flex-1 bg-zinc-800 rounded-lg border border-zinc-700 
        focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 
        text-base outline-none text-white py-2 px-4 
        transition-all duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button
         type ="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6
        focus:outline-none hover:bg-indigo-600 rounded-lg 
        text-base font-medium transition"
        >
        Add Todo
      </button>
      
    </form>
  );
}

export default AddTodo;

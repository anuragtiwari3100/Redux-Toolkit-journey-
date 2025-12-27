import React from 'react'
import { useSelector ,useDispatch} from 'react-redux'

import { removeTodo } from '../redux/features/todo/todoSlice';

function Todos() {
  // const todos = useSelector((state) => state.todos); //yaha doubt hai
  const todos = useSelector((state) => state.todo.todos);

  const dispatch = useDispatch();



  
  return (

    
    <div className="max-w-md mx-auto mt-8 bg-zinc-900 p-6 rounded-xl shadow-xl">
      <h2 className="text-2xl font-semibold text-white text-center mb-6">
        📝 My Todos For 2026
      </h2>

      {todos.length === 0 ? (
        <p className="text-zinc-400 text-center">
          No todos yet. Chill 😌
        </p>
      ) : (
        <ul className="space-y-3">
          {todos.map((todo) => (
            <li 
               key={todo.id}
              className="flex justify-between items-center 
              bg-zinc-800 px-4 py-3 rounded-lg 
              hover:bg-zinc-700 transition-all duration-200"
            >
              <span className="text-white break-words pr-3">
                {todo.text}
              </span>

              <button
                onClick={() => dispatch(removeTodo({ id: todo.id }))}
                className="text-sm bg-red-500 hover:bg-red-600 
                text-white px-3 py-1 rounded-md 
                transition focus:outline-none focus:ring-2 
                focus:ring-red-400"
              >
                   {/* <button
                onClick={() => dispatch(removeTodo({ id: todo.id }))}
                className="text-sm bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md transition"
              ></button> */}
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Todos;

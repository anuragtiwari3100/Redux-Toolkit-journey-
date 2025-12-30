import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, updateTodo } from '../redux/features/todo/todoSlice';

function Todos() {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  // Track which todo is being edited
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState('');

  return (
    <div className="max-w-md mx-auto mt-8 bg-zinc-900 p-6 rounded-xl shadow-xl">
      <h2 className="text-2xl font-semibold text-white text-center mb-6">
        📝 My Todos For 2026
      </h2>

      {todos.length === 0 ? (
        <p className="text-zinc-400 text-center">No todos yet. Chill 😌</p>
      ) : (
        <ul className="space-y-3">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex justify-between items-center bg-zinc-800 px-4 py-3 rounded-lg hover:bg-zinc-700 transition-all duration-200"
            >
              {/* Todo Text / Input */}
              {editingId === todo.id ? (
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  className="px-2 py-1 rounded-md flex-1"
                />
              ) : (
                <span className="text-white break-words pr-3 flex-1">{todo.text}</span>
              )}

              <div className="flex gap-2">
                {/* Update / Save Button */}
                {editingId === todo.id ? (
                  <button
                    onClick={() => {
                      dispatch(updateTodo({ id: todo.id, text: editText }));
                      setEditingId(null); // exit edit mode
                    }}
                    className="text-sm bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-400"
                  >
                    Save
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setEditingId(todo.id);
                      setEditText(todo.text); // prefill input
                    }}
                    className="text-sm bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  >
                    Edit
                  </button>
                )}

                {/* Delete Button */}
                <button
                  onClick={() => dispatch(removeTodo({ id: todo.id }))}
                  className="text-sm bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-400"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Todos;

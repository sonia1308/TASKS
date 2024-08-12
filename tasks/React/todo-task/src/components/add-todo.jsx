import React from 'react';
import SingleTodo from "./list-item";

export const AddTodo = () => {
  return (
    <form id="todo-form" >
      <div className="flex mt-4 mb-4 pl-2 pt-1 pr-2 pb-1 opacity-90">
        <input 
          type="text"
          className="w-full px-6 py-2 mr-2 rounded-lg border-gray-300 focus:outline-none focus:border-blue-500" 
          id="todo-input" 
          placeholder="Add new task" 
          required
        />
        <button 
          type="submit" 
          className="add-todo bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-1 px-5 rounded-lg"
        >
          Add
        </button>
      </div>
    </form>
  );
};

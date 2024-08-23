import { v4 } from "uuid";
import { useContext, useRef } from "react";
import { TodoContext } from "../context/todos";
import useTodos from "../zustand";
import toast from "react-hot-toast";

function Todo(title) {
  // this.id = new Date().getTime();
  this.id = v4();
  this.title = title;
  this.completed = false;
}

export const AddTodo = () => {
  const inputRef = useRef();
  // const { setTodos } = useContext(TodoContext);
  const { todos, setTodos } = useTodos((state) => state);

  function addTodoHandler(e) {
    e.preventDefault();
    const inputValue = inputRef.current.value;
    const newTodo = new Todo(inputValue);

    fetch("http://localhost:3000/todos", {
      method: "POST",
      body: JSON.stringify(newTodo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setTodos([...todos, data]);
          inputRef.current.value = "";
          toast.success("Yeni todo ugurla elave olundu", {
            position: "bottom-center",
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <form id="todo-form" onSubmit={addTodoHandler}>
      <div className="flex mt-4 mb-4 pl-2 pt-1 pr-2 pb-1 opacity-90">
        <input
          type="text"
          className="w-full px-6 py-2 mr-2 rounded-lg border-gray-300 focus:outline-none focus:border-blue-500"
          id="todo-input"
          placeholder="Add new task"
          required
          ref={inputRef}
        />

        <button className="add-todo bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-1 px-5 rounded-lg">
          Add
        </button>
      </div>
    </form>
  );
};

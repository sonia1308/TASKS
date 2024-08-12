import React, { useState, useEffect } from 'react';
import { ListItem, ListItemSuffix, Checkbox } from "@material-tailwind/react";
import { TrashhIcon, EdittIcon } from "../assets/icons/icons";

const SingleTodo = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch('../../data/db.json')
      .then((res) => res.json())
      .then((data) => {
        setTodos(data);
      });
  }, []);

  const removeTodo = (id) => {
    console.log(`Removing todo with id: ${id}`);
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
    console.log('Updated todos:', updatedTodos);
  };

  return (
    <ul>
      {todos.map((todo) => (
        <ListItem key={todo.id} ripple={false} className="py-1 pr-1 pl-4">
          <Checkbox color="cyan" />
          <div className="flex-grow">{todo.title}</div>
          <ListItemSuffix className="flex">
            <TrashhIcon onClick={() => removeTodo(todo.id)} />
            <EdittIcon />
          </ListItemSuffix>
        </ListItem>
      ))}
    </ul>
  );
};

export default SingleTodo;

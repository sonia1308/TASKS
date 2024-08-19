import { useState, useEffect } from "react";
import { ListItem, ListItemSuffix, Checkbox } from "@material-tailwind/react";
import { TrashhIcon, EdittIcon } from "../assets/icons/icons";

const url = "http://localhost:3000/todos";

const SingleTodo = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setTodos(data);
      });
  }, []);

  const removeTodo = (id) => {
    fetch(`${url}/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          const updatedTodos = todos.filter((todo) => todo.id !== id);
          setTodos(updatedTodos);
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <ul>
      {todos.map(({ id, title }) => (
        <ListItem key={id} ripple={false} className="py-1 pr-1 pl-4">
          <Checkbox color="cyan" />

          <h2 className="flex-grow">{title}</h2>

          <ListItemSuffix className="flex gap-2">
            <EdittIcon />

            <TrashhIcon onClick={() => removeTodo(id)} />
          </ListItemSuffix>
        </ListItem>
      ))}
    </ul>
  );
};

export default SingleTodo;

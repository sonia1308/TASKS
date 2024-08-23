import { useEffect, useContext } from "react";
import { TodoContext } from "../context/todos";
import { ListItem, ListItemSuffix, Checkbox } from "@material-tailwind/react";
import { TrashhIcon, EdittIcon } from "../assets/icons/icons";
import useTodos from "../zustand";
import toast from "react-hot-toast";

const url = "http://localhost:3000/todos";

const SingleTodo = () => {
  // const { todos, setTodos } = useContext(TodoContext);
  const { todos, filteredTodos, setTodos } = useTodos((state) => state);

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
          toast.success("Todo ugurla silindi");
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const updateTodo = (id) => {
    const clickedTodo = todos.find((t) => t.id === id);
    const userInput = prompt("Edit your todo", clickedTodo.title);
    if (!userInput) {
      toast.error("Duzgun deyer daxil edin");
      return;
    }

    clickedTodo.title = userInput;
    fetch(`http://localhost:3000/todos/${id}`, {
      method: "PUT",
      body: JSON.stringify(clickedTodo),
    })
      .then((res) => res.json())
      .then(() => {
        setTodos(todos);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <ul>
      {filteredTodos.map(({ id, title }) => (
        <ListItem key={id} ripple={false} className="py-1 pr-1 pl-4">
          <Checkbox color="cyan" />

          <h2 className="flex-grow overflow-hidden text-ellipsis line-clamp-1">
            {title}
          </h2>

          <ListItemSuffix className="flex gap-2">
            <EdittIcon onClick={() => updateTodo(id)} />

            <TrashhIcon onClick={() => removeTodo(id)} />
          </ListItemSuffix>
        </ListItem>
      ))}
    </ul>
  );
};

export default SingleTodo;

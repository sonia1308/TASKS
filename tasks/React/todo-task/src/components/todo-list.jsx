import {List ,Card} from "@material-tailwind/react";
 import { AddTodo } from "./add-todo";
import SingleTodo from "./list-item";
export function TodoList() {
  return (
    <Card className="w-[500px] bg-opacity-50">
      <List className="todo-list">
        <SingleTodo/>
        <AddTodo />
      </List>
    </Card>
  );
}
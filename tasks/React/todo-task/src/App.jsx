import "./App.css";
import { TodoList } from "./components/todo-list";
import Header from "./components/header";
import Form from "./components/form";
function App() {
  return (
    <>
      <div className=" h-lvh">
        <Header />
        <main>
          <div className="flex justify-center">
            <Form />
          </div>

          <div className=" flex justify-center">
            <TodoList />
          </div>
        </main>
      </div>
    </>
  );
}
export default App;

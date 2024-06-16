import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import AppTodo from "./components/AppTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMsg from "./components/WelcomeMsg";
export default function App() {
  let initialToDoItems = [
    {
      task: "cook",
      dueDate: "10/09/2024",
    },
    {
      task: "play",
      dueDate: "19/09/2024",
    },
  ];
  const [toDo, setToDo] = useState(initialToDoItems);
  const handleNewItem = (name, date) => {
    console.log(`New item added : ${name} on Date : ${date} `);
    if (name !== "" && date !== "") {
      const newTodoItems = [...toDo, { task: name, dueDate: date }];
      setToDo(newTodoItems);
    }
  };

  const handleDeleteItem = (items) => {
    const newTodoList = toDo.filter((todo) => {
      return todo.task !== items.task && todo.dueDate !== items.dueDate;
    });
    setToDo(newTodoList);
  };
  return (
    <center>
      <h1>ToDo App</h1>
      <AppTodo onNewItem={handleNewItem} />
      <WelcomeMsg toDo={toDo} />
      <TodoItems todoItems={toDo} onDeleteItem={handleDeleteItem} />
    </center>
  );
}

import { useState } from "react";
import styles from "./AppTodo.module.css";
const AppTodo = ({ onNewItem }) => {
  const [todoName, setTodoName] = useState("");
  const [todoDate, setTodoDate] = useState("");

  const handleNamechange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setTodoDate(event.target.value);
  };

  const handlebuttonClicked = () => {
    onNewItem(todoName, todoDate);
    setTodoDate("");
    setTodoName("");
  };

  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter todo here"
            value={todoName}
            onChange={handleNamechange}
          ></input>
        </div>
        <div className="col-4">
          <input
            type="date"
            value={todoDate}
            onChange={handleDateChange}
          ></input>
        </div>
        <div className="col-2">
          <button
            type="button"
            className={`btn btn-success kg-button `}
            onClick={handlebuttonClicked}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppTodo;

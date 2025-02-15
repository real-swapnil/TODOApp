import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Components/NavBar";
import { Route, Router, Routes } from "react-router-dom";
import AddToDo from "./Components/AddToDo";
import TodoS from "./Components/TodoS";
import ViewTodos from "./Components/ViewTodos";
import Home from "./Components/Home";

function App() {
  const [taskList, setTaskList] = useState([]);
  const [taskTitle, setTaskTitle] = useState("");

  // Load tasks and title from localStorage when the component mounts
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("taskList"));
    const storedTitle = localStorage.getItem("taskTitle");

    if (storedTasks) setTaskList(storedTasks);
    if (storedTitle) setTaskTitle(storedTitle);
  }, []); // Runs only once when the component mounts

  // Save taskList to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(taskList));
  }, [taskList]);

  // Save taskTitle to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("taskTitle", taskTitle);
  }, [taskTitle]);

  // Function to handle task title input
  const addTaskListItem = (e) => {
    const { name, value } = e.target;
    if (name === "title") setTaskTitle(value);
  };

  // Add task to the task list
  const addTask = () => {
    if (taskTitle) {
      const newTask = { cardTitle: taskTitle, completed: false };
      const updatedTaskList = [...taskList, newTask];
      setTaskList(updatedTaskList);
      setTaskTitle(""); // Reset title after adding
      localStorage.removeItem("taskTitle"); // Clear taskTitle from localStorage after adding
    }
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/addToDo"
          element={
            <AddToDo
              taskTitle={taskTitle}
              addTaskListItem={addTaskListItem}
              addTask={addTask}
              taskList={taskList}
              setTaskList={setTaskList}
            />
          }
        />
        <Route
          path="/updateStatus"
          element={<TodoS taskList={taskList} setTaskList={setTaskList} />}
        />
        <Route path="/view" element={<ViewTodos taskList={taskList} />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;

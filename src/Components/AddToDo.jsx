import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import TodoS from "./TodoS";

// AddToDo component manages the form input and task list
function AddToDo(props) {
  return (
    <div>
      <h3
        className="text-center p-3"
        style={{
          fontSize: "24px",
          fontWeight: "bold",
          color: "#D9773C",
          letterSpacing: "1px",
        }}
      >
        ToDo App
      </h3>

      {/* Task Title Input */}
      <div className="form-group pb-3">
        <Form.Control
          className="form-control p-3 m-2"
          type="text"
          name="title"
          value={props.taskTitle}
          placeholder="Type your Todo..."
          onChange={props.addTaskListItem}
        />
      </div>

      {/* Add Task Button */}
      <Button
        onClick={props.addTask}
        style={{
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          backgroundColor: "#8E44AD", // Dusky pink-purple
          borderColor: "#8E44AD",
          color: "white", // Ensuring text is readable
        }}
      >
        ADD TODO
      </Button>

      {/* Render Task List */}
    </div>
  );
}

export default AddToDo;

import React from "react";
import { Form, ListGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { BsTrash } from "react-icons/bs";

//Update Todos

function TodoS({ taskList = [], setTaskList }) {
  // Function to mark task as completed and remove it from the list
  const deleteCompleted = (index) => {
    const newTaskList = taskList.filter((_, i) => i !== index);
    setTaskList(newTaskList);
  };

  // Function to update task status
  const updateStatus = (index, newStatus) => {
    const updatedTasks = taskList.map((task, i) =>
      i === index ? { ...task, status: newStatus } : task
    );
    setTaskList(updatedTasks);
  };

  // Function to determine color based on status
  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "success"; // Green
      case "Pending":
        return "warning"; // Orange/Yellow
      default:
        return "primary"; // Blue for "Todo"
    }
  };

  return (
    <>
      <div className="mt-3">
        <h3
          style={{ fontWeight: "bold", color: "#D9773C", marginRight: "15px" }}
        >
          Update Todos Status
        </h3>
        <ListGroup style={{ marginTop: "20px" }}>
          {taskList.map((task, index) => (
            <ListGroup.Item
              key={index}
              className={task.completed ? "d-none" : ""}
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "10px",
              }}
            >
              <span>{task.cardTitle}</span>

              {/* Status Dropdown with Bootstrap Styling */}
              <Form.Select
                size="sm"
                value={task.status || "Todo"} // Default to "Todo"
                onChange={(e) => updateStatus(index, e.target.value)}
                className="text-white fw-bold text-center"
                style={{
                  width: "120px",
                  fontWeight: "bold",
                  textAlign: "center",
                  backgroundColor:
                    task.status === "Completed"
                      ? "#28A745"
                      : task.status === "Pending"
                      ? "#8E44AD"
                      : "#FF6347",
                  color: "white",
                  borderRadius: "5px",
                  border: "none",
                }}
              >
                <option
                  value="Todo"
                  style={{ backgroundColor: "white", color: "black" }}
                >
                  Todo
                </option>
                <option
                  value="Pending"
                  style={{ backgroundColor: "white", color: "black" }}
                >
                  Pending
                </option>
                <option
                  value="Completed"
                  style={{ backgroundColor: "white", color: "black" }}
                >
                  Completed
                </option>
              </Form.Select>

              <Button
                variant="danger"
                size="sm"
                onClick={() => deleteCompleted(index)}
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
              >
                <BsTrash size={16} /> {/* Trash icon */}
                Delete
              </Button>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    </>
  );
}

export default TodoS;

//Update Todos

import React from "react";
import { ListGroup, Badge } from "react-bootstrap";

function ViewTodos({ taskList }) {
  // Categorizing tasks based on status
  const todos = taskList.filter((task) => task.status === "Todo");
  const pendings = taskList.filter((task) => task.status === "Pending");
  const completed = taskList.filter((task) => task.status === "Completed");

  return (
    <div className="container mt-4">
      {/* Header with Task Counts */}
      <div className="d-flex align-items-center justify-content-center mb-4">
        <h3
          style={{ fontWeight: "bold", color: "#D9773C", marginRight: "15px" }}
        >
          Todos & Status
        </h3>
        <Badge style={{ backgroundColor: "tomato", marginRight: "10px" }}>
          Todo: {todos.length}
        </Badge>
        <Badge style={{ backgroundColor: "purple", marginRight: "10px" }}>
          Pending: {pendings.length}
        </Badge>
        <Badge style={{ backgroundColor: "green" }}>
          Completed: {completed.length}
        </Badge>
      </div>

      {/* TODO Section */}
      <h5 style={{ color: "tomato" }}>TODO</h5>
      <ListGroup className="mb-3">
        {todos.length > 0 ? (
          todos.map((task, index) => (
            <ListGroup.Item key={index}>{task.cardTitle}</ListGroup.Item>
          ))
        ) : (
          <ListGroup.Item className="text-muted text-center">
            No Tasks
          </ListGroup.Item>
        )}
      </ListGroup>

      {/* PENDING Section */}
      <h5 style={{ color: "purple" }}>PENDING</h5>
      <ListGroup className="mb-3">
        {pendings.length > 0 ? (
          pendings.map((task, index) => (
            <ListGroup.Item key={index}>{task.cardTitle}</ListGroup.Item>
          ))
        ) : (
          <ListGroup.Item className="text-muted text-center">
            No Tasks
          </ListGroup.Item>
        )}
      </ListGroup>

      {/* COMPLETED Section */}
      <h5 style={{ color: "green" }}>COMPLETED</h5>
      <ListGroup>
        {completed.length > 0 ? (
          completed.map((task, index) => (
            <ListGroup.Item key={index}>{task.cardTitle}</ListGroup.Item>
          ))
        ) : (
          <ListGroup.Item className="text-muted text-center">
            No Tasks
          </ListGroup.Item>
        )}
      </ListGroup>
    </div>
  );
}

export default ViewTodos;

import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import ListTask from "./listTask";

const TaskForm = () => {
  const [task, setTask] = useState("");
  const [taskArray, setTaskArray] = useState(
    JSON.parse(localStorage.getItem("taskArray")) || []
  );
  useEffect(() => {
    localStorage.setItem("taskArray", JSON.stringify(taskArray));
  }, [taskArray]);
  const dltTask = (index) => {
    const filteredArray = taskArray.filter((_, i) => i !== index);
    setTaskArray(filteredArray);
  };
  return (
    <section>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          setTaskArray([...taskArray, task]);
          setTask("");
        }}
      >
        <Form.Group className="mb-3 d-flex gap-1" controlId="input">
          <Form.Control
            type="text"
            placeholder="Ej; Tarea 1"
            onChange={(e) => setTask(e.target.value)}
            value={task}
          />
          <Button className="btn" type="submit">
            Agregar
          </Button>
        </Form.Group>
      </Form>
      <ListTask taskArray={taskArray} dltTask={dltTask} />
    </section>
  );
};

export default TaskForm;

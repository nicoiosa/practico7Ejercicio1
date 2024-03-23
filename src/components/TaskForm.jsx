import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import ListTask from "./ListTask";
import { createTaskAPI } from "../helpers/queries";
import { useForm } from "react-hook-form";

const TaskForm = (edit) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  // const [task, setTask] = useState("");
  // const [taskArray, setTaskArray] = useState(
  //   JSON.parse(localStorage.getItem("taskArray")) || []
  // );
  // useEffect(() => {
  //   localStorage.setItem("taskArray", JSON.stringify(taskArray));
  // }, [taskArray]);
  // const dltTask = (index) => {
  //   const filteredArray = taskArray.filter((_, i) => i !== index);
  //   setTaskArray(filteredArray);
  // };
  const onSubmit = async (task) => {
    const answer = await createTaskAPI(task);
    reset();
  };
  return (
    <section>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3 d-flex gap-1" controlId="input">
          <Form.Control
            type="text"
            placeholder="Ej; Tarea 1"
            {...register("task", {
              required: "You didnt write your task yet",
              minLength: {
                value: 2,
                message: "Has to have at least 2 characters",
              },
              maxLength: {
                value: 100,
                message: "Has to have at most 100 characters",
              },
            })}
          />
          <Form.Text className="text-danger">{errors.task?.message}</Form.Text>
          <Button className="btn" type="submit">
            Agregar
          </Button>
        </Form.Group>
      </Form>
      <ListTask />
    </section>
  );
};

export default TaskForm;

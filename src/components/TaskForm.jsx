import { Button, Form } from "react-bootstrap";
import ListTask from "./ListTask";
import { createTaskAPI } from "../helpers/queries";
import { useForm } from "react-hook-form";
import { useState } from "react";

const TaskForm = (edit) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [reload, setReload] = useState(false);
  const onSubmit = async (task) => {
    const answer = await createTaskAPI(task);
    setReload(!reload);
    reset();
  };
  return (
    <section>
      <Form className="mb-3" onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="d-flex gap-1 mb-1" controlId="input">
          <Form.Control
            type="text"
            placeholder="Ej; Tarea 1"
            {...register("task", {
              required: "No escribiste la tarea todavia!",
              minLength: {
                value: 2,
                message: "Debe tener por lo menos 20 caracteres",
              },
              maxLength: {
                value: 100,
                message: "Debe tener como maximo 100 caracteres",
              },
            })}
          />
          <Button className="btn" type="submit">
            Agregar
          </Button>
        </Form.Group>
        <Form.Text className="text-danger">{errors.task?.message}</Form.Text>
      </Form>
      <ListTask reload={reload} />
    </section>
  );
};

export default TaskForm;

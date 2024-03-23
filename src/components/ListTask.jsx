import { Alert, ListGroup } from "react-bootstrap";
import ItemTask from "./ItemTask";
import { useEffect, useState } from "react";
import { readTasksAPI } from "../helpers/queries";

const ListTask = ({reload}) => {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    obtainTasks();
  }, [reload]);
  const obtainTasks = async () => {
    try {
      const answer = await readTasksAPI();
      if (answer.status === 200) {
        const data = await answer.json();
        setTasks(data);
      }
    } catch (error) {
      console.error();
      setError("Hubo un error tratando de cargar las tareas. Intentelo nuevamente mas tarde.");
    }
  };
  return (
    <>
      {error && <Alert variant="danger">{error}</Alert>}
      {!error && (
        <ListGroup>
          {tasks.map((task) => (
            <ItemTask key={task._id} task={task} setTasks={setTasks}></ItemTask>
          ))}
        </ListGroup>
      )}
    </>
  );
};

export default ListTask;

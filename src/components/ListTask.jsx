import { Alert, ListGroup } from "react-bootstrap";
import ItemTask from "./ItemTask";
import { useEffect, useState } from "react";
import { readTaskAPI } from "../helpers/queries";

const ListTask = ({}) => {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    obtainTasks();
  }, []);
  const obtainTasks = async () => {
    try {
      const answer = await readTaskAPI();
      if (answer.status === 200) {
        const data = await answer.json();
        setTasks(data);
      }
    } catch (error) {
      console.error();
      setError("There was an error trying to load the tasks. Try again later.");
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

import { ListGroup } from "react-bootstrap";
import ItemTask from "./itemTask";

const ListTask = ({ taskArray, dltTask }) => {
  return (
    <ListGroup>
      {taskArray.map((task, position) => (
        <ItemTask key={position} index={position} task={task} dltTask={dltTask}></ItemTask>
      ))}
    </ListGroup>
  );
};

export default ListTask;

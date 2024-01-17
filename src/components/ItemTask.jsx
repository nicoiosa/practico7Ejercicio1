import { Button, ListGroupItem } from "react-bootstrap";

const ItemTask = ({index, task, dltTask}) => {
  return (
    <ListGroupItem className="d-flex justify-content-between align-items-center">
      {task}
      <Button onClick={() => dltTask(index)}>Borrar</Button>
    </ListGroupItem>
  );
};

export default ItemTask;

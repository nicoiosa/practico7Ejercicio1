import { Button, ListGroupItem } from "react-bootstrap";
import Swal from "sweetalert2";
import { dltTaskAPI, readTaskAPI } from "../helpers/queries";

const ItemTask = ({ task, setTasks }) => {
  const dltTask = () => {
    Swal.fire({
      title: "Are you sure you want to delete the task?",
      text: "You cant go back!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const response = await dltTaskAPI(task._id);
        if (response.status === 200) {
          Swal.fire({
            title: "Deleted!",
            text: `The task was deleted.`,
            icon: "success",
          });
          const answer = await readTaskAPI();
          if (answer.status === 200) {
            const data = await answer.json();
            setTasks(data);
          }
        } else {
          Swal.fire({
            title: "A mistake occurred!",
            text: `The task was not deleted succesfully, try again in a few minutes`,
            icon: "error",
          });
        }
      }
    });
  };
  return (
    <ListGroupItem className="d-flex justify-content-between align-items-center">
      {task}
      <Button onClick={dltTask}>Borrar</Button>
    </ListGroupItem>
  );
};

export default ItemTask;

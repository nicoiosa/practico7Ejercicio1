import { Button, ListGroupItem } from "react-bootstrap";
import Swal from "sweetalert2";
import { dltTaskAPI, readTasksAPI } from "../helpers/queries";

const ItemTask = ({ task, setTasks }) => {
  const dltTask = () => {
    Swal.fire({
      title: "¿Estas seguro que quieres borrar la tarea?",
      text: "No podras vovler atras!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrarla!",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const response = await dltTaskAPI(task._id);
        if (response.status === 200) {
          Swal.fire({
            title: "Borrada!",
            text: `La tarea fue borrada.`,
            icon: "success",
          });
          const answer = await readTasksAPI();
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
      {task.task}
      <Button onClick={dltTask}>Borrar</Button>
    </ListGroupItem>
  );
};

export default ItemTask;

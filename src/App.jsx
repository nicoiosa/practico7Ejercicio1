import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import "./App.css";
import TaskForm from "./components/TaskForm";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Container className="my-4 text-light myMain">
        <h1 className="mb-3 display-3 text-center">Bienvenido</h1>
        <p className="lead text-center">Ingresa tus tareas</p>
        <TaskForm />
      </Container>
      <Footer />
    </>
  );
}

export default App;

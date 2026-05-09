import { useContext } from "react";
import { Link } from "react-router-dom";

import { TaskContext } from "../context/TaskContext";

function Home() {
  const { tasks, removeTask } =
    useContext(TaskContext);

  return (
    <div>
      <h1>Lista de Tarefas</h1>

      <Link to="/add-task">
        Adicionar tarefa
      </Link>

      {tasks.length === 0 ? (
        <p>Nenhuma tarefa cadastrada.</p>
      ) : (
        <ul>
          {tasks.map((task) => (
           <li key={task.id}>
  <span>{task.title}</span>

  <div className="actions">
    <Link to={`/edit-task/${task.id}`}>
      Editar
    </Link>

    <button
      onClick={() => removeTask(task.id)}
    >
      Excluir
    </button>
  </div>
</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Home;
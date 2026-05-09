import {
  useContext,
  useState,
  useEffect,
} from "react";

import {
  useNavigate,
  useParams,
} from "react-router-dom";

import { TaskContext } from "../context/TaskContext";

function EditTask() {
  const { id } = useParams();

  const { tasks, editTask } =
    useContext(TaskContext);

  const navigate = useNavigate();

  const [title, setTitle] = useState("");

  useEffect(() => {
    const task = tasks.find(
      (task) => task.id === Number(id)
    );

    if (task) {
      setTitle(task.title);
    }
  }, [id, tasks]);

  function handleSubmit(e) {
    e.preventDefault();

    editTask(Number(id), title);

    navigate("/");
  }

  return (
    <div>
      <h1>Editar tarefa</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
        />

        <button type="submit">
          Atualizar
        </button>
      </form>
    </div>
  );
}

export default EditTask;
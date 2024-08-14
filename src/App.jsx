import { useState } from "react";
import TodoList from "./components/TodoList";
import Modal from "./components/Modal";

function App() {
  const [isTaskEmpty, setIsTaskEmpty] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Learn React",
      category: "Programming",
      isCompleted: true,
    },
    {
      id: 2,
      text: "Learn Vue",
      category: "Personal",
      isCompleted: false,
    },
  ]);

  const handleTask = (task) => {
    console.log(task);
    if (task.text === "") {
      setIsTaskEmpty(true);
      return;
    }
    setTasks((prev) => [...prev, { ...task, id: prev.length + 1 }]);
    task.text = "";
  };

  return (
    <>
      {isTaskEmpty && (
        <Modal
          text="Task cannot be empty"
          changeIsEmpty={() => {
            setIsTaskEmpty(false);
          }}
        />
      )}
      <TodoList
        tasks={tasks}
        handleTask={handleTask}
        deleteTask={(taskId) =>
          setTasks(tasks.filter((task) => task.id !== taskId))
        }
      />
    </>
  );
}

export default App;

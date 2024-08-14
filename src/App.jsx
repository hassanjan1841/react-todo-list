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
  };

  return (
    <>
      {isTaskEmpty && <Modal text="Task cannot be empty" />}
      <TodoList tasks={tasks} handleTask={handleTask} />
    </>
  );
}

export default App;

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
  const [filteredTask, setFilteredTask] = useState(tasks);

  const handleCategory = (category) => {
    console.log(category);
    if (category == "Completed") {
      setFilteredTask(tasks.filter((task) => task.isCompleted === true));
    } else if (category == "Not Completed") {
      setFilteredTask(tasks.filter((task) => task.isCompleted === false));
    } else {
      setFilteredTask(tasks);
    }
  };
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
        tasks={filteredTask}
        handleTask={handleTask}
        deleteTask={(taskId) =>
          setTasks(tasks.filter((task) => task.id !== taskId))
        }
        isCompleted={(taskId) => (isCompleted) => {
          setTasks(
            tasks.map((task) =>
              task.id === taskId ? { ...task, isCompleted } : task
            )
          );
        }}
        handleCategory={handleCategory}
      />
    </>
  );
}

export default App;

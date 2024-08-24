import { useEffect, useState, useTransition } from "react";
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
  const [category, setCategory] = useState(false);
  const [clickedCategory, setClickedCategory] = useState("All");
  const handleCategory = (category) => {
    setClickedCategory(category);
    switch (category) {
      case "Completed":
        setFilteredTask(tasks.filter((task) => task.isCompleted === true));
        setCategory(true);
        break;
      case "Not Completed":
        setFilteredTask(tasks.filter((task) => task.isCompleted === false));
        setCategory(false);
        break;
      default:
        setFilteredTask(tasks);
        break;
    }
  };

  useEffect(() => {
    setFilteredTask(tasks.filter((task) => task.isCompleted == category));
  }, [tasks]);

  const handleIsCompleted = (taskId) => (isCompleted) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, isCompleted } : task
      )
    );
  };

  const handleTask = (task) => {
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
        isCompleted={handleIsCompleted}
        handleCategory={handleCategory}
        clickedCategory={clickedCategory}
      />
    </>
  );
}

export default App;

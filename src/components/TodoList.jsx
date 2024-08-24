import { useState } from "react";
import Button from "./Button";
import Todo from "./Todo";
import Categories from "./Categories";

const TodoList = ({
  tasks,
  handleTask,
  deleteTask,
  isCompleted,
  handleCategory,
}) => {
  const [task, setText] = useState({
    text: "",
    category: "Programming",
    isCompleted: false,
  });

  return (
    <section className="text-gray-600 body-font ">
      <div className="container px-5 py-24 mx-auto">
        <div className="border p-2 flex items-center justify-between flex-col sm:flex-row w-full mb-20 gap-4 flex-wrap">
          <h1 className="flex-1 text-start sm:text-3xl text-2xl text-gray-900">
            Your Task
          </h1>
          <div className="flex gap-5">
            <input
              type="text"
              placeholder="Type Your Task "
              className="border px-2 py-2 rounded-md flex-1"
              onChange={(e) =>
                setText((prev) => ({ ...prev, text: e.target.value }))
              }
              value={task.text}
            />
            <select
              name=""
              value={task.category}
              id=""
              className="px-2 py-2 rounded-md"
              onChange={(e) =>
                setText((prev) => ({ ...prev, category: e.target.value }))
              }
            >
              <option value="Programming">Category</option>
              <option value="Programming">Programming</option>
              <option value="Personal">Personal</option>
              <option value="Important">Important</option>
            </select>
          </div>

          <Button text={"Add Task"} addTask={(e) => handleTask(task)} />
        </div>
        <Categories onClick={handleCategory} />
        <div className="flex flex-wrap -m-2">
          {tasks.map((task) => (
            <Todo
              task={task}
              key={task.id}
              deleteTask={() => deleteTask(task.id)}
              completeTask={isCompleted(task.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TodoList;

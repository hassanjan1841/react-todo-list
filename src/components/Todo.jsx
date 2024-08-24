import CloseButton from "./CloseButton";

const Todo = ({ task, deleteTask, completeTask = false }) => {
  return (
    <div className="p-2 lg:w-1/3 md:w-1/2 w-full ">
      <div
        className={`h-full flex items-center border-gray-200 border p-4 rounded-lg ${
          task.isCompleted ? "bg-green-300" : "bg-red-300"
        }`}
      >
        <div className="flex-grow">
          <h2 className="text-gray-900 title-font font-medium">{task.text}</h2>
          <p className="text-gray-500">{task.category}</p>
        </div>
        <div className="flex flex-col justify-between ">
          <input
            type="checkbox"
            className="m-2"
            name="isCompleted"
            checked={task.isCompleted}
            onChange={(e) => completeTask(e.target.checked)}
          />
          <CloseButton onClick={deleteTask} />
        </div>
      </div>
    </div>
  );
};

export default Todo;

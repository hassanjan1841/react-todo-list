import CloseButton from "./CloseButton";

const Todo = ({ task, deleteTask }) => {
  return (
    <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
      <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
        <div className="flex-grow">
          <h2 className="text-gray-900 title-font font-medium">
            {task.category}
          </h2>
          <p className="text-gray-500">{task.text}</p>
        </div>
        <CloseButton onClick={deleteTask} />
      </div>
    </div>
  );
};

export default Todo;

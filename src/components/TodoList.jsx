import Todo from "./Todo";

const TodoList = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="border p-2 flex items-center justify-between text-center w-full mb-20">
          <h1 className="flex-1 text-start sm:text-3xl text-2xl text-gray-900">
            Your Task
          </h1>
          <input
            type="text"
            placeholder="Type Your Task "
            className="border px-2 py-2 rounded-md flex-1"
          />
        </div>
        <div className="flex flex-wrap -m-2">
          <Todo />
        </div>
      </div>
    </section>
  );
};

export default TodoList;

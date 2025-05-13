import Menu from "../components/Menu";
import TodosComponent from "../components/Todo";
import { useData } from "../context/DataContext";

const TodosPage = () => {
  const { todos, loading, error } = useData();

    if (loading) return <p>Loading...</p>;


  return (
    <>
      <Menu />
      <div className="overflow-hidden bg-indigo-200 py-24 sm:py-6">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="lg:pt-4 lg:pr-8">
              <div className="lg:max-w-5xl">
                <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                  To-do List
                </p>
                <p className="mt-6 text-lg/8 text-gray-600">
                  View all of your tasks organised in a to-do list, organised by
                  their current status.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 sm:grid-cols-1 ">
              <div id="col-1">
                <p className="mt-6 text-lg/8 text-gray-600">
                  <strong>To Do</strong>
                </p>
                {error ? (
                  <div className="text-red-600 bg-red-100 p-4 rounded-md mt-4">
                    Error loading data
                  </div>
                ) : todos.length > 0 ? (
                  todos
                    .filter((todo) => todo.completed === false)
                    .map((todo) => (
                      <>
                        <TodosComponent
                          key={todo.id}
                          id={todo.id}
                          title={todo.title}
                          completed={todo.completed}
                        />
                      </>
                    ))
                ) : (
                  <p>Nothing on your to-do list.</p>
                )}
              </div>
              <div id="col-2">
                <p className="mt-6 text-lg/8 text-gray-600">
                  <strong>Done</strong>
                </p>
                {error ? (
                  <div className="text-red-600 bg-red-100 p-4 rounded-md mt-4">
                    Error loading data
                  </div>
                ) : todos.length > 0 ? (
                  todos
                    .filter((todo) => todo.completed === true)
                    .map((todo) => (
                      <>
                        <TodosComponent
                          key={todo.id}
                          id={todo.id}
                          title={todo.title}
                          completed={todo.completed}
                        />
                      </>
                    ))
                ) : (
                  <p>No finished tasks to view. </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodosPage;

import Menu from "../../components/Menu/Menu";
import { useData } from "../../context/DataContext";
import TodosComponent from "../../components/Todo/Todo";
import { useEffect, useState } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "@hello-pangea/dnd";
import { Todo } from "../../types";

const TodosPage = () => {
  const { todos, loading, error } = useData();

  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [doneList, setDoneList] = useState<Todo[]>([]);

  useEffect(() => {
    setTodoList(todos.filter((t) => !t.completed));
    setDoneList(todos.filter((t) => t.completed));
  }, [todos]);

  const handleDragEnd = async (result: DropResult) => {
    const { source, destination } = result;

    if (!destination) return;

    const sourceList =
      source.droppableId === "todo" ? [...todoList] : [...doneList];
    const destinationList =
      destination.droppableId === "todo" ? [...todoList] : [...doneList];

    const [movedItem] = sourceList.splice(source.index, 1);

    if (source.droppableId !== destination.droppableId) {
      movedItem.completed = !movedItem.completed;

      try {
        await fetch(`http://localhost:4000/api/todos/${movedItem.id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ completed: movedItem.completed }),
        }); //updates the status of the todo list
      } catch (err) {
        console.error("Failed to update todo status", err); //throws error if the status cannot be updated
      }
    }

    destinationList.splice(destination.index, 0, movedItem);

    setTodoList( //updates the todo status according to which column its being dragged in
      destination.droppableId === "todo" ? destinationList : sourceList
    );
    setDoneList(
      destination.droppableId === "done" ? destinationList : sourceList
    );
  };

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
                  their current status. <br />
                  <em>
                    Drag tasks between To Do and Done to update their status.
                  </em>
                </p>
              </div>
            </div>

            <DragDropContext onDragEnd={handleDragEnd}> 
              <div className="grid md:grid-cols-2 gap-4 sm:grid-cols-1 mt-10">
                <Droppable droppableId="todo">
                  {(provided) => (
                    <div
                      id="col-1"
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                      className="bg-indigo-100 p-4 rounded-md shadow min-h-[300px]"
                    >
                      <p className="text-xl font-semibold mb-4 text-gray-700">
                        To Do
                      </p>
                      {error ? (
                        <div className="text-red-600 bg-red-100 p-4 rounded-md mt-4">
                          Error loading data
                        </div>
                      ) : todoList.length > 0 ? (
                        todoList.map((todo, index) => (
                          <Draggable
                            key={todo.id}
                            draggableId={todo.id.toString()}
                            index={index}
                          >
                            {(provided) => (
                              <div
                                className="mb-2"
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                              >
                                <TodosComponent {...todo} />
                              </div>
                            )}
                          </Draggable>
                        ))
                      ) : (
                        <p>Nothing on your to-do list.</p>
                      )}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>

                <Droppable droppableId="done">
                  {(provided) => (
                    <div
                      id="col-2"
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                      className="bg-indigo-100 p-4 rounded-md shadow min-h-[300px]"
                    >
                      <p className="text-xl font-semibold mb-4 text-gray-700">
                        Done
                      </p>
                      {error ? (
                        <div className="text-red-600 bg-red-100 p-4 rounded-md mt-4">
                          Error loading data
                        </div>
                      ) : doneList.length > 0 ? (
                        doneList.map((todo, index) => (
                          <Draggable
                            key={todo.id}
                            draggableId={todo.id.toString()}
                            index={index}
                          >
                            {(provided) => (
                              <div
                                className="mb-2"
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                              >
                                <TodosComponent {...todo} />
                              </div>
                            )}
                          </Draggable>
                        ))
                      ) : (
                        <p>No finished tasks to view.</p>
                      )}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </div>
            </DragDropContext>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodosPage;

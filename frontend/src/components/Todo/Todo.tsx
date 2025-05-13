import { Link } from "react-router-dom";
import { Todo } from "../../types";

const TodoComponent: React.FC<Todo> = ({ id, title, completed }) => {
  return (
    <>
      <div
        className="max-w-sm rounded bg-white overflow-hidden shadow-lg mt-6"
        key={id}
      >
        <div className="px-6 py-2">
          <div className="font-bold text-l mb-2">{title}</div>
        </div>
        <div className="px-6 pt-1 pb-2">
          Status:
          <span
            className={
              completed === false ? "text-red-500 mr-2" : "text-green-500 mr-2"
            }
          >
            {" "}
            <strong>{completed === false ? "To do" : "Done"}</strong>
          </span>
        </div>
      </div>
    </>
  );
};

export default TodoComponent;

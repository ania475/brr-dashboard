import { Ticket } from "../types";

const TicketComponent: React.FC<Ticket> = ({
  id,
  user,
  issue,
  description,
  status,
  created,
}) => {
  return (
    <>
      <div
        className="max-w-sm rounded bg-white overflow-hidden shadow-lg mt-6"
        key={id}
      >
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="font-bold text-l mb-2">{issue}</div>
            <button className="font-semibold rounded-lg border-red-500 border px-3 text-sm inline-block lg:h-6 sm:h-20 inline-block bg-white float-right text-red-500 lg:text-xs sm:text-sm">
              Delete
            </button>
          </div>
          <p className="text-gray-700 text-base">{user}</p>
          <p className="text-gray-700 text-base">
            {description.length > 70
              ? description.substring(0, 70).concat("...")
              : description}
          </p>
          <p className="text-gray-400 text-base">
            Created: {new Date(created).toLocaleString()}
          </p>
        </div>
        <div className="px-6 pt-1 pb-2">
          <strong> Status: </strong>
          <span
            className={`inline-block ${
              status === "Open"
                ? "bg-green-500"
                : status === "In Progress"
                ? "bg-yellow-300"
                : "bg-red-500"
            } rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2`}
          >
            {status}
          </span>
        </div>
      </div>
    </>
  );
};

export default TicketComponent;

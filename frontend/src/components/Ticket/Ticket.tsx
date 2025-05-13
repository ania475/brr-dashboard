import { useState } from "react";
import { Ticket } from "../../types";
import DeleteTicketModal from "../DeleteTicketModal/DeleteTicketModal";

const TicketComponent: React.FC<Ticket> = ({
  id,
  user,
  issue,
  description,
  status,
  created,
}) => {
  const [renderModal, setRenderModal] = useState(false);

  const handleDeleteTicket = async () => {
    try {
      const response = await fetch(`http://localhost:4000/api/tickets/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete ticket");
      }

      setRenderModal(false);
      window.location.reload();
    } catch (error) {
      console.error("Error deleting ticket:", error);
    }
  };

  return (
    <>
      <div
        className="max-w-sm rounded bg-white overflow-hidden shadow-lg mt-6"
        key={id}
      >
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="font-bold text-l mb-2">{issue}</div>
            <button
              className="font-semibold rounded-lg border-gray-500 border px-3 text-sm inline-block lg:h-6 sm:h-20 inline-block bg-white float-right text-gray-500 lg:text-xs sm:text-sm"
              onClick={() => setRenderModal(true)}
            >
              Delete
            </button>
            {renderModal && (
              <>
                <DeleteTicketModal
                  renderModal={renderModal}
                  onClose={() => setRenderModal(false)}
                  onSubmit={handleDeleteTicket}
                />
              </>
            )}
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

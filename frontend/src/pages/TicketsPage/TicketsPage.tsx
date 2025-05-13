import { useState } from "react";
import AddTicketModal from "../../components/AddTicketModal/AddTicketModal";
import Menu from "../../components/Menu/Menu";
import TicketComponent from "../../components/Ticket/Ticket";
import { useData } from "../../context/DataContext";
import { Ticket, TicketInput } from "../../types";

const TicketsPage = () => {
  const { tickets, loading, error, setNewTickets } = useData();
  const [renderModal, setRenderModal] = useState(false);

  const handleNewTicket = async (ticket: TicketInput) => {
    console.log("ticket", ticket);
    try {
      const response = await fetch("http://localhost:4000/api/tickets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(ticket),
      });

      if (!response.ok) {
        throw new Error("Failed to create ticket");
      }

      const savedTicket = await response.json();

      setNewTickets((prevTickets) => [...prevTickets, savedTicket]);

      setRenderModal(false);

      window.location.reload();
    } catch (error) {
      console.error("Error creating ticket:", error);
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <Menu />
      <div className="overflow-hidden bg-indigo-200 py-24 sm:py-6">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="lg:pt-4 lg:pr-8">
              <div className="lg:max-w-2xl">
                <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                  Tickets
                </p>
                <div className="flex items-center justify-between">
                  <p className="mt-6 text-lg/8 text-gray-600">
                    View all of the tickets below, organised by their current
                    status.
                  </p>
                  <button
                    className="font-semibold bg-white text-blue-500 rounded-xl border-blue-500 border px-3 py-1 text-sm inline-block lg:h-12 sm:h-20"
                    onClick={() => setRenderModal(true)}
                  >
                    Create new ticket
                  </button>
                  {renderModal && (
                    <>
                      <AddTicketModal
                        renderModal={renderModal}
                        onClose={() => setRenderModal(false)}
                        onSubmit={handleNewTicket}
                      />
                    </>
                  )}
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 sm:grid-cols-1 ">
              <div id="col-1">
                <p className="mt-6 text-lg/8 text-gray-600">
                  <strong>Open</strong>
                </p>
                {error ? (
                  <div className="text-red-600 bg-red-100 p-4 rounded-md mt-4">
                    Error loading data
                  </div>
                ) : tickets.length > 0 ? (
                  tickets
                    .filter((ticket) => ticket.status === "Open")
                    .map((ticket) => (
                      <>
                        <TicketComponent
                          key={ticket.id}
                          id={ticket.id}
                          issue={ticket.issue}
                          description={ticket.description}
                          created={ticket.created}
                          user={ticket.user}
                          status={ticket.status}
                        />
                      </>
                    ))
                ) : (
                  <p>No open tickets. Check back later</p>
                )}
              </div>
              <div id="col-2">
                <p className="mt-6 text-lg/8 text-gray-600">
                  <strong>In progress</strong>
                </p>
                {error ? (
                  <div className="text-red-600 bg-red-100 p-4 rounded-md mt-4">
                    Error loading data
                  </div>
                ) : tickets.length > 0 ? (
                  tickets
                    .filter((ticket) => ticket.status === "In Progress")
                    .map((ticket) => (
                      <>
                        <TicketComponent
                          key={ticket.id}
                          id={ticket.id}
                          issue={ticket.issue}
                          description={ticket.description}
                          created={ticket.created}
                          user={ticket.user}
                          status={ticket.status}
                        />
                      </>
                    ))
                ) : (
                  <p>No in progress tickets. Check back later.</p>
                )}
              </div>
              <div id="col-3">
                <p className="mt-6 text-lg/8 text-gray-600">
                  <strong>Resolved</strong>
                </p>
                {error ? (
                  <div className="text-red-600 bg-red-100 p-4 rounded-md mt-4">
                    Error loading data
                  </div>
                ) : tickets.length > 0 ? (
                  tickets
                    .filter((ticket) => ticket.status === "Resolved")
                    .map((ticket) => (
                      <>
                        <TicketComponent
                          key={ticket.id}
                          id={ticket.id}
                          issue={ticket.issue}
                          description={ticket.description}
                          created={ticket.created}
                          user={ticket.user}
                          status={ticket.status}
                        />
                      </>
                    ))
                ) : (
                  <p>No resolved tickets. Check back later.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TicketsPage;

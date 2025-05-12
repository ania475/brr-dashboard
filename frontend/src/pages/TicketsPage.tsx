import Menu from "../components/Menu";
import TicketComponent from "../components/Ticket";
import { useData } from "../context/DataContext";

const TicketsPage = () => {
  const { tickets, todos, loading, error } = useData();

  return (
    <>
      <Menu />
      <div className="overflow-hidden bg-indigo-200 py-24 sm:py-6">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="lg:pt-4 lg:pr-8">
              <div className="lg:max-w-lg">
                <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                  Tickets
                </p>
                <p className="mt-6 text-lg/8 text-gray-600">
                  View all of the tickets below, organised by their current
                  status.
                </p>
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
                  <p>No new updates. Check back later.</p>
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
                  <p>No new updates. Check back later.</p>
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
                  <p>No new updates. Check back later.</p>
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

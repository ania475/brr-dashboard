import { smilingMan } from "../../assets";
import TicketComponent from "../../components/Ticket/Ticket";
import TodoComponent from "../../components/Todo/Todo";
import StaffComponent from "../../components/Staff/Staff";
import { useData } from "../../context/DataContext";
import { Link } from "react-router-dom";

const Home = () => {
  const { tickets, todos, loading, error, newJoiners } = useData();

  const openTickets = tickets.filter((ticket) => ticket.status === "Open"); //getting the tickets with status of Open
  const pendingTasks = todos.filter((todo) => todo.completed === false); //getting the tickets with status of Open

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <div className="overflow-hidden bg-white py-24 sm:py-6">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pt-4 lg:pr-8">
              <div className="lg:max-w-lg">
                <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                  Welcome
                </p>
                <p className="mt-6 text-lg/8 text-gray-600">
                  This is The Dashboard. Your home for managing the most
                  important things for your company.
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                  <div className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <svg
                        className="absolute top-1 left-1 size-5 text-indigo-600"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        data-slot="icon"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.5 17a4.5 4.5 0 0 1-1.44-8.765 4.5 4.5 0 0 1 8.302-3.046 3.5 3.5 0 0 1 4.504 4.272A4 4 0 0 1 15 17H5.5Zm3.75-2.75a.75.75 0 0 0 1.5 0V9.66l1.95 2.1a.75.75 0 1 0 1.1-1.02l-3.25-3.5a.75.75 0 0 0-1.1 0l-3.25 3.5a.75.75 0 1 0 1.1 1.02l1.95-2.1v4.59Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      View tasks{" - "}
                    </dt>
                    <dd className="inline">
                      Navigate to the To-do List tab in the menu to view all of
                      your tasks.
                    </dd>
                  </div>
                  <div className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <svg
                        className="absolute top-1 left-1 size-5 text-indigo-600"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        data-slot="icon"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 1a4.5 4.5 0 0 0-4.5 4.5V9H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-.5V5.5A4.5 4.5 0 0 0 10 1Zm3 8V5.5a3 3 0 1 0-6 0V9h6Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      Manage tickets{" - "}
                    </dt>
                    <dd className="inline">
                      Navigate to the Tickets tab in the menu to view all of
                      your tasks.
                    </dd>
                  </div>
                  <div className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <svg
                        className="absolute top-1 left-1 size-5 text-indigo-600"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        data-slot="icon"
                      >
                        <path d="M4.632 3.533A2 2 0 0 1 6.577 2h6.846a2 2 0 0 1 1.945 1.533l1.976 8.234A3.489 3.489 0 0 0 16 11.5H4c-.476 0-.93.095-1.344.267l1.976-8.234Z" />
                        <path
                          fill-rule="evenodd"
                          d="M4 13a2 2 0 1 0 0 4h12a2 2 0 1 0 0-4H4Zm11.24 2a.75.75 0 0 1 .75-.75H16a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75h-.01a.75.75 0 0 1-.75-.75V15Zm-2.25-.75a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75H13a.75.75 0 0 0 .75-.75V15a.75.75 0 0 0-.75-.75h-.01Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      View Staff{" - "}
                    </dt>
                    <dd className="inline">
                      Navigate to the Staff tab in the menu to view all of
                      information about all of the current staff members.
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
            <img
              src={smilingMan}
              alt="Product screenshot"
              className="w-[40rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
              width="2432"
              height="1442"
            />
          </div>
        </div>
      </div>

      <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded-sm md:my-10 dark:bg-gray-700" />

      <div className="overflow-hidden bg-indigo-100 py-24 sm:py-6">
        <div className="mx-auto max-w-7xl px-6 lg:px-8"></div>
      </div>

      {/*Quick Summary */}

      {/* <div className="overflow-hidden bg-indigo-100 py-24 sm:py-6 mb-6">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl gap-x-8 lg:mx-0 lg:max-w-none">
            <div className="lg:pt-4 lg:pr-8">
              <div className="lg:max-w-lg">
                <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                  Quick Summary
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-4 sm:grid-cols-1 ">
              <div id="col-1">
                <p className="mt-6 text-lg/8 text-gray-600">Open Tickets</p>

                {error ? (
                  <div className="text-red-600 bg-red-100 p-4 rounded-md mt-4">
                    Error loading data
                  </div>
                ) : openTickets.length > 0 ? (
                  openTickets.map((ticket) => (
                    <Link to="/tickets">
                      <TicketComponent
                        key={ticket.id}
                        id={ticket.id}
                        issue={ticket.issue}
                        description={ticket.description}
                        created={ticket.created}
                        user={ticket.user}
                        status={ticket.status}
                      />
                    </Link>
                  ))
                ) : (
                  <p>No open tickets right now. Check back later.</p>
                )}
              </div>
              <div id="col-2">
                <p className="mt-6 text-lg/8 text-gray-600">Pending Tasks</p>
                {error ? (
                  <div className="text-red-600 bg-red-100 p-4 rounded-md mt-4">
                    Error loading data
                  </div>
                ) : pendingTasks.length > 0 ? (
                  pendingTasks.map((ticket) => (
                    <Link to="/todos">
                      <TodoComponent
                        key={ticket.id}
                        id={ticket.id}
                        title={ticket.title}
                        completed={ticket.completed}
                      />
                    </Link>
                  ))
                ) : (
                  <p>No open tickets right now. Check back later.</p>
                )}
              </div>
              <div id="col-3">
                <p className="mt-6 text-lg/8 text-gray-600">Latest Updates</p>
                {error ? (
                  <div className="text-red-600 bg-red-100 p-4 rounded-md mt-4">
                    Error loading data
                  </div>
                ) : newJoiners.length > 0 ? (
                  newJoiners.map((newJoiner) => (
                    <Link to="/staff">
                      <StaffComponent
                        key={newJoiner.id}
                        id={newJoiner.id}
                        name={newJoiner.name}
                        photo={newJoiner.photo}
                        email={newJoiner.email}
                        role={newJoiner.role}
                        joinedDate={newJoiner.joinedDate}
                      />
                    </Link>
                  ))
                ) : (
                  <p>No new updates. Check back later.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div> */}
      
    </>
  );
};

export default Home;

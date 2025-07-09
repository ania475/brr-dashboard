import { smilingMan } from "../../assets";
import TicketComponent from "../../components/Ticket/Ticket";
import TodoComponent from "../../components/Todo/Todo";
import StaffComponent from "../../components/Staff/Staff";
import { useData } from "../../context/DataContext";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ClipboardList, Ticket, Users } from "lucide-react";

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
                <p className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none justify-between">
                  <ClipboardList color="#5a67d8" />
                  <p className="inline font-semibold text-gray-900">
                    View tasks{" - "}
                  </p>
                  <p className="inline">
                    Navigate to the To-do List tab in the menu to view all of
                    your tasks.
                  </p>

                  <Ticket color="#5a67d8" />

                  <p className="inline font-semibold text-gray-900">
                    Manage tickets{" - "}
                  </p>
                  <p className="inline">
                    Navigate to the Tickets tab in the menu to view all of your
                    tasks.
                  </p>

                  <Users color="#5a67d8" />

                  <p className="inline font-semibold text-gray-900">
                    View Staff{" - "}
                  </p>
                  <p className="inline">
                    Navigate to the Staff tab in the menu to view all of
                    information about all of the current staff members.
                  </p>

                  <div className="flex flex-wrap items-center gap-2 md:flex-row">
                    <Button className="bg-indigo-600 font-bold p-6 text-lg">
                      Get started for free
                    </Button>
                  </div>
                </p>
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

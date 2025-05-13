import { useState } from "react";
import { Ticket, TicketInput } from "../types";

type AddTicketModalProps = {
  renderModal: boolean;
  onClose: () => void;
  onSubmit: (ticket: TicketInput) => void;
};

const AddTicketModal: React.FC<AddTicketModalProps> = ({
  renderModal,
  onClose,
  onSubmit,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const options = ["Account issue", "Internet issue", "Tool issue", "Other"];
  const [selected, setSelected] = useState("Options");
  const [description, setDescription] = useState("");

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const newTicket: TicketInput = {
      user: "localuser",
      issue: selected,
      description,
      status: "Open",
      created: new Date().toISOString(),
    };

    onSubmit(newTicket);

    // Reload the page to fetch new data (or call context update function)
    window.location.reload();
  };

  if (!renderModal) return null;
  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal={renderModal}
    >
      <div
        className="fixed inset-0 bg-gray-500/75 transition-opacity"
        aria-hidden="true"
      ></div>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3
                    className="text-base font-semibold text-gray-900"
                    id="modal-title"
                  >
                    Add New Ticket
                  </h3>
                  <div className="mt-2">
                    <form className="w-full max-w-sm">
                      <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                          <label
                            className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                            htmlFor="inline-full-name"
                          >
                            Issue type *
                          </label>
                        </div>
                        <div className="md:w-2/3">
                          <div className="relative inline-block text-left">
                            <div>
                              <button
                                type="button"
                                onClick={() => setIsOpen((prev) => !prev)}
                                className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
                              >
                                {selected}
                                <svg
                                  className="-mr-1 ml-2 h-5 w-5"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  aria-hidden="true"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.293l3.71-4.06a.75.75 0 111.08 1.04l-4.25 4.65a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </button>
                            </div>

                            {isOpen && (
                              <div
                                className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5"
                                role="menu"
                                aria-orientation="vertical"
                              >
                                <div className="py-1" role="none">
                                  {options.map((option, index) => (
                                    <button
                                      key={index}
                                      onClick={() => {
                                        setSelected(option);
                                        setIsOpen(false);
                                      }}
                                      className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                                      role="menuitem"
                                    >
                                      {option}
                                    </button>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                          <label
                            className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                            htmlFor="inline-password"
                          >
                            Description *
                          </label>
                        </div>
                        <div className="md:w-2/3">
                          <textarea
                            id="message"
                            rows={4}
                            className="g-gray-200 border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
                            placeholder="Describe your issue here..."
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                          ></textarea>
                        </div>
                      </div>

                      <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                          <label
                            className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                            htmlFor="file_input"
                          >
                            Upload file
                          </label>
                        </div>
                        <input
                          className="g-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight"
                          id="file_input"
                          type="file"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="submit"
                className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-green-500 sm:ml-3 sm:w-auto"
                onClick={handleSubmit}
              >
                Submit Request
              </button>

              <button
                type="button"
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto"
                onClick={onClose}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTicketModal;

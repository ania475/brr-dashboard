import { render, screen, fireEvent } from "@testing-library/react";
import AddTicketModal from "./AddTicketModal";
import { Ticket } from "../../types";

describe("AddTicketModal", () => {
  const mockOnSubmit = jest.fn();
  const mockOnClose = jest.fn();


  it("renders when renderModal is true", () => {
    render(
      <AddTicketModal
        renderModal={true}
        onClose={mockOnClose}
        onSubmit={mockOnSubmit}
      />
    );
    expect(screen.getByText("Add New Ticket")).toBeInTheDocument();
  });

  it("does not render when renderModal is false", () => {
    const { container } = render(
      <AddTicketModal
        renderModal={false}
        onClose={mockOnClose}
        onSubmit={mockOnSubmit}
      />
    );
    expect(container.firstChild).toBeNull();
  });

  it("submits the form with selected issue and description", () => {
    render(
      <AddTicketModal
        renderModal={true}
        onClose={mockOnClose}
        onSubmit={mockOnSubmit}
      />
    );

    fireEvent.click(screen.getByText("Options"));
    fireEvent.click(screen.getByText("Account issue"));

    fireEvent.change(screen.getByPlaceholderText("Describe your issue here..."), {
      target: { value: "Test issue description" },
    });

    fireEvent.click(screen.getByText("Submit Request"));

    expect(mockOnSubmit).toHaveBeenCalled();
    const submittedTicket: Ticket = mockOnSubmit.mock.calls[0][0];
    expect(submittedTicket.issue).toBe("Account issue");
    expect(submittedTicket.description).toBe("Test issue description");
  });
});

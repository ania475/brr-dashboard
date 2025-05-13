import { render, screen } from "@testing-library/react";
import TicketComponent from "./Ticket";
import { Ticket } from "../../types";

const mockTicket: Ticket = {
  id: 1,
  user: "john.doe",
  issue: "Internet issue",
  description: "Cannot connect to WiFi.",
  status: "Open",
  created: new Date().toISOString(),
};

describe("TicketComponent", () => {
  it("renders ticket details", () => {
    render(<TicketComponent {...mockTicket} />);
    expect(screen.getByText("Internet issue")).toBeInTheDocument();
    expect(screen.getByText("john.doe")).toBeInTheDocument();
    expect(screen.getByText(/Cannot connect to WiFi/)).toBeInTheDocument();
    expect(screen.getByText("Open")).toBeInTheDocument();
  });

  it("renders Delete button", () => {
    render(<TicketComponent {...mockTicket} />);
    expect(screen.getByText("Delete")).toBeInTheDocument();
  });
});

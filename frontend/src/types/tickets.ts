export interface Ticket {
    id: number;
    user: string;
    issue: string;
    description: string;
    status: 'Open' | 'In Progress' | 'Resolved';
    created: string;
  }

  // Add this helper type for creation:
export type TicketInput = Omit<Ticket, "id">;
  
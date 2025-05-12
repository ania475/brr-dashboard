export interface Ticket {
    id: number;
    user: string;
    issue: string;
    description: string;
    status: 'Open' | 'In Progress' | 'Resolved';
    created: string;
  }
  
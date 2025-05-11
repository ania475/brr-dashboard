export interface Ticket {
    id: number;
    user: string;
    issue: string;
    description: string;
    status: 'Open' | 'Closed' | 'In Progress';
    created: string;
  }
  
export interface Staff {
    id: number;
    name: string;
    role: string;
    email: string;
    staff: 'active' | 'inactive';
    lastLogin: string;
    driveUsage: string;
    device: string;
  }
  
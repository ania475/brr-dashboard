export interface Staff {
  id: number;
  name: string;
  role: string;
  email: string;
  status?: "active" | "inactive";
  lastLogin?: string;
  driveUsage?: string;
  device?: string;
  photo?: string;
  joinedDate: string;
}

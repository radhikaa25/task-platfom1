export interface Task {
    id: string;
    title: string;
    description: string;
    amount: number;
    status: string;
    companyId: string;
    assignedTo?: string;
  }
  
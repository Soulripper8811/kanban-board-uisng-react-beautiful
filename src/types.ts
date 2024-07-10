export type Createtask = {
  title: string;
  description: string;
  stage: string;
  company_id?: string;
  contact?: string;
  due: string;
  created_by_id: string;
  assigned_to: string[];
};

enum Stage {
  "Done",
  "InProgress",
  "Completed",
  "Pause",
}

export type AssignedTo = {
  name: string;
  email: string;
};

export type Tasks = {
  id: string;
  title: string;
  description: string;
  stage: Stage;
  contact_id?: string;
  company_id?: string;
  due: string;
  created_by_id: string;
  created_at: string;
  assigned_to: AssignedTo[];
};

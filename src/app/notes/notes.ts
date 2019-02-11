import { Timestamp } from "rxjs";

export class Notes {
  user: string;
  notes: string;
}
export class getNotes {
  id: number;
  user: string;
  notes: string;
  createdAt: string;
  updatedAt: string;
}


export class deleteNotes {
  mes: string;
  status: number;
}
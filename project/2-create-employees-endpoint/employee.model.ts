export interface Employee {
  id: string; // format: UUID v4
  firstname: string;
  lastname: string;
  role: string; // example: "Product Owner"
  department: string; // example: "LoB"
  place: string; // GS, example: "Stuttgart"
  hiredOn: number; // Year of hire, example: 2017
}

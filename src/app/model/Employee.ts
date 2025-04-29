export class Employee {
  id?: number;
  name: string;
  department: string;
  email: string;

  constructor(name: string, email: string, department: string, id?: number) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.department = department;
  }
}

export class Employee {
  id?: number;
  name: string;
  department: string;
  email: string;

  constructor(name: string, department: string, email: string, id?: number) {
    this.id = id;
    this.name = name;
    this.department = department;
    this.email = email;
  }
}

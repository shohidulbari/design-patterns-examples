// All the base class property should be applicable to child class
// Either the parent class is okay, or override it in clild class
// Or remove it from parent class

class Employee {
  salary() {
    return 50000;
  }
  bonus() {
    return 25000;
  }
}

class PermanentEmployee extends Employee {
  salary(){
    return 50000 + 10000;
  }
  bonus() {
    return 25000 + 5000;
  }
}

class ContractualEmployee extends Employee {
  salary() {
    return 30000;
  }
  // bonus shouldn't be here, Violating LSP
}


const employee = new Employee()
console.log(employee.salary())
console.log(employee.bonus())

const pEmployee = new PermanentEmployee()
console.log(pEmployee.salary());
console.log(pEmployee.bonus());

const cEmployee = new ContractualEmployee()
console.log(cEmployee.salary());
console.log(cEmployee.bonus()); // 25000!

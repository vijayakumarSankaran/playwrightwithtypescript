"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Employee = /** @class */ (function () {
    function Employee(name, salary) {
        this.name = name; // Global implemation
        this.salary = salary;
        console.log(this.salary);
    }
    Employee.prototype.empDetails = function () {
        var a = 10.; // implementation
        console.log("Employee name is: ".concat(this.name));
        console.log("Employee slary is: ".concat(this.salary));
        console.log('the value of a is:' + a);
    };
    return Employee;
}());
var emp = new Employee("xyz", 31312);
emp.empDetails();

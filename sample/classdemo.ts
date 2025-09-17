class Employee{
    name:string; 
    salary:number;

    constructor(name:string, salary:number){
        this.name = name;
        this.salary = salary;
       console.log(this.salary);
       
    }

    empDetails(){
        let a = 10; 
        console.log(`Employee name is: ${this.name}`);
        console.log(`Employee slary is: ${this.salary}`);
        console.log('the value of a is:'+  a);
        
    }
}
const emp = new Employee("xyz",31312)
emp.empDetails()


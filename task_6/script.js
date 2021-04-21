class Person {
    constructor(name, surname) {
        this.name = {
            title: 'Name: ',
            value: name
        };
        this.surname = {
            title: 'Surname: ',
            value: surname
        };
    }

    show() {
        for (let item in this) {
            console.log(this[item].title + this[item].value);
        }
    }
}

class Student extends Person {
    constructor (dateOfBirth, course, ...args) {
        super(...args);
        this.dateOfBirth = {
            title: 'Date of Birth: ',
            value: dateOfBirth
        };
        this.course = {
            title: 'Course: ',
            value: course
        }
    }
    
}

class Employee extends Person {
    constructor (salary, salaryList, ...args) {
        super(...args);
        this.salary = {
            title: 'Salary: ',
            value: salary
        };
        this.salaryList = {
            title: 'Salary list: ',
            value: salaryList
        };
        
    }
    
}

class Manager extends Employee {
    constructor(subordinateList, ...args) {
        super(...args);
        this.subordinateList = {
            title: 'Subordinate list: ',
            value: subordinateList
        }
    }
}
class ManagerS  {
    constructor(employee, subordinateList) {
        Object.assign(this, employee);
        this.__proto__ = employee;
        this.subordinateList = {
            title: 'Subordinate list: ',
            value: subordinateList
        };
    }
}

// new Person('Vladimir', 'Saigak').show();

// new Student('27.02.1400', '5', 'Vladimir', 'Saigak').show();

let salaryList = ['10 января получил 20 000', '10 февраля получил 110 000 рублей'],
    subordinateList = ['Saigak', 'Ivanov', 'Terehov', 'Smith', 'Groznii'];

// new Employee('100000', salaryList, 'Vladimir', 'Saigak').show();


// new Manager(subordinateList, 'Vladimir', 'Saigak', '100000', salaryList).show();

new ManagerS(new Employee('100000', salaryList, 'Vladimir', 'Saigak'), subordinateList).show();

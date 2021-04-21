import {Person} from './Person';

export class Employee extends Person {
    constructor (salary, salaryList, ...args) {
        super(...args);
        this.type = {
            title: 'Type: ',
            value: 'Employee'
        };
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
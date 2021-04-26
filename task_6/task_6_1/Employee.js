import {Person} from './Person';

export class Employee extends Person {
    constructor (salary, salaryList, ...args) {
        super(...args);
        this._type = {
            title: 'Type: ',
            value: 'Employee'
        };
        this._salary = {
            title: 'Salary: ',
            value: salary
        };
        this._salaryList = {
            title: 'Salary list: ',
            value: salaryList
        };
        
    }

    get salary() {
        return this._salary.value;
    }

    get salaryList() {
        return this._salaryList.value;
    }

    paySalary(value = this._salary.value) {
        let date = this.formatDate(new Date());
        this._salaryList.value.push(`${date} получил ${value} рублей`);
    }
    
}
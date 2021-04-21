import {Employee} from './Employee';

export class Manager extends Employee {
    constructor(subordinateList, ...args) {
        super(...args);
        this.type = {
            title: 'Type: ',
            value: 'Manager'
        };
        this.subordinateList = {
            title: 'Subordinate list: ',
            value: subordinateList
        }
    }
}

export class ManagerS  {
    constructor(employee, subordinateList) {
        Object.assign(this, employee);
        this.__proto__ = employee;
        this.type = {
            title: 'Type: ',
            value: 'ManagerS'
        };
        this.subordinateList = {
            title: 'Subordinate list: ',
            value: subordinateList
        };
    }
}
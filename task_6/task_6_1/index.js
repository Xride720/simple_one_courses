import {Person} from './Person';
import {Student} from './Student';
import {Employee} from './Employee';
import {Manager} from './Manager';
let salaryList = ['10 января получил 20 000', '10 февраля получил 110 000 рублей'];
let subordinateList = [new Employee('100000', salaryList.slice(0), 'Sergey', 'Saigak'),
    new Employee('200000', salaryList.slice(0), 'Vladimir', 'Trofimov')];


export default class Task {
    constructor () {
        
        this.arr = [
            new Person('Anders', 'Smith'),
            new Student('27.02.1996', '5', 'Vladimir', 'Saigak'),
            new Employee('100000', salaryList.slice(0), 'Vladimir', 'Saigak'),
            new Manager(subordinateList, '100000', salaryList.slice(0), 'Vladimir', 'Saigak')
        ];
        
    }
    show() {
        this.arr.forEach(item => item.show());
    }

    changePerson() {
        let person = this.arr[0];
        console.log(person.fullName);
        person.name = 'Andrei';
        person.surname = 'Bikov';        
        person.show();
    }

    changeStudent() {
        let student = this.arr[1];
        console.log(student.info);
        student.dateOfBirth = '21.01.21';
        student.show();
        console.log(student.info);
    }

    changeEmployee() {
        let employee = this.arr[2];
        console.log(employee.salaryList);
        employee.paySalary();
        employee.paySalary(1000);
        console.log(employee.salaryList);
    }

    changeManager() {
        let manager = this.arr[3];
        console.log(manager.subordinateList);
        manager.addSubordinate(new Employee('130000', [], 'Alesha', 'Popovich'));
        console.log(manager.subordinateList);
        manager.showSubordinate();
        manager.paySubordinateSalary();
        manager.showSubordinate();
        let salaryObj = {
            'Vladimir Trofimov' : 200000,
            'Sergey Saigak' : 150000,
            'Alesha Popovich' : 450000,
        };
        manager.paySubordinateSalary('custom', salaryObj);
        manager.showSubordinate();
    }
}
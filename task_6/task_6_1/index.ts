import {Person} from './Person';
import {Student} from './Student';
import {Employee} from './Employee';
import {Manager} from './Manager';

type People = {
    person : Person;
    student : Student;
    employee : Employee;
    manager : Manager;
};

interface SalaryObj  {
    [index: string] : string;
};

let salaryList : string[] = ['10 января получил 20 000', '10 февраля получил 110 000 рублей'];
let subordinateList : Employee[] = [
    new Employee('100000', salaryList.slice(0), 'Sergey', 'Saigak'),
    new Employee('200000', salaryList.slice(0), 'Vladimir', 'Trofimov'),
    new Employee('300000', [], 'Vlad', 'Komov')
];


export default class Task {
    people : People;
    constructor () {
        this.people = {
            person :new Person('Anders', 'Smith'),
            student : new Student('27.02.1996', '5', 'Vladimir', 'Saigak'),
            employee : new Employee('100000', salaryList.slice(0), 'Vladimir', 'Saigak'),
            manager : new Manager(subordinateList, '100000', salaryList.slice(0), 'Vladimir', 'Saigak'),
        };
    }
    show() : void {
        for (let item in this.people) {
            this.people[item].show();
        }
    }
    count() : void {
        for (let item in this.people) {
            console.log(this.people[item].count)
        }
    }

    changePerson() : void {
        let person : Person = this.people.person;
        console.log(person.fullName);
        person.name = 'Andrei';
        person.surname = 'Bikov';        
        person.show();
    }

    changeStudent() : void {
        let student : Student = this.people.student;
        console.log(student.infoStudent);
        student.dateOfBirth = '21.01.21';
        student.show();
        console.log(student.infoStudent);
    }

    changeEmployee() : void {
        let employee : Employee = this.people.employee;
        console.log(employee.salaryList);
        employee.paySalary();
        employee.paySalary('1000');
        console.log(employee.salaryList);
    }

    changeManager() : void {
        let manager : Manager = this.people.manager;
        console.log(manager.subordinateList);
        manager.addSubordinate(new Employee('130000', [], 'Alesha', 'Popovich'));
        console.log(manager.subordinateList);
        manager.showSubordinate();
        manager.paySubordinateSalary();
        manager.showSubordinate();
        let salaryObj : SalaryObj = {
            'Vladimir Trofimov' : '200000',
            'Sergey Saigak' : '150000',
            'Alesha Popovich' : '450000',
        };
        manager.paySubordinateSalary('custom', salaryObj);
        manager.showSubordinate();
    }
}
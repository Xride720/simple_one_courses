"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person_1 = require("./Person");
var Student_1 = require("./Student");
var Employee_1 = require("./Employee");
var Manager_1 = require("./Manager");
;
var salaryList = ['10 января получил 20 000', '10 февраля получил 110 000 рублей'];
var subordinateList = [
    new Employee_1.Employee('100000', salaryList.slice(0), 'Sergey', 'Saigak'),
    new Employee_1.Employee('200000', salaryList.slice(0), 'Vladimir', 'Trofimov'),
    new Employee_1.Employee('300000', [], 'Vlad', 'Komov')
];
var Task = /** @class */ (function () {
    function Task() {
        this.people = {
            person: new Person_1.Person('Anders', 'Smith'),
            student: new Student_1.Student('27.02.1996', '5', 'Vladimir', 'Saigak'),
            employee: new Employee_1.Employee('100000', salaryList.slice(0), 'Vladimir', 'Saigak'),
            manager: new Manager_1.Manager(subordinateList, '100000', salaryList.slice(0), 'Vladimir', 'Saigak'),
        };
    }
    Task.prototype.show = function () {
        for (var item in this.people) {
            this.people[item].show();
        }
    };
    Task.prototype.count = function () {
        for (var item in this.people) {
            console.log(this.people[item].count);
        }
    };
    Task.prototype.changePerson = function () {
        var person = this.people.person;
        console.log(person.fullName);
        person.name = 'Andrei';
        person.surname = 'Bikov';
        person.show();
    };
    Task.prototype.changeStudent = function () {
        var student = this.people.student;
        console.log(student.infoStudent);
        student.dateOfBirth = '21.01.21';
        student.show();
        console.log(student.infoStudent);
    };
    Task.prototype.changeEmployee = function () {
        var employee = this.people.employee;
        console.log(employee.salaryList);
        employee.paySalary();
        employee.paySalary('1000');
        console.log(employee.salaryList);
    };
    Task.prototype.changeManager = function () {
        var manager = this.people.manager;
        console.log(manager.subordinateList);
        manager.addSubordinate(new Employee_1.Employee('130000', [], 'Alesha', 'Popovich'));
        console.log(manager.subordinateList);
        manager.showSubordinate();
        manager.paySubordinateSalary();
        manager.showSubordinate();
        var salaryObj = {
            'Vladimir Trofimov': '200000',
            'Sergey Saigak': '150000',
            'Alesha Popovich': '450000',
        };
        manager.paySubordinateSalary('custom', salaryObj);
        manager.showSubordinate();
    };
    return Task;
}());
exports.default = Task;

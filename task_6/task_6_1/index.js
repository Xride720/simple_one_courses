import {Person} from './Person';
import {Student} from './Student';
import {Employee} from './Employee';
import {Manager, ManagerS} from './Manager';
const salaryList = ['10 января получил 20 000', '10 февраля получил 110 000 рублей'];
const subordinateList = ['Saigak', 'Ivanov', 'Terehov', 'Smith', 'Groznii'];


export default class Task {
    constructor () {
        
        this.arr = [
            new Person('Anders', 'Smith'),
            new Student('27.02.1400', '5', 'Vladimir', 'Saigak'),
            new Employee('100000', salaryList, 'Vladimir', 'Saigak'),
            new Manager(subordinateList, '100000', salaryList, 'Vladimir', 'Saigak'),
            new ManagerS(new Employee('100000', salaryList, 'Vladimir', 'Saigak'), subordinateList)
        ];
        
    }
    show() {
        this.arr.forEach(item => item.show());
    }
}
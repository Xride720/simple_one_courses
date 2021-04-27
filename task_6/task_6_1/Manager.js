import {Employee} from './Employee';

export class Manager extends Employee {
    static count = 0;
    constructor(subordinateList, ...args) {
        super(...args);
        Manager.count++;
        this._type = {
            title: 'Type: ',
            value: 'Manager'
        };
        this._subordinateList = {
            title: 'Subordinate list: ',
            value: subordinateList
        }
    }

    get subordinateList() {
        let list = [];
        for (let employee of this._subordinateList.value) {
            list.push(employee.fullName);
        }
        return list.join(', ');
    }

    addSubordinate(obj) {
        this._subordinateList.value.push(obj);
    }

    deleteSubordinate(fullName) {
        this._subordinateList.value = this._subordinateList.value.filter(item => item.fullName != fullName);
    }

    paySubordinateSalary(type = "default", data = {}) {
        if (type == "default") {
            this._subordinateList.value.forEach(item => item.paySalary());
        } else if (type == 'custom') {
            this._subordinateList.value.forEach(item => item.paySalary(data[item.fullName]));
        }
    }

    showSubordinate() {
        this._subordinateList.value.forEach(item => item.show());
    }

    show() {
        for (let item in this) {
            if (item == '_subordinateList') {
                let list = [];
                for (let employee of this[item].value) {
                    list.push(employee.fullName);
                }
                console.log(this[item].title + list.join(', '));
            } else console.log(this[item].title + this[item].value);
        }
        console.log("\n");
    }
}


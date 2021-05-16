import {Employee} from './Employee';
type Field = {
    title: string,
    value: string
};
type ArrayField = {
    title: string,
    value: string[]
};
type Info = {
    _name : Field,
    _type : Field,
    _surname : Field,
    _salary : Field,
    _salaryList : ArrayField,
    _subordinateList : {
        title: string,
        value: Employee[]
    },
};
interface SalaryObj  {
    [index: string] : string;
};

export class Manager extends Employee {
    info: Info;

    protected static _count = 0;

    constructor(subordinateList : Employee[], salary: string, salaryList: string[], name : string, surname: string) {
        super(salary, salaryList, name, surname);
        Manager._count++;
        this.info._type = {
            title: 'Type: ',
            value: 'Manager'
        };
        this.info._subordinateList = {
            title: 'Subordinate list: ',
            value: subordinateList
        }
    }

    get subordinateList() {
        let list = [];
        for (let employee of this.info._subordinateList.value) {
            list.push(employee.fullName);
        }
        return list.join(', ');
    }

    addSubordinate(obj : Employee) : void {
        this.info._subordinateList.value.push(obj);
    }

    deleteSubordinate(fullName : string) : void {
        this.info._subordinateList.value = this.info._subordinateList.value.filter(item => item.fullName != fullName);
    }

    paySubordinateSalary(type : string = "default", data : SalaryObj = {}) : void {
        if (type == "default") {
            this.info._subordinateList.value.forEach(item => item.paySalary());
        } else if (type == 'custom') {
            this.info._subordinateList.value.forEach(item => item.paySalary(data[item.fullName]));
        }
    }

    showSubordinate() : void {
        this.info._subordinateList.value.forEach(item => item.show());
    }

    show() : void {
        for (let item in this.info) {
            if (item == '_subordinateList') {
                let list = [];
                for (let employee of this.info[item].value) {
                    list.push(employee.fullName);
                }
                console.log(this.info[item].title + list.join(', '));
            } else console.log(this.info[item].title + this.info[item].value);
        }
        console.log("\n");
    }

    get count() : string {
        return this.info._type.value + ' : ' + Manager._count;
    }
}


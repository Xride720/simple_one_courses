import {Person} from './Person';
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
};

export class Employee extends Person {
    info : Info;

    protected static _count = 0;
    constructor (salary: string, salaryList: string[], name : string, surname: string) {
        super(name, surname);
        Employee._count++;
        this.info._type = {
            title: 'Type: ',
            value: 'Employee'
        };
        this.info._salary = {
            title: 'Salary: ',
            value: salary
        };
        this.info._salaryList = {
            title: 'Salary list: ',
            value: salaryList
        };
        
    }

    get salary() : string {
        return this.info._salary.value;
    }

    get salaryList() : string[] {
        return this.info._salaryList.value;
    }

    paySalary(value : string = this.info._salary.value) : void {
        let date = this.formatDate(new Date());
        this.info._salaryList.value.push(`${date} получил ${value} рублей`);
    }
    
    get count() : string {
        return this.info._type.value + ' : ' + Employee._count;
    }
}
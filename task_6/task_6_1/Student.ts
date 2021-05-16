import {Person} from './Person';
type Field = {
    title: string,
    value: string
};
type Info = {
    _name : Field,
    _type : Field,
    _surname : Field,
    _dateOfBirth : Field,
    _course : Field,
};

export class Student extends Person {
    info : Info;
    protected static _count = 0;
    constructor (dateOfBirth: string = '', course: string = '1', name : string, surname: string) {
        super(name, surname);
        Student._count++;
        
        this.info._type = {
            title: 'Type: ',
            value: 'Student'
        };
        this.info._dateOfBirth = {
            title: 'Date of Birth: ',
            value: dateOfBirth
        };
        this.info._course = {
            title: 'Course: ',
            value: course
        };
    }

    set dateOfBirth(date: string) {
        let value : string[] = date.split('.');
        if (value.length == 3) {
            if (value[2].split('').length != 2 && value[2].split('').length != 4) throw new Error();

            if (value[2].split('').length == 2) {
                let current_year : string = new Date().getFullYear().toString();

                if (+(current_year.slice(0, 2) + value[2]) >= +current_year) {
                    value[2] = String(+current_year.slice(0, 2) - 1) + value[2];
                } else {
                    value[2] = current_year.slice(0, 2) + value[2];
                }                
            } 

            this.info._dateOfBirth.value = value.join('.');
        }
        else throw new Error();
    }

    set course(value : string) {
        if (value != '') 
            this.info._course.value = value;
        else throw new Error();
    }

    get dateOfBirth() : string {
        if (this.info._dateOfBirth.value == '') return '';
        let dateArr : number[] = this.info._dateOfBirth.value.split('.').map(item => +item);
        return String(new Date(dateArr[2], dateArr[1], dateArr[0]));
    }

    get age() : string {
        if (this.info._dateOfBirth.value == '') return '';
        let dateArr : number[] = this.info._dateOfBirth.value.split('.').map(item => +item),
            dOfBirth = new Date(dateArr[2], dateArr[1], dateArr[0]),
            age = Date.now() - dOfBirth.getTime();

        return Math.floor(age / (365 * 24 * 3600 * 1000)).toString();    
    }

    get infoStudent() : string {
        return this.fullName + ', course - ' + this.info._course.value + ', age - ' + this.age; 
    }

    get count() : string {
        return this.info._type.value + ' : ' + Student._count;
    }

}


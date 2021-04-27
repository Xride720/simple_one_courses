import {Person} from './Person';

export class Student extends Person {
    static count = 0;
    constructor (dateOfBirth = '', course = '1', ...args) {
        super(...args);
        Student.count++;
        this._type = {
            title: 'Type: ',
            value: 'Student'
        };
        this._dateOfBirth = {
            title: 'Date of Birth: ',
            value: dateOfBirth
        };
        this._course = {
            title: 'Course: ',
            value: course
        };
    }

    set dateOfBirth(value) {
        value = value.split('.');
        if (value.length == 3) {
            if (value[2].split('').length != 2 && value[2].split('').length != 4) throw new Error();

            if (value[2].split('').length == 2) {
                let current_year = new Date().getFullYear().toString();

                if (+(current_year.slice(0, 2) + value[2]) >= +current_year) {
                    value[2] = String(+current_year.slice(0, 2) - 1) + value[2];
                } else {
                    value[2] = current_year.slice(0, 2) + value[2];
                }                
            } 

            this._dateOfBirth.value = value.join('.');
        }
        else throw new Error();
    }

    set course(value) {
        if (value != '') 
            this._course.value = value;
        else throw new Error();
    }

    get dateOfBirth() {
        if (this._dateOfBirth.value == '') return '';
        let dateArr = this._dateOfBirth.value.split('.');
        return new Date(dateArr[2], dateArr[1], dateArr[0])
    }

    get age() {
        if (this._dateOfBirth.value == '') return '';
        let dateArr = this._dateOfBirth.value.split('.'),
            dOfBirth = new Date(dateArr[2], dateArr[1], dateArr[0]),
            age = Date.now() - dOfBirth.getTime();

        return Math.floor(age / (365 * 24 * 3600 * 1000));    
    }

    get info() {
        return this.fullName + ', course - ' + this._course.value + ', age - ' + this.age; 
    }

}


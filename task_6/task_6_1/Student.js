import {Person} from './Person';

export class Student extends Person {
    constructor (dateOfBirth, course, ...args) {
        super(...args);
        this.type = {
            title: 'Type: ',
            value: 'Student'
        };
        this.dateOfBirth = {
            title: 'Date of Birth: ',
            value: dateOfBirth
        };
        this.course = {
            title: 'Course: ',
            value: course
        };
    }
}
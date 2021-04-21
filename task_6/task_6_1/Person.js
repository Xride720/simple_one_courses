export class Person {
    constructor(name, surname) {
        this.type = {
            title: 'Type: ',
            value: 'Person'
        };
        this.name = {
            title: 'Name: ',
            value: name
        };
        this.surname = {
            title: 'Surname: ',
            value: surname
        };
    }

    show() {
        for (let item in this) {
            console.log(this[item].title + this[item].value);
        }
        console.log("\n");
    }
}
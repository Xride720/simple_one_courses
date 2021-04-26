export class Person {
    constructor(name, surname) {
        this._type = {
            title: 'Type: ',
            value: 'Person'
        };
        this._name = {
            title: 'Name: ',
            value: name
        };
        this._surname = {
            title: 'Surname: ',
            value: surname
        };
    }

    get fullName() {
        return this._name.value + ' ' + this._surname.value;
    }

    set name(value) {
        if (value != '')
            this._name.value = value;
        else throw new Error();
    }

    set surname(value) {
        if (value != '')
            this._surname.value = value;
        else throw new Error();
    }

    show() {
        for (let item in this) {
            console.log(this[item].title + this[item].value);
        }
        console.log("\n");
    }

    formatDate(date) {
        let day = date.getDate(),
            month = date.getMonth(),
            year = date.getFullYear();
        return  (day < 10 ? '0' + day : day) + '.' + 
                (month < 10 ? '0' + month : month) + '.' +
                year;
    }
}
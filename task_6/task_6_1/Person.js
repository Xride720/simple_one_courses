"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person(name, surname) {
        Person._count++;
        this.info = {
            _type: {
                title: 'Type: ',
                value: 'Person'
            },
            _name: {
                title: 'Name: ',
                value: name
            },
            _surname: {
                title: 'Surname: ',
                value: surname
            }
        };
    }
    Object.defineProperty(Person.prototype, "fullName", {
        get: function () {
            return this.info._name.value + ' ' + this.info._surname.value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "name", {
        set: function (value) {
            if (value != '')
                this.info._name.value = value;
            else
                throw new Error();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "surname", {
        set: function (value) {
            if (value != '')
                this.info._surname.value = value;
            else
                throw new Error();
        },
        enumerable: true,
        configurable: true
    });
    Person.prototype.show = function () {
        for (var item in this.info) {
            var field = this.info[item];
            console.log(field.title + field.value);
        }
        console.log("\n");
    };
    Person.prototype.formatDate = function (date) {
        var day = date.getDate(), month = date.getMonth(), year = date.getFullYear();
        return (day < 10 ? '0' + day : day) + '.' +
            (month < 10 ? '0' + month : month) + '.' +
            year;
    };
    Object.defineProperty(Person.prototype, "count", {
        get: function () {
            return this.info._type.value + ' : ' + Person._count;
        },
        enumerable: true,
        configurable: true
    });
    Person._count = 0;
    return Person;
}());
exports.Person = Person;

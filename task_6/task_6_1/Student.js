"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Person_1 = require("./Person");
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(dateOfBirth, course, name, surname) {
        if (dateOfBirth === void 0) { dateOfBirth = ''; }
        if (course === void 0) { course = '1'; }
        var _this = _super.call(this, name, surname) || this;
        Student._count++;
        _this.info._type = {
            title: 'Type: ',
            value: 'Student'
        };
        _this.info._dateOfBirth = {
            title: 'Date of Birth: ',
            value: dateOfBirth
        };
        _this.info._course = {
            title: 'Course: ',
            value: course
        };
        return _this;
    }
    Object.defineProperty(Student.prototype, "dateOfBirth", {
        get: function () {
            if (this.info._dateOfBirth.value == '')
                return '';
            var dateArr = this.info._dateOfBirth.value.split('.').map(function (item) { return +item; });
            return String(new Date(dateArr[2], dateArr[1], dateArr[0]));
        },
        set: function (date) {
            var value = date.split('.');
            if (value.length == 3) {
                if (value[2].split('').length != 2 && value[2].split('').length != 4)
                    throw new Error();
                if (value[2].split('').length == 2) {
                    var current_year = new Date().getFullYear().toString();
                    if (+(current_year.slice(0, 2) + value[2]) >= +current_year) {
                        value[2] = String(+current_year.slice(0, 2) - 1) + value[2];
                    }
                    else {
                        value[2] = current_year.slice(0, 2) + value[2];
                    }
                }
                this.info._dateOfBirth.value = value.join('.');
            }
            else
                throw new Error();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "course", {
        set: function (value) {
            if (value != '')
                this.info._course.value = value;
            else
                throw new Error();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "age", {
        get: function () {
            if (this.info._dateOfBirth.value == '')
                return '';
            var dateArr = this.info._dateOfBirth.value.split('.').map(function (item) { return +item; }), dOfBirth = new Date(dateArr[2], dateArr[1], dateArr[0]), age = Date.now() - dOfBirth.getTime();
            return Math.floor(age / (365 * 24 * 3600 * 1000)).toString();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "infoStudent", {
        get: function () {
            return this.fullName + ', course - ' + this.info._course.value + ', age - ' + this.age;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "count", {
        get: function () {
            return this.info._type.value + ' : ' + Student._count;
        },
        enumerable: true,
        configurable: true
    });
    Student._count = 0;
    return Student;
}(Person_1.Person));
exports.Student = Student;

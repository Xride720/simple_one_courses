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
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(salary, salaryList, name, surname) {
        var _this = _super.call(this, name, surname) || this;
        Employee._count++;
        _this.info._type = {
            title: 'Type: ',
            value: 'Employee'
        };
        _this.info._salary = {
            title: 'Salary: ',
            value: salary
        };
        _this.info._salaryList = {
            title: 'Salary list: ',
            value: salaryList
        };
        return _this;
    }
    Object.defineProperty(Employee.prototype, "salary", {
        get: function () {
            return this.info._salary.value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "salaryList", {
        get: function () {
            return this.info._salaryList.value;
        },
        enumerable: true,
        configurable: true
    });
    Employee.prototype.paySalary = function (value) {
        if (value === void 0) { value = this.info._salary.value; }
        var date = this.formatDate(new Date());
        this.info._salaryList.value.push(date + " \u043F\u043E\u043B\u0443\u0447\u0438\u043B " + value + " \u0440\u0443\u0431\u043B\u0435\u0439");
    };
    Object.defineProperty(Employee.prototype, "count", {
        get: function () {
            return this.info._type.value + ' : ' + Employee._count;
        },
        enumerable: true,
        configurable: true
    });
    Employee._count = 0;
    return Employee;
}(Person_1.Person));
exports.Employee = Employee;

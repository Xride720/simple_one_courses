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
var Employee_1 = require("./Employee");
;
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(subordinateList, salary, salaryList, name, surname) {
        var _this = _super.call(this, salary, salaryList, name, surname) || this;
        Manager._count++;
        _this.info._type = {
            title: 'Type: ',
            value: 'Manager'
        };
        _this.info._subordinateList = {
            title: 'Subordinate list: ',
            value: subordinateList
        };
        return _this;
    }
    Object.defineProperty(Manager.prototype, "subordinateList", {
        get: function () {
            var list = [];
            for (var _i = 0, _a = this.info._subordinateList.value; _i < _a.length; _i++) {
                var employee = _a[_i];
                list.push(employee.fullName);
            }
            return list.join(', ');
        },
        enumerable: true,
        configurable: true
    });
    Manager.prototype.addSubordinate = function (obj) {
        this.info._subordinateList.value.push(obj);
    };
    Manager.prototype.deleteSubordinate = function (fullName) {
        this.info._subordinateList.value = this.info._subordinateList.value.filter(function (item) { return item.fullName != fullName; });
    };
    Manager.prototype.paySubordinateSalary = function (type, data) {
        if (type === void 0) { type = "default"; }
        if (data === void 0) { data = {}; }
        if (type == "default") {
            this.info._subordinateList.value.forEach(function (item) { return item.paySalary(); });
        }
        else if (type == 'custom') {
            this.info._subordinateList.value.forEach(function (item) { return item.paySalary(data[item.fullName]); });
        }
    };
    Manager.prototype.showSubordinate = function () {
        this.info._subordinateList.value.forEach(function (item) { return item.show(); });
    };
    Manager.prototype.show = function () {
        for (var item in this.info) {
            if (item == '_subordinateList') {
                var list = [];
                for (var _i = 0, _a = this.info[item].value; _i < _a.length; _i++) {
                    var employee = _a[_i];
                    list.push(employee.fullName);
                }
                console.log(this.info[item].title + list.join(', '));
            }
            else
                console.log(this.info[item].title + this.info[item].value);
        }
        console.log("\n");
    };
    Object.defineProperty(Manager.prototype, "count", {
        get: function () {
            return this.info._type.value + ' : ' + Manager._count;
        },
        enumerable: true,
        configurable: true
    });
    Manager._count = 0;
    return Manager;
}(Employee_1.Employee));
exports.Manager = Manager;

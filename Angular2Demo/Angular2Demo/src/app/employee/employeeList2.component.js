"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var EmployeeList2Component = (function () {
    function EmployeeList2Component() {
        this.selectedEmployeeCountRadioButton = 'All';
        this.employees2 = [
            {
                code: 'emp101', name: 'Tom', gender: 'Male', annualSalary: 5500, dateOfBirth: '6/25/1988'
            },
            {
                code: 'emp102', name: 'Alex', gender: 'Male', annualSalary: 5700.95, dateOfBirth: '9/6/1982'
            },
            {
                code: 'emp103', name: 'Mike', gender: 'Male', annualSalary: 5900, dateOfBirth: '12/8/1979'
            },
            {
                code: 'emp104', name: 'Mary', gender: 'Female', annualSalary: 6500.826, dateOfBirth: '10/14/1980'
            },
            {
                code: 'emp105', name: 'Nancy', gender: 'Female', annualSalary: 6700.826, dateOfBirth: '12/15/1982'
            },
            {
                code: 'emp105', name: 'Steve', gender: 'Male', annualSalary: 7700.826, dateOfBirth: '11/18/1979'
            }
        ];
    }
    EmployeeList2Component.prototype.onEmployeeCountRadioButtonChange = function (selectedRadioButtonValue) {
        this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
    };
    EmployeeList2Component.prototype.getTotalEmployeeCount = function () {
        return this.employees2.length;
    };
    EmployeeList2Component.prototype.getTotalMaleEmployeeCount = function () {
        return this.employees2.filter(function (e) { return e.gender === "Male"; }).length;
    };
    EmployeeList2Component.prototype.getTotalFemaleEmployeeCount = function () {
        return this.employees2.filter(function (e) { return e.gender === "Female"; }).length;
    };
    return EmployeeList2Component;
}());
EmployeeList2Component = __decorate([
    core_1.Component({
        selector: 'list-employee-2',
        templateUrl: 'app/employee/employeeList2.component.html',
        styleUrls: ['app/employee/employeeList2.component.css']
    }),
    __metadata("design:paramtypes", [])
], EmployeeList2Component);
exports.EmployeeList2Component = EmployeeList2Component;
//# sourceMappingURL=employeeList2.component.js.map
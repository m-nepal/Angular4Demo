import { Component } from '@angular/core';

@Component({
    selector: 'list-employee-2',
    templateUrl: 'app/employee/employeeList2.component.html',
    styleUrls: ['app/employee/employeeList2.component.css']
})

export class EmployeeList2Component {
    employees2: any[];
    selectedEmployeeCountRadioButton: string = 'All';
    constructor() {
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
    onEmployeeCountRadioButtonChange(selectedRadioButtonValue: string): void {
        this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
    }

    getTotalEmployeeCount(): number {
        return this.employees2.length;
    }
    getTotalMaleEmployeeCount(): number {
        return this.employees2.filter( e => e.gender === "Male").length;
    }
    getTotalFemaleEmployeeCount(): number {
        return this.employees2.filter(e => e.gender === "Female").length;
    }
}
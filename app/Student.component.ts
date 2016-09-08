import {Component} from 'angular2/core';

export class Department{

    deptCode : number;
    deptName : string;

}
@Component
({

    selector: 'student-info',
    templateUrl:`app/Student.component.html`
})

export class StudentComponent{

    StudentID: number = 11;
    StudentFName: string = "John";
    StudentLName: string = "Smith";
    StudentFeesStatus: boolean = false;

 departInfo : Department = {

     deptCode : 100,
     deptName : 'Computer'
 };
}


import { Component } from '@angular/core';


@Component({
    selector: 'my-app',
    template: `
           <list-employee></list-employee>
            <br />
            <list-employee-2></list-employee-2>
            `
    //template: `Name :<input [value]='name' (input)='name=$event.target.value'/> 
    //            <br/>
    //           You entered : {{name}}           
                //`
})


export class AppComponent {
    name: string = 'Tom';
    //onClick(): void {
    //    console.log('Button Clicked');
    //}
    //pageHeader: string = 'Employee Details';
    //imagePath: string = 'images/logo.jpg';
    //isDisabled: boolean = false;
    //firstName: string = 'Tom';
    //lastName: string = 'Hopkins';


    //getFullName(): string {
    //    return this.firstName + ' ' + this.lastName;
    //}
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedEmployee;
  employees:Array<object> = [
    {
      name:'Ancy',
      age:20
    },
    {
      name:'Bindu',
      age:21
    }
  ];
  selectEmployee(employees){
    this.selectedEmployee = employees;
  }

}

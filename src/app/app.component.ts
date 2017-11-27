import { Component } from '@angular/core';
import { Employee } from './models/employee';
import {viewClassName} from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular5 Training';
  activeView = 'list';
  selectedEmployee;
  newEmployee: Employee = new Employee('',null);
  employees:Array<Employee> = [
    new Employee('Ajay',23),
    new Employee('Ancy',20)
  ];
  clearSelections(){
  this.employees.forEach(emp => emp.selected=false);
  }
  addEmployee(){
    this.employees.push(this.newEmployee);
  }

  onSelectEmployee(employee:Employee){
    this.clearSelections();
    employee.selected=true;
    this.selectedEmployee =employee; 

}
selectView(viewName){
  this.activeView = viewName;
}
deleteEmployee(empIndex) {
  this.employees.splice(empIndex, 1);
}
}
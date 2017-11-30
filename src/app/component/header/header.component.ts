import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  @Input()
  list:Array<string>;

 @Input()
 buttonList:Array<string>;
  
  @Output()
  onMenuClick: EventEmitter<string> = new EventEmitter<string>();

@Output()
onButtonClick: EventEmitter<number> = new EventEmitter<number>();

  selectedBtnIndex = 0;

  menuItemClicked(e, menuItem){
    e.preventDefault();
    this.onMenuClick.emit(menuItem);
  }

  buttonClick(i){
      this.onButtonClick.emit(i);
      this.selectedBtnIndex = i;
    }
  
  constructor() { }

  ngOnInit() {
  }

}

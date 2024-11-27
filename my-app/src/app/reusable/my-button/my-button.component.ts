import { Component, EventEmitter, Input,Output } from '@angular/core';

@Component({
  selector: 'app-my-button',
  templateUrl: './my-button.component.html',
  styleUrls: ['./my-button.component.css']
})
export class MyButtonComponent {


  @Input() btnClass:string='';
  @Input() text:string='';

  @Output() onbtnClick=new EventEmitter<any>();

  onClick()
  {
    debugger;
    this.onbtnClick.emit();
  }
}

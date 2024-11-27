import { Component, HostBinding, HostListener } from '@angular/core';

@Component({
  selector: 'app-hostbinding',
  templateUrl: './hostbinding.component.html',
  styleUrls: ['./hostbinding.component.css']
})
export class HostbindingComponent {
  
  @HostBinding('style.background-color') bgColor='green'
  @HostBinding('class.myclass') className:any;

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent) {
    console.log('Host element clicked:', event);
    this.bgColor='blue';
    this.className=true;
  }

  ngOnInit()
  {
    this.bgColor='blue';
    this.className=true;
  }
}

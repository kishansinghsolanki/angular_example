import { Component, HostListener } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-hostlistener',
  templateUrl: './hostlistener.component.html',
  styleUrls: ['./hostlistener.component.css']
})
export class HostlistenerComponent {

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent) {
    console.log('Host element clicked:', event);
  }

  width: number = window.innerWidth;

  // HostListener to listen for window resize events
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.width = window.innerWidth;
    console.log('Window resized, new width:', this.width);
  }


  @HostListener('document:keydown', ['$event'])
  onKeydown(event: KeyboardEvent) {
    console.log('Key pressed:', event.key);
  }


  @HostListener('mouseover', ['$event'])
  onMouseOver(event: MouseEvent) {
    console.log('Mouse Hover position:', event.clientX, event.clientY);
  }

  @HostListener('mouseleave', ['$event'])
  onMouseLeave(event: MouseEvent) {
    console.log('Mouse Leave position:', event.clientX, event.clientY);
  }

  constructor(){}


  ngOnInit()
  {
  //   $(window).scroll(function()
  // {
  //   console.log('scrolling');
  // })
  }
}


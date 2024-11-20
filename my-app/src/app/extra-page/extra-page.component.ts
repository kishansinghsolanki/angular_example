import { Component } from '@angular/core';

@Component({
  selector: 'app-extra-page',
  templateUrl: './extra-page.component.html',
  styleUrls: ['./extra-page.component.css']
})
export class ExtraPageComponent {


  constructor(){}

  ngOnInit()
  {
    this.getCountVowelsfromAnyString()
  }
  getCountVowelsfromAnyString()
  {
    const str="extra-page works!";
    const vowels=['a','e','i','o','u'];
    let count=0;

    const data=str.toLocaleLowerCase().split("");
    for(let i=0; i<data.length;i++)
    {
      vowels.includes(data[i]) && count++;
    }
    console.log(count);
  }
}

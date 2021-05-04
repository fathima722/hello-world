import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div>Hi {{title}} {{users.name}} {{users.test.testing}}
  <br>
  <button (click)="handler(username.value)">Click me</button>
  <br>
  <input #username type="text" placeholder="type your name here" [(ngModel)]="title"/>
  <br>
  <img [src]="users.image">
  </div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users = {
    "id": "0001",
    "type": "donut",
    "name": "Cake",
    "ppu": 0.55,
    "test":{
      "testing": "data"
    },
    "batters":
      {
        "batter":
          [
            { "id": "1001", "type": "Regular" }
          ]
      },
    "topping":
      [
        { "id": "5001", "type": "None" },
        { "id": "5002", "type": "Glazed" },
        { "id": "5005", "type": "Sugar" },
        { "id": "5007", "type": "Powdered Sugar" },
        { "id": "5006", "type": "Chocolate with Sprinkles" },
        { "id": "5003", "type": "Chocolate" },
        { "id": "5004", "type": "Maple" }
      ],
      "image":"https://www.w3schools.com/tags/img_girl.jpg"
  };
  title = 'Angular App';
  handler(hello:any){
    console.log("Hi");
    alert(`Hi ${hello}`);
  }
}

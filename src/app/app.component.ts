import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  onSubmit(contactForm: any) {
    console.log(contactForm.value);
  }

  title = 'Template driven forms';
 
  countryList:country[] = [
    new country("1", "India"),
    new country('2', 'USA'),
    new country('3', 'England')
  ];
}
 
export class country {
  id:string;
  name:string;
 
  constructor(id:string, name:string) {
    this.id=id;
    this.name=name;
  }

}
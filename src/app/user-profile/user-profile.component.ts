import { Component } from "@angular/core";

class User {
  name: string;
  firstName: string;
  age: number;
  quote: string;
  photo: string;

  constructor(
    name: string,
    firstName: string,
    age: number,
    quote: string,
    photo: string
  ) {
    this.name = name;
    this.firstName = firstName;
    this.age = age;
    this.quote = quote;
    this.photo = photo;
  }
}
@Component({
  selector: "app-user-profile",
  templateUrl: "./user-profile.component.html",
  styleUrls: ["./user-profile.component.css"],
})
export class UserProfileComponent {
  userProfile: User;
  showAge: boolean = true;
  constructor() {
    this.userProfile = new User(
      "Doe",
      "John",
      25,
      "",
      "https://randomuser.me/api/portraits/lego/2.jpg"
    );
  }
  toggleAgeVisibility() {
    this.showAge = !this.showAge;
  }
}

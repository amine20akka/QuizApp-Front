import { Component } from '@angular/core';
import { UserServiceService } from '../service/user-service.service';
import { User } from '../user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  user: User | null = null;

  constructor(private userService: UserServiceService) {}

  isLoading = true;
  email!: String;
  password!: String;

  fetchUser() {
    this.userService.getUser(this.email, this.password).subscribe(
      (user: User) => {
        console.log(user);
        this.user = user; 
        this.isLoading = false;
      });
  }

}

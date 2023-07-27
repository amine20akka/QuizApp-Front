import { Component } from '@angular/core';
import { UserServiceService } from '../service/user-service.service';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  user: User | null = null;

  constructor(private userService: UserServiceService, private router: Router) { }
  

  isLoading = true;
  username!: String;
  password!: String;

  fetchUser() {
    this.userService.getUser(this.username, this.password).subscribe(
      (user: User) => {
        console.log(user);
        this.user = user; 
        this.isLoading = false;
      });
    setTimeout (() => {
      if (this.isLoading) {
        this.router.navigate(['/incorrect']);
      } else {
        this.router.navigate(['/welcome']);
      }
    }, 100);
  }

}

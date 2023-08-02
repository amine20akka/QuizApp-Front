import { Component, ElementRef, ViewChild } from '@angular/core';
import { UserServiceService } from '../service/user-service.service';
import { User } from '../user';
import { Router } from '@angular/router';
import { tap, catchError, of } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  user: User | null = null;

  constructor(private userService: UserServiceService, private router: Router) { }
  
  @ViewChild('LoginButton') LoginButton!: ElementRef;

  isAuthenticated = false;
  username!: String;
  password!: String;

  fetchUser(): void {
    this.userService.authenticate(this.username, this.password).pipe(
      tap((user: User) => {
        console.log(user);
        this.user = user;
        this.isAuthenticated = true;
        const accessToken = this.user.token;
        localStorage.setItem('accessToken', accessToken.toString());
        const userRole = this.user.roles;
        localStorage.setItem('role', userRole.toString());
      }),
      catchError((error) => {
        this.isAuthenticated = false;
        return of(null);
      })
    ).subscribe(
      () => {
        this.router.navigate(['/welcome']);
      },
      (error) => {
        console.error('Navigation error:', error);
        this.router.navigate(['/incorrect']);
      }
    );
  }

  handleKeyPress(event: KeyboardEvent): void {
    if (event.keyCode === 13) {
      this.LoginButton.nativeElement.click();
    }
  }

}

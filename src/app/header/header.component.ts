import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LogOutComponent } from '../log-out/log-out.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private logout: LogOutComponent, private router: Router) { }

  goToQuizPage() {
    this.router.navigate(['/welcome']);
  }

  LogOut() {
    this.router.navigate(['/user']);
    this.logout.LogOut();
  }

}

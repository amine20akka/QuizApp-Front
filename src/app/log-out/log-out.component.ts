import { Component } from '@angular/core';

@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.css']
})
export class LogOutComponent {

  LogOut() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('role');
  }
}

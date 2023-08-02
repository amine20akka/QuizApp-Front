import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public authenticate(username: String, password: String): Observable<User> {
    const credentials = { username: username, password: password };
    const headers = new HttpHeaders().set('Skip-Interceptor', 'true');
    return this.http.post<User>(`${this.apiServerUrl}/user/authenticate`, credentials, { headers } );
  }

}

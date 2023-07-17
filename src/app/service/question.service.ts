import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Question } from "../Question";

@Injectable({
  providedIn: 'root'
})

export class QuestionService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getAllQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>(`${this.apiServerUrl}/question/AllQuestions`);
  }

  public addQuestion(questionAdded: Question): Observable<any> {
    return this.http.post<any>(`${this.apiServerUrl}/question/add`, questionAdded);
  }

  public updateQuestion(questionId: number, questionUpdated: Question): Observable<any> {
    return this.http.put<any>(`${this.apiServerUrl}/question/update/${questionId}`, questionUpdated);
  }

  public deleteQuestion(questionId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/question/delete/${questionId}`);
  }
}
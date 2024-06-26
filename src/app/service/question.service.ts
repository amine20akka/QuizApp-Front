import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { QuestionBack } from "../QuestionBack";

@Injectable({
  providedIn: 'root'
})

export class QuestionService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  getAllQuestions(): Observable<QuestionBack[]> {
    return this.http.get<QuestionBack[]>(`${this.apiServerUrl}/question/AllQuestions`);
  }

  public addQuestion(questionAdded: QuestionBack): Observable<any> {
    return this.http.post<any>(`${this.apiServerUrl}/question/add`, questionAdded);
  }

  public updateQuestion(questionId: number, questionUpdated: QuestionBack): Observable<any> {
    return this.http.put<any>(`${this.apiServerUrl}/question/update/${questionId}`, questionUpdated);
  }

  public deleteQuestion(questionId: number): Observable<void> {
  
    return this.http.delete<void>(`${this.apiServerUrl}/question/delete/${questionId}`);
  }
}
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Question } from "./Questions";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})

export class QuestionService {
    private apiServerUrl = '';

    constructor(private http: HttpClient) { }
    
    public getAllQuestions(): Observable<Question[]> {
        return this.http.get<Question[]>(`${this.apiServerUrl}/question/AllQuestions`);
    }

    public addQuestion(questionAdded: Question): Observable<Question> {
        return this.http.post<Question>(`${this.apiServerUrl}/question/add`, questionAdded);
    }

    public updateQuestion(questionUpdated: Question): Observable<Question> {
        return this.http.put<Question>(`${this.apiServerUrl}/question/add`, questionUpdated);
    }

    public deleteQuestion(questionId: number): Observable<void> {
        return this.http.delete<void>(`${this.apiServerUrl}/question/add/${questionId}`);
    }
}
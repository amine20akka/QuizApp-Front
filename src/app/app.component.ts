import { Component, OnInit } from '@angular/core';
import { Question } from './Questions';
import { QuestionService } from './question.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public questions: Question[];

  ngOnInit(): void {
    this.getAllQuestions();
  }

  constructor(private questionService: QuestionService) { }

  public getAllQuestions(): void{
    this.questionService.getAllQuestions().subscribe(
      (response: Question[]) => {
        this.questions = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

}

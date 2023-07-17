import { Component, OnInit } from '@angular/core';
import { Question } from './Question';
import { HttpErrorResponse } from '@angular/common/http';
import { QuestionService } from './service/question.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public questions: Question[] = [];
  title = 'QuizApp';

  ngOnInit(): void {
  }

  constructor(private questionService: QuestionService) { }

  getAllQuestions(): void {
    this.questionService.getAllQuestions().subscribe(
      (response: Question[]) => {
        this.questions = response;
        console.log('Questions:', this.questions);
      },
      (error: HttpErrorResponse) => {
        console.error('Error fetching questions:', error);
      }
    );
  }

}

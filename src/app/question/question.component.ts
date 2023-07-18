import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs/internal/observable/interval';
import { QuestionService } from '../service/question.service';
import { QuestionBack } from '../QuestionBack';
import { QuestionFront } from '../QuestionFront';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})

export class QuestionComponent implements OnInit {

  public name: string = "";
  public questionList: QuestionFront[] = [];
  public currentQuestion: number = 0;
  public points: number = 0;
  counter = 30;
  correctAnswer: number = 0;
  inCorrectAnswer: number = 0;
  interval$: any;
  progress: string = "0";
  isQuizCompleted: boolean = false;
  constructor(private questionService: QuestionService) { }

  ngOnInit(): void {
    this.name = localStorage.getItem("name")!;
    this.getAllQuestions();
    this.startCounter();
  }

  getAllQuestions() {
    this.questionService.getAllQuestions()
      .subscribe((backendQuestions: any[]) => {
        const questions: QuestionFront[] = backendQuestions.map(convertQuestionFromBackendFormat);
        this.questionList = questions;
        console.log(this.questionList);
    });
  }

  
  nextQuestion() {
    this.currentQuestion++;
  }
  previousQuestion() {
    this.currentQuestion--;
  }
  answer(currentQno: number, option: any) {

    if (currentQno === this.questionList.length) {
      this.isQuizCompleted = true;
      this.stopCounter();
    }
    if (option.correct) {
      this.points += 10;
      this.correctAnswer++;
      setTimeout(() => {
        this.currentQuestion++;
        this.resetCounter();
        this.getProgressPercent();
      }, 1000);


    } else {
      setTimeout(() => {
        this.currentQuestion++;
        this.inCorrectAnswer++;
        this.resetCounter();
        this.getProgressPercent();
      }, 1000);

      this.points -= 10;
    }
  }
  startCounter() {
    this.interval$ = interval(1000)
      .subscribe(val => {
        this.counter--;
        if (this.counter === 0) {
          this.currentQuestion++;
          this.counter = 30;
          this.points -= 10;
        }
      });
    setTimeout(() => {
      this.interval$.unsubscribe();
    }, 600000);
  }
  stopCounter() {
    this.interval$.unsubscribe();
    this.counter = 0;
  }
  resetCounter() {
    this.stopCounter();
    this.counter = 30;
    this.startCounter();
  }
  resetQuiz() {
    this.resetCounter();
    this.questionService.getAllQuestions();
    this.points = 0;
    this.counter = 30;
    this.currentQuestion = 0;
    this.progress = "0";

  }
  getProgressPercent() {
    this.progress = ((this.currentQuestion / this.questionList.length) * 100).toString();
    return this.progress;

  }
}

function convertQuestionFromBackendFormat(backendQuestion: any): QuestionFront {
  return {
    id: backendQuestion.id,
    questionTitle: backendQuestion.questionTitle,
    options: [backendQuestion.option1, backendQuestion.option2, backendQuestion.option3, backendQuestion.option4],
    rightAnswer: backendQuestion.rightAnswer,
    difficultyLevel: backendQuestion.difficultyLevel,
    category: backendQuestion.category,
  };
}

import { Component } from '@angular/core';
import { QuestionService } from '../service/question.service';
import { QuestionBack } from '../QuestionBack';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent {

  questionAdded: QuestionBack = new QuestionBack();

  constructor(private questionService: QuestionService) {}

  addQuestion() {
    this.questionService.addQuestion(this.questionAdded).subscribe((data) => {
      console.log(data);
    });
  }

}

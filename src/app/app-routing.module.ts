import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { QuestionComponent } from './question/question.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { UpdateQuestionComponent } from './update-question/update-question.component';


const routes: Routes = [
    { path: '', redirectTo: 'welcome', pathMatch: "full" },
    { path: "welcome", component: WelcomeComponent },
    { path: "question", component: QuestionComponent },
    { path: "add", component: AddQuestionComponent },
    { path: "update", component: UpdateQuestionComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

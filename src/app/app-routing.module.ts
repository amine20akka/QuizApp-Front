import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { QuestionComponent } from './question/question.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { UpdateQuestionComponent } from './update-question/update-question.component';
import { UserComponent } from './user/user.component';
import { HeaderComponent } from './header/header.component';
import { IncorrectComponent } from './incorrect/incorrect.component';
import { AuthGuard } from './service/auth-guard.service';
import { DeleteQuestionComponent } from './delete-question/delete-question.component';
import { LogOutComponent } from './log-out/log-out.component';
import { HighscoresComponent } from './highscores/highscores.component';
import { AdminGuard } from './service/admin-guard.service';


const routes: Routes = [
    { path: '', redirectTo: 'user', pathMatch: "full" },
    { path: "header", component: HeaderComponent },
    { path: "welcome", component: WelcomeComponent, canActivate: [AuthGuard] },
    { path: "question", component: QuestionComponent, canActivate: [AuthGuard, AdminGuard] },
    { path: "add", component: AddQuestionComponent, canActivate: [AuthGuard, AdminGuard] },
    { path: "update", component: UpdateQuestionComponent, canActivate: [AuthGuard, AdminGuard] },
    { path: "delete", component: DeleteQuestionComponent, canActivate: [AuthGuard, AdminGuard] },
    { path: "user", component: UserComponent },
    { path: "logout", component: LogOutComponent, canActivate: [AuthGuard] },
    { path: "highscores", component: HighscoresComponent, canActivate: [AuthGuard] },
    { path: "incorrect", component: IncorrectComponent, canActivate: [AuthGuard] }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

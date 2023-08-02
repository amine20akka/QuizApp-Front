import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { QuestionComponent } from './question/question.component';
import { HeaderComponent } from './header/header.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ChangeBgDirective } from './change-bg.directive';
import { QuestionService } from './service/question.service';
import { AddQuestionComponent } from './add-question/add-question.component';
import { FormsModule } from '@angular/forms';
import { UpdateQuestionComponent } from './update-question/update-question.component';
import { UserComponent } from './user/user.component';
import { UserHeaderComponent } from './header/user-header.component';
import { IncorrectComponent } from './incorrect/incorrect.component';
import { DeleteQuestionComponent } from './delete-question/delete-question.component';
import { LogOutComponent } from './log-out/log-out.component';
import { HighscoresComponent } from './highscores/highscores.component';
import { AuthInterceptor } from './auth-interceptor.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    QuestionComponent,
    HeaderComponent,
    ChangeBgDirective,
    AddQuestionComponent,
    UpdateQuestionComponent,
    UserComponent,
    UserHeaderComponent,
    IncorrectComponent,
    DeleteQuestionComponent,
    LogOutComponent,
    HighscoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor,
    multi: true
  },
    QuestionService,
    LogOutComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
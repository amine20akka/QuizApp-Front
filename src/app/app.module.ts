import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { QuestionComponent } from './question/question.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { ChangeBgDirective } from './change-bg.directive';
import { QuestionService } from './service/question.service';
import { AddQuestionComponent } from './add-question/add-question.component';
import { FormsModule } from '@angular/forms';
import { UpdateQuestionComponent } from './update-question/update-question.component';
import { UserComponent } from './user/user.component';
import { UserHeaderComponent } from './header/user-header.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [QuestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { ListContactsComponent } from './component/list-contacts/list-contacts.component';
import { MainChatComponent } from './component/main-chat/main-chat.component';
import { SearchPanelComponent } from './component/list-contacts/search-panel/search-panel.component';
import { MainTopComponent } from './component/main-chat/main-top/main-top.component';
import { MainBottomComponent } from './component/main-chat/main-bottom/main-bottom.component';
import { TruncateTextPipe } from './truncate-text.pipe';
import { SignInComponent } from './sign-in/sign-in.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes =[
  { path: 'sign-in', component: SignInComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ListContactsComponent,
    MainChatComponent,
    SearchPanelComponent,
    MainTopComponent,
    MainBottomComponent,
    TruncateTextPipe,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

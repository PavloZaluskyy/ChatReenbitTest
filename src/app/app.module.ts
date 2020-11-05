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
import { SignInComponent } from './component/sign-in/sign-in.component';
import { Routes, RouterModule } from '@angular/router';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider,
} from 'angularx-social-login';

const appRoutes: Routes = [
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
    HttpClientModule,
    SocialLoginModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '173822941720-828kkkdchs9f17q5e57istfu9lrij0l2.apps.googleusercontent.com'
            ),
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('758320718359039'),
          }
        ],
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

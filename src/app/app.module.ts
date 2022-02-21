import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { UserComponent } from './components/user/user.component';
import { FindUserComponent } from './components/find-user/find-user.component';
import { ReposComponent } from './components/repos/repos.component';
import { DateCountPipe } from './pipes/date-count.pipe';
import { HighlightDirective } from './directives/highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SearchFormComponent,
    UserComponent,
    FindUserComponent,
    ReposComponent,
    DateCountPipe,
    HighlightDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

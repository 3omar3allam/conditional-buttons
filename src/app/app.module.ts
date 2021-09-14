import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';
import { ActionButtonComponent } from './action-button/action-button.component';
import { ConditionalButtonDirective } from './action-button/conditional-button.directive';

import { AppComponent } from './app.component';
import { DepartmentsComponent } from './pages/departments/departments.component';
import { UsersComponent } from './pages/users/users.component';

const routes : Route[] = [
  { path: 'users', component: UsersComponent },
  //{ path: 'Positions', component: }
]

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    DepartmentsComponent,
    ActionButtonComponent,
    ConditionalButtonDirective,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

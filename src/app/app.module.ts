import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';
import { ActionButtonComponent } from './action-button/action-button.component';
import { ConditionalButtonDirective } from './action-button/conditional-button.directive';

import { AppComponent } from './app.component';
import { DepartmentsComponent } from './pages/departments/departments.component';
import { UsersComponent } from './pages/users/users.component';
import { TreeNodeComponent } from './pages/employees/hierarchy-tree/tree-node/tree-node.component';
import { TreeLevelComponent } from './pages/employees/hierarchy-tree/tree-level/tree-level.component';
import { HierarchyTreeComponent } from './pages/employees/hierarchy-tree/hierarchy-tree.component';

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
    TreeNodeComponent,
    TreeLevelComponent,
    HierarchyTreeComponent,
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

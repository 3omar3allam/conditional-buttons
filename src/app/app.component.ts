import { Component } from '@angular/core';
import { BaseDirective } from './base.directive';
import { TreeNode } from './pages/employees/tree-node.model';
import { Action, Entity, PermissionService } from './permission.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent extends BaseDirective {
  TEST : TreeNode[][] = [
    [
      {
        id: 1,
        name: 'Omar Allam',
        description: 'Associate Web Developer',
        photoUrl: 'https://scontent.faly3-1.fna.fbcdn.net/v/t1.18169-9/11755272_10200741461135678_3794367853700868105_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=174925&_nc_ohc=W0tpuLtzaeoAX_DDkTR&_nc_ht=scontent.faly3-1.fna&oh=90a77c759a6d4a3c76a02c4e1aaf8d2d&oe=619DEB45',
        numChildren: 3,
        render: true,
      },
      {
        id: 2,
        name: 'Omar Allam',
        description: 'Associate Web Developer',
        photoUrl: 'https://scontent.faly3-1.fna.fbcdn.net/v/t1.18169-9/11755272_10200741461135678_3794367853700868105_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=174925&_nc_ohc=W0tpuLtzaeoAX_DDkTR&_nc_ht=scontent.faly3-1.fna&oh=90a77c759a6d4a3c76a02c4e1aaf8d2d&oe=619DEB45',
        numChildren: 0,
        render: true,
      },
      {
        id: 3,
        name: 'Omar Allam',
        description: 'Associate Web Developer',
        photoUrl: 'https://scontent.faly3-1.fna.fbcdn.net/v/t1.18169-9/11755272_10200741461135678_3794367853700868105_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=174925&_nc_ohc=W0tpuLtzaeoAX_DDkTR&_nc_ht=scontent.faly3-1.fna&oh=90a77c759a6d4a3c76a02c4e1aaf8d2d&oe=619DEB45',
        numChildren: 0,
        render: true,
      },
      {
        id: 4,
        name: 'Omar Allam',
        description: 'Associate Web Developer',
        photoUrl: 'https://scontent.faly3-1.fna.fbcdn.net/v/t1.18169-9/11755272_10200741461135678_3794367853700868105_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=174925&_nc_ohc=W0tpuLtzaeoAX_DDkTR&_nc_ht=scontent.faly3-1.fna&oh=90a77c759a6d4a3c76a02c4e1aaf8d2d&oe=619DEB45',
        numChildren: 0,
        render: true,
      },
      {
        id: 5,
        name: 'Omar Allam',
        description: 'Associate Web Developer',
        photoUrl: 'https://scontent.faly3-1.fna.fbcdn.net/v/t1.18169-9/11755272_10200741461135678_3794367853700868105_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=174925&_nc_ohc=W0tpuLtzaeoAX_DDkTR&_nc_ht=scontent.faly3-1.fna&oh=90a77c759a6d4a3c76a02c4e1aaf8d2d&oe=619DEB45',
        numChildren: 0,
      },
    ],
    [
      {
        id: 6,
        parentId: 1,
        name: 'Mohamed Ahmed',
        description: 'Sales Manager',
        numChildren: 0,
        render: true,
      },
      {
        id: 7,
        name: 'Mohamed Ahmed',
        description: 'Associate Web Developer',
        numChildren: 0,
      },
      {
        id: 8,
        parentId: 1,
        name: 'Mohamed Ahmed',
        description: 'Associate Web Developer',
        numChildren: 0,
        render: true,
      },
      {
        id: 9,
        name: 'Mohamed Ahmed',
        description: 'Associate Web Developer',
        numChildren: 0,
      },
      {
        id: 10,
        parentId: 1,
        name: 'Mohamed Ahmed',
        description: 'Associate Web Developer',
        numChildren: 0,
        render: true,
      },
    ]
  ]



  title = 'conditional-buttons';

  constructor(private permissionService : PermissionService){
    super();
  }

  public togglePermissions(entity: Entity, action: Action, value: boolean){
    this.permissionService.changePermission(entity, action, value);
  }
}

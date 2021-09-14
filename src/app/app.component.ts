import { Component } from '@angular/core';
import { BaseDirective } from './base.directive';
import { Action, Entity, PermissionService } from './permission.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent extends BaseDirective {
  title = 'conditional-buttons';

  constructor(private permissionService : PermissionService){
    super();
  }

  public togglePermissions(entity: Entity, action: Action, value: boolean){
    this.permissionService.changePermission(entity, action, value);
  }
}

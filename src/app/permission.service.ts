import { Injectable } from "@angular/core";
import { BehaviorSubject, from, Observable, of, Subject } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
    providedIn: 'root',
})
export class PermissionService {
    myPermissions$ = new BehaviorSubject<UserPermission[]>([]);

    /**
     *  this method simulates API call
     *  Permissions should be cached instead of API call every time
     */
    public getMyPermissions() : Observable<UserPermission[]> {
        return this.myPermissions$.asObservable();
    }

    public validatePermission(entity: Entity, action: Action) : Observable<boolean> {
        return this.getMyPermissions()
            .pipe(
                map(permissions => {
                    var entityPermission = permissions.find(p => p.entity == entity);
                    if (entityPermission && entityPermission.actions.indexOf(action) != -1) {
                        return true;
                    }
                    else{
                        return false;
                    }
                })
            );
    }

    public changePermission(entity: Entity, action: Action, value: boolean){
        const permissions = this.myPermissions$.getValue();

        if (!permissions.find(p => p.entity == entity)) {
            permissions.push({
                entity,
                actions: []
            });
        }
        const entityPermission = permissions.find(p => p.entity == entity);
        const actionIndex = entityPermission?.actions.indexOf(action) ?? -1;
        if (value && actionIndex == -1) {
            entityPermission?.actions.push(action);
        } else if (!value && actionIndex != -1) {
            entityPermission?.actions.splice(actionIndex, 1);
        }

        this.myPermissions$.next(permissions);
    }
}

export enum Entity {
    User = "User",
    Department = "Department",
}

export enum Action {
    Create = "Create",
    Edit = "Edit",
    Delete = "Delete",
}

export interface UserPermission {
    entity: Entity,
    actions: Action[],
}
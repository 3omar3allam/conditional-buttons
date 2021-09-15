import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from "@angular/core";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { PermissionService, UserPermission } from "../permission.service";


@Component({
    selector: 'action-button',
    templateUrl: './action-button.component.html',
})
export class ActionButtonComponent implements OnInit, OnDestroy {
    @Input() entity: any = null;
    @Input() action: any = null;

    @Output() actionClick = new EventEmitter();
    
    public hasPermission = false;

    private unsubscribeAll$ = new Subject();

    constructor(private permissionService: PermissionService) {}

    ngOnInit(){
        this.watchPermissions();
    }

    watchPermissions() {
        this.permissionService
        .validatePermission(this.entity, this.action)
        .pipe(takeUntil(this.unsubscribeAll$))
        .subscribe(hasPermission => this.hasPermission = hasPermission);
    }

    ngOnDestroy() {
        this.unsubscribeAll$.next();
        this.unsubscribeAll$.complete();
    }
}
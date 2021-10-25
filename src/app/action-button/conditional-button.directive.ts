import { Directive, ElementRef, Input, OnDestroy, OnInit } from "@angular/core";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { PermissionService } from "../permission.service";

@Directive({
    selector: '[conditionalButton]'
})
export class ConditionalButtonDirective implements OnInit, OnDestroy {
    @Input() conditionalButton: any;
    @Input() entity: any = null;
    @Input() action: any = null;

    private unsubscribeAll$ = new Subject();

    constructor(private permissionService: PermissionService, private elRef: ElementRef) { }

    ngOnInit(){
        this.permissionService
            .validatePermission(this.entity, this.action)
            .pipe(takeUntil(this.unsubscribeAll$))
            .subscribe(hasPermission => {
                this.elRef.nativeElement.hidden = !hasPermission;
            });
    }

    ngOnDestroy() {
        this.unsubscribeAll$.next();
        this.unsubscribeAll$.complete();
    }
}
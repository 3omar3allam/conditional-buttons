import { Component, Directive } from "@angular/core";
import { Action, Entity } from "./permission.service";

@Directive()
export class BaseDirective {
    public get EntityEnum() : typeof Entity {
        return Entity;
    }
    public get ActionEnum() : typeof Action {
        return Action;
    }
}
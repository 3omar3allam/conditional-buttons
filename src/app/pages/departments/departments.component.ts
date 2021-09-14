import { Component } from "@angular/core";
import { BaseDirective } from "src/app/base.directive";

@Component({
    selector: 'app-departments',
    template: `
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr *ngFor="let p of departments">
                    <td>{{p.id}}</td>
                    <td>{{p.name}}</td>
                    <td>
                        <!-- Component Approach -->
                        <action-button [entity]="EntityEnum.Department" [action]="ActionEnum.Edit" (actionClick)="handleEdit(p.id)"></action-button>
                        <action-button [entity]="EntityEnum.Department" [action]="ActionEnum.Delete" (actionClick)="handleDelete(p.id)"></action-button>
                    </td>
                </tr>
            </tbody>
        </table>
    `
})
export class DepartmentsComponent extends BaseDirective {
    departments = [
        {
            id: 1,
            name: 'HR',
        },
        {
            id: 2,
            name: 'Sales',
        },
        {
            id: 3,
            name: 'Marketing',
        },
        {
            id: 4,
            name: 'Finance',
        },
        {
            id: 5,
            name: 'Administration',
        }
    ];

    public handleEdit(id: number){
        console.log('edditing position', id);
    }

    public handleDelete(id: number){
        console.log('deleting position', id);
    }
}
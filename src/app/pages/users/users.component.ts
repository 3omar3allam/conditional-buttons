import { Component } from "@angular/core";
import { BaseDirective } from "src/app/base.directive";

@Component({
    selector: 'app-users',
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
                <tr *ngFor="let u of users">
                    <td>{{u.id}}</td>
                    <td>{{u.name}}</td>
                    <td>
                        <!-- directive approach -->
                        <button
                            (click)="handleEdit(u.id)"
                            [conditionalButton]
                            [entity]="EntityEnum.User"
                            [action]="ActionEnum.Edit"
                        >Edit</button>
                        <button
                            (click)="handleDelete(u.id)"
                            [conditionalButton]
                            [entity]="EntityEnum.User"
                            [action]="ActionEnum.Delete"
                        >Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    `
})
export class UsersComponent extends BaseDirective {
    users = [
        {
            id: 1,
            name: 'Omar',
        },
        {
            id: 2,
            name: 'Abdo',
        },
        {
            id: 3,
            name: 'Yasser',
        },
        {
            id: 4,
            name: 'Mahmoud',
        },
        {
            id: 5,
            name: 'Ahmed',
        }
    ];

    public handleEdit(id: number){
        console.log('edditing user', id);
    }

    public handleDelete(id: number){
        console.log('deleting user', id);
    }
}
import { Component, Input, OnInit } from '@angular/core';

import { EditTodoService } from '../services/edit-todo.service';
import { ITodoItem } from '../todoItem';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
    @Input() todoList: ITodoItem[] = [];
    title = '';
    constructor(private editTodoService: EditTodoService) {}

    ngOnInit(): void {}

    addItem() {
        if (this.title) {
            this.editTodoService.addItem(this.todoList, this.title);
            // .subscribe((todo) => this.todoList.unshift(todo));
            this.title = '';
        }
    }
}

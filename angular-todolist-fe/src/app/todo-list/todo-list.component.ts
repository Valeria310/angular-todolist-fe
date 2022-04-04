import { Component, Input } from '@angular/core';
import { EditTodoService } from '../services/edit-todo.service';

import { ITodoItem } from '../todoItem';

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent {
    @Input() todoList: ITodoItem[] = [];

    constructor(private editTodoService: EditTodoService) {}

    removeItem(item: ITodoItem) {
        this.editTodoService.removeItem(item, this.todoList);
    }

    completeItem(item: ITodoItem) {
        this.editTodoService
            .completeItem(item)
            .subscribe((updatedTodo: ITodoItem) => {
                this.todoList = this.todoList.map((todo) =>
                    todo.id === item.id ? updatedTodo : todo
                );
            });
    }

    editItem(item: ITodoItem) {
        this.editTodoService
            .editItem(item)
            .subscribe((updatedTodo: ITodoItem) => {
                this.todoList = this.todoList.map((todo) =>
                    todo.id === item.id ? updatedTodo : todo
                );
            });
    }
}

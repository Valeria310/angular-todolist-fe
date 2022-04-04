import { Component, OnInit } from '@angular/core';

import { HttpClientService } from '../services/http-client-service.service';
import { ITodoItem } from '../todoItem';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
    todoList: ITodoItem[] = [];
    title = '';
    constructor(private httpClientService: HttpClientService) {}

    ngOnInit(): void {
        this.httpClientService
            .createTodoList()
            .subscribe((todoList) => (this.todoList = todoList));
    }
}

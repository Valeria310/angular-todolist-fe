import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ITodoItem } from '../todoItem';

@Injectable({
    providedIn: 'root',
})
export class HttpClientService {
    private httpClient: HttpClient;

    constructor(httpClient: HttpClient) {
        this.httpClient = httpClient;
    }

    createTodoList() {
        return this.httpClient.get<ITodoItem[]>(
            'https://jsonplaceholder.typicode.com/todos'
        );
    }
}

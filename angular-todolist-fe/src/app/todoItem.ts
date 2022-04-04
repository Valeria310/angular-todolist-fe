export interface ITodoItem {
    completed: boolean;
    id: number;
    userId?: number;
    title: string;
    newTitle?: string;
}

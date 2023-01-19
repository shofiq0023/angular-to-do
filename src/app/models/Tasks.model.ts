export interface ITask {
    id?: string;
    userId: string;
    taskDesc: string;
    finished: boolean;
    date: Date;
}
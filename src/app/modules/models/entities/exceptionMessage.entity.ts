export class ExceptionMessage {
    status: number;
    timestamp: string;
    path: string;
    message: string;

    constructor(status: number, message: string, path: string, timestamp?: string) {
        this.status = status;
        this.message = message;
        this.timestamp = timestamp ?? new Date().toISOString();
        this.path = path;
    }
}
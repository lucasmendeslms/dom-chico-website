// export class ExceptionMessageDto {
//     status: number;
//     timestamp: string;
//     path: string;
//     message: string;

//     constructor(status: number, message: string, path: string) {
//         this.status = status;
//         this.message = message;
//         this.timestamp = new Date().toISOString();
//         this.path = path;
//     }
// }

export interface ExceptionMessageDto {
        status: number;
        timestamp: string;
        path: string;
        message: string;
}
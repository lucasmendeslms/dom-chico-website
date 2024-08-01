export interface UserDataDto {
    id: number;
    googleAccountId: string;
    name: string;
    cpf: string;
    phone: string;
    email: string;
    type: string;
    picture?: string;
    session_created_at: number;
    session_expires_at: number;
}
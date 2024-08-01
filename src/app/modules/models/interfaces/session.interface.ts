import { Session } from "next-auth";

export interface UserSession extends Session {
    user: {
        id: string;
        name: string;
        firstName: string;
        lastName: string;
        image: string;
        email: string;
        emailVerified: Date,
        created_at: number;
        expires_at: number;
    }
}
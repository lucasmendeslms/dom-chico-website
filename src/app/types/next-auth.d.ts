// types/next-auth.d.ts
import NextAuth from "next-auth";
import { UserSession } from "../app/modules/models/interfaces/session.interface";

declare module "next-auth" {
  interface Session {
    user: UserSession['user'];
  }
}

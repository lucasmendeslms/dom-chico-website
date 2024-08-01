import { NextRequest, NextResponse } from "next/server";
import { authMiddleware } from "./modules/middlewares/authMiddleware";

export async function middleware(request: NextRequest) {
    const authResponse = await authMiddleware(request);
    return authResponse;
}
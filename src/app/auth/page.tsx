// import { redirect } from "next/navigation";
// import { AuthController } from "../modules/controllers/auth.controller";
// import { IAuth } from "../modules/models/entities/auth.entity";

// export default async function Auth(): Promise<void> {

//     const getAuth: IAuth = await AuthController.authUser();

//     // if (getAuth.isAuthorized && getAuth.hasSession) {
//     //     redirect(`/home`);
//     // }

//     // if (getAuth.hasSession) {
//     //     redirect('/register');
//     // }

//     getAuth.isAuthorized && getAuth.hasSession ? redirect(`/home`) : redirect('/register');
// }
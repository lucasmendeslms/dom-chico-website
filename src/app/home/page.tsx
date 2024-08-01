import { auth } from "../modules/services/auth/authGoogle.service";
import { redirect } from "next/navigation";

export default async function Home() {

    const session = await auth();


    if (!session) {
        return redirect("/login");
    }

    return (
        <div>
            <div> Olá, { session.user?.name } </div>

            <div> Email: { session.user?.email } </div>

            <div> Image URL: { session.user?.image } </div>

            <div> { session.expires } </div>

        </div>
    );
}
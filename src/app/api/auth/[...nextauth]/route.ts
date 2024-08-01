// import NextAuth from "next-auth"
// import Google from "next-auth/providers/google"
// import { checkNewUser } from "../../dom-chico-api/login/functions";

// export const { handlers, auth, signIn, signOut } = NextAuth({
//   providers: [
//     Google({
//       authorization: {
//         params: {
//           prompt: "consent",
//           access_type: "offline",
//           response_type: "code",
//         },
//       },
//     }),
//   ], callbacks: {
//     async signIn({ profile }) {

//         if (profile && profile.id) {

//           const { id } = profile;

//           const isNewUser: boolean = await checkNewUser(id);

//           console.log(`isNewUser: ${isNewUser}`)
//         }

//         return true
//       },
//   }
// })


import { handlers } from "@/app/modules/services/auth/authGoogle.service";
export const { GET, POST } = handlers
import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import { UserSession } from "../../models/interfaces/session.interface";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  pages: {
    signIn: '/login',
    signOut: '/login',
    error: '/login',
    verifyRequest: '/login',
    newUser: '/home'
  },
  callbacks: {
    async authorized({auth}) {
      return !!auth;
    },
    async signIn({ profile, user }) {

      return (profile && profile.sub && user) ? true : false
    },
    async jwt({ token, profile }) {

      if(profile) {
        token.id = profile.sub;
        token.firstName = profile.given_name;
        token.lastName = profile.family_name;
      }

      return token;
    },
    async session({token, session }) {
      if (token) {
        session.user = {
          id: token.id as string,
          name: token.name as string,
          firstName: token.firstName as string,
          lastName: token.lastName as string,
          image: token.picture as string,
          email: token.email as string,
          created_at: token.iat as number,
          expires_at: token.exp as number,
        } as UserSession['user'];
      }

      return session
    }
  }
})
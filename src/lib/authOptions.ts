import { NextAuthOptions } from "next-auth/";
import CredentialsProvider from "next-auth/providers/credentials";
import dbConnect from "./dbConnect";
import User from "@/models/User";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        await dbConnect();
        const user = await User.findOne({ email: credentials?.email });
        if (!user) throw new Error("User not found");

        const isPasswordCorrect = await user.comparePassword(
          credentials!.password
        );
        if (!isPasswordCorrect) throw new Error("Incorrect password");

        return {
          id: user._id.toString(),
          email: user.email,
          role: user.role,
        };
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      session.user.role = token.role;
      session.user.id = token.sub as string;
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
  },
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

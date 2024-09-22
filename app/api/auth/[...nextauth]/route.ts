import NextAuth from "next-auth/next";
import AzureADProvider from "next-auth/providers/azure-ad";
import { NextAuthOptions } from "next-auth";

const authOptions: NextAuthOptions = {
  providers: [
    AzureADProvider({
      name: 'Azure Active Directory',
      clientId: process.env.AZURE_CLIENT_ID!,
      clientSecret: process.env.AZURE_CLIENT_SECRET!,
      tenantId: process.env.AZURE_TENANT_ID!,
      authorization: {
        params: {
          scope: process.env.DEFAULT_AUTH_SCOPES, // Modify if necessary
        },
      },

    }),
  ],
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }
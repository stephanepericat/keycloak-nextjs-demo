import NextAuth from "next-auth"
import KeycloakProvider from "next-auth/providers/keycloak"
import AuthentikProvider from "next-auth/providers/authentik"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    KeycloakProvider({
      clientId: process.env.KEYCLOAK_ID,
      clientSecret: process.env.KEYCLOAK_SECRET,
      issuer: process.env.KEYCLOAK_ISSUER,
    }),
    AuthentikProvider({
      clientId: process.env.AUTHENTIK_ID,
      clientSecret: process.env.AUTHENTIK_SECRET,
      issuer: process.env.AUTHENTIK_ISSUER,
    }),
  ],
}

export default NextAuth(authOptions)

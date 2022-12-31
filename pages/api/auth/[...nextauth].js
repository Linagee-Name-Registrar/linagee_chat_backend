// import CredentialsProvider from 'next-auth/providers/credentials';
// import NextAuth from 'next-auth';
// import Moralis from 'moralis';
// import connectDB from '../../../lib/connectDB';
// import Users from '../../../lib/userSchema';
// import jwt from 'next-auth/jwt';


// const secret = process.env.NEXTAUTH_SECRET;

// export default NextAuth({
//     providers: [
//         CredentialsProvider({
//             name: 'MoralisAuth',
//             credentials: {
//                 message: {
//                     label: 'Message',
//                     type: 'text',
//                     placeholder: '0x0',
//                 },
//                 signature: {
//                     label: 'Signature',
//                     type: 'text',
//                     placeholder: '0x0',
//                 },
//             },
//             async authorize(credentials) {
//                 try {
//                     const { message, signature } = credentials;

//                     await Moralis.start({ apiKey: process.env.MORALIS_API_KEY });

//                     const { address, profileId, expirationTime } = (await Moralis.Auth.verify({ message, signature, network: 'evm' })).raw;

//                     const user = { address, profileId, expirationTime, signature };

//                     console.log('profile id is: ', address);

//                     await connectDB();
//                     const MongoUser = await Users.findOne({profileId: profileId})

//                     if(!MongoUser){
                    
//                       const newUser = new Users({
//                         profileId: profileId,
//                         address: address,
//                       })
//                       await newUser.save();

//                     }
  

//                     return user;
//                 } catch (e) {
//                     // eslint-disable-next-line no-console
//                     console.error(e);
//                     return null;
//                 }
//             },
//         }),
//     ],
//     callbacks: {
//         async jwt({ token, user }) {

//             //console.log('TOK: ', token);
//             user && (token.user = user);
//             return token;
//         },
//         async session({ session, token }) {
//             console.log({ session, token })
//             session.expires = token.user.expirationTime;
//             session.user = token.user;

//             // console.log('token: ', { token })
//             // var temptoken = "eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..0E45SKcKu_HwDN_X.BD77l2iYcMGtt_Z-W23bOOxPYRM8KGNWjjB6SzRS1TY3XzmPZ3i7r0-J8qNpj2tONqRIS3_aL7j7bW1tNANmATZzLQupN1vVM-ipNUr-yz0m_9RlrzqSb1-UwkuqslDvfibp5QaGTtQAUjSpMZMhleQEqOq695alTzdsWWrdgSE0NgXolGlVKu-n0NjkubK0D9GRsJcDi8ywEM9lp-HRdYwEv6-5tiID3c1J5pkKVBIKoQWn4VRXVTSt-YeroFzqv2-T2ShhCNhZoV0ZdNKI7QC1mEz2GCeQuT-Idqc-cE3CC660Wull8xhTHh_V0DtDQWx5yuMMPYALaa5b4QV2gZtNcXshmO3eX8KKRQXA2IDkmmay0SoiBftuVQkbxhQX7vT7kk1L5FRX7xD86Lrhh5z9C6kMfWvbfHkQe0gEJ_nn6inftQasveTjMqIu23lPq6Sy2QTT5CmdARU8rWjvNXHIE7zBy0idjorLgwyPzN1fieP2.zk9hsdwgH_cPTASLHeCtEg"
//             // const decoded = jwt.verify(temptoken.toString(), (process.env.NEXT_AUTH_SECRET).toString());  
//             // //var userId = decoded.id  
//             // console.log(decoded) 
//             return session;
//         },
//     },
//     session: {
//         strategy: 'jwt',
//     },
// });

import NextAuth from 'next-auth';
import { MoralisNextAuthProvider } from '@moralisweb3/next';

export default NextAuth({
  providers: [MoralisNextAuthProvider()],
  // adding user info to the user session object
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
    async session({ session, token }) {
      (session).user = token.user;
      return session;
    },
  },
});
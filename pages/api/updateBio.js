import connectDB from "../../lib/connectDB";
import Users from "../../lib/userSchema";
import { getToken } from "next-auth/jwt";
import CryptoJS from 'crypto-js';
import jwt from 'next-auth/jwt';

const secret = process.env.NEXTAUTH_SECRET


export default async (req, res) => {
    console.log('req');

    


    //console.log(req.query);

  // Get token from cookie (names differ on local vs production)
  //const secureCookieName = '__Secure-next-auth.session-token'
//   const insecureCookieName = 'next-auth.ext-token'
//   const encryptedToken = req.cookies[insecureCookieName]
//   console.log('encrypted')
//   console.log(encryptedToken);

//   var decrypted = CryptoJS.AES.decrypt((encryptedToken).toString(), (process.env.NEXTAUTH_SECRET).toString());
//   //4d657373616765
//   console.log("decrypted")
//   console.log(decrypted.toString(CryptoJS.enc.Utf8))

//   // Decrypt using secret and return as string
// //   const decryptedBytes = CryptoJS.AES.decrypt(JSON.stringify(encryptedToken), process.env.NEXTAUTH_SECRET).toString()
// //   const decryptedToken = decryptedBytes.toString(CryptoJS.enc.Utf8)

//   // Still signed but not encrypted (this is what you want)


//   const token = await getToken({ req, secret })
//   console.log("JSON Web Token", token)  
 
    const { profileId, bio } = req.body;

    await connectDB();

    try {
        await Users.findOneAndUpdate({ profileId: profileId }, { bio: bio });
        res.status(200).json({bio});
    } catch (error) {
        res.status(400).json({ error });
        console.error(error);
    }

};

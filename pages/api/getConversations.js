import connectDB from "../../lib/connectDB";
import Users from "../../lib/userSchema";
import Conversations from "../../lib/conversationSchema";
import { getToken } from "next-auth/jwt";
import CryptoJS from 'crypto-js';
import jwt from 'next-auth/jwt';

const secret = process.env.NEXTAUTH_SECRET


export default async (req, res) => {
console.log('ugh')

    
    const { ext } = req.body;
    await connectDB();

    try {
        const user = await Users.findOne({ ext: ext });
        console.log("user is", user);
        
        const convos = await Conversations.find({
            "userReference.addr": {
              "$all": [
                `${user.addr}`,
              ]
            }
          })

          if(!convos.length){
            res.status(200)
          }


        console.log("returning convos", convos);
        res.status(200).json(convos);
        
    } catch (error) {
        res.status(400).json({ error });
        console.error(error);
    }

};

// db.collection.find({
//     "members": {
//       "$all": [
//         "61e4f988b92b443b29c87c38",
//         "61f0dd62e21a45de185854e9"
//       ]
//     },
//     isGroup: false
//   })


import connectDB from "../../lib/connectDB";
import Users from "../../lib/userSchema";
import { getToken } from "next-auth/jwt";
import CryptoJS from 'crypto-js';
import crypto from 'crypto';
import jwt from 'next-auth/jwt';
import Conversations from "../../lib/conversationSchema";

const secret = process.env.NEXTAUTH_SECRET


export default async (req, res) => {
    console.log('req', req.body);
 
    const { toSend } = req.body;
    console.log("data in create")

    const ext = toSend.ext;
    const otherPrimary = toSend.otherPrimary
    console.log(ext, otherPrimary)

    // const get address from name
    const otherAddress = otherPrimary

    await connectDB();

    try {
        const user = await Users.findOne({ ext: ext });
        console.log("user is", user)

        //.find({"groups": {$all: ["United", "Manchester"]}})
        const convos = await Conversations.find({
            "userReference.addr": {
              "$all": [
                `${user.addr}`,
                `${otherAddress}`
              ]
            },
            "userReference": {
              $size: 2
            }
          })

          if(!convos.length){
            const id = (crypto.randomUUID()).toString();

            const newConvo = {
                roomName: "Linagee Chatroom",
                roomId: `${id}`,
                isDm: false,
                userReference: [{
                    primary: `${user.primary}`,
                    addr: `${user.addr}`
                  },
                  {
                    primary: `${otherPrimary}`,
                    addr: `${otherAddress}`
                  }
                ]
            }
            await Conversations.create({
                roomName: "Linagee Chatroom",
                roomId: `${id}`,
                isDm: false,
                userReference: [{
                    primary: `${user.primary}`,
                    addr: `${user.addr}`
                  },
                  {
                    primary: `${otherPrimary}`,
                    addr: `${otherAddress}`
                  }
                ]
            })
            res.status(200).json(newConvo);
            
          }
          console.log("convo exists", convos)



        res.status(200).json(convos);
    } catch (error) {
        res.status(400).json({ error });
        console.error(error);
    }

};
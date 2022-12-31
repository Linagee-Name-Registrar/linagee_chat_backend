import connectDB from "../../lib/connectDB";
import Users from "../../lib/userSchema";
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
        console.log('user api', user)
        res.status(200).json({user});
        
    } catch (error) {
        res.status(400).json({ error });
        console.error(error);
    }

};

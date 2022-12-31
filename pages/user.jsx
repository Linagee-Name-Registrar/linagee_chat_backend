import { getSession, signOut } from 'next-auth/react';
import Users from "../lib/userSchema";
import connectDB from "../lib/connectDB";
import { useState } from "react";
import axios from "axios";
import nookies from 'nookies';
import crypto from 'crypto';
import CryptoJS from 'crypto-js';
import contractInterface from '../lib/resolverabi.json';
import { ethers } from "ethers";


function User({ user, bio }) {


    const [value, changeValue] = useState("New Bio");
    

    async function updateBio(){
        const {data} = await axios.post(
            "/api/updateBio",
            { profileId: user.profileId, bio: value },
            {
              headers: {
                "content-type": "application/json",
              },
            }
          );

          console.log("Bio Updated to: " + data.bio)

          location.reload()
    }

    async function getPerson(){
        const ugh = await axios.post(
            "/api/getUser",
            { addr: user.address },
            {
              headers: {
                "content-type": "application/json",
              },
            }
          );
          console.log('Person is', ugh)

    }




    return (
        <div className="page">
            <div className="container">
            <h4>User session:</h4>
            <div>Address: {user.address}</div>
            <div>Bio: {bio}</div>
            <br/>
            <input
                onChange={(e) => changeValue(e.target.value)}
                value={value}
            ></input>
            <button onClick={() => updateBio()}>Update Bio</button>
            <button onClick={() => getPerson()}>getPerson</button>
            <br />
            <br/>
            <button onClick={() => signOut({ redirect: '/signin' })}>Sign out</button>
            </div>
        </div>
    );
}


export async function getPrimary(address){
    // const contractConfig = {
    //     addressOrName: '0x6023E55814DC00F094386d4eb7e17Ce49ab1A190',
    //     contractInterface: contractInterface,
    //   };

    //   const primaryName = useContractRead({
    //     ...contractConfig,
    //     functionName: 'primary',
    //     args:[address],
    //   });

    //   return(primaryName)
    var url = 'https://mainnet.infura.io/v3/5b26585dfc17437da190dd2117648295';
    var provider = new ethers.providers.JsonRpcProvider(url)
    const resolverAddress = "0x6023E55814DC00F094386d4eb7e17Ce49ab1A190";

    const resolverContract = new ethers.Contract(resolverAddress, contractInterface, provider);
    const primary = await resolverContract.primary(address)
    console.log("prime function is". primary)

    if(primary && primary.toString() != "0x0000000000000000000000000000000000000000000000000000000000000000"){
        var stringName = ethers.utils.parseBytes32String(primary.toString()) + ".og"
        return(stringName)
    }
    return

}



export async function getServerSideProps(context) {
    //console.log('context is: ', context);
    const session = await getSession(context);
    //const [addHook, setAddHook] = useState();


    
    

    


    if (!session) {
        return {
            redirect: {
                destination: '/signin',
                permanent: false,
            },
        };
    }

    

    await connectDB();

    const userM = await Users.findOne({ profileId: session?.user.profileId }).lean();
    const key = crypto.randomUUID()
    //const key = 'howdy'
    console.log('db key')
    console.log(key)

    console.log('addy')
    console.log(session?.user.address)

    // React.useEffect(() => {
    //     if (session?.user.address) {
    //       setTotalMinted(totalSupplyData.toNumber());
    //     }
    //   }, [session?.user.address]);



    await Users.findOneAndUpdate({ profileId: session?.user.profileId },{ ext: key } );

    await Users.findOneAndUpdate({ profileId: session?.user.profileId }, {addr: (session?.user.address).toString()});

    if(session.user.address) {

        var primaryName = await getPrimary((session.user.address).toString())

          console.log("primo is", primaryName)
          if(primaryName){

            await Users.findOneAndUpdate({ profileId: session?.user.profileId }, {primary: primaryName});
            console.log("updated name")

          }
        
    

    }

    if (userM !== null) {
        userM.bio = userM.bio.toString();
    }


    

    const encryptedKey = CryptoJS.AES.encrypt(key, (process.env.NEXTAUTH_SECRET).toString()).toString();
    console.log('encrpyed: ', encryptedKey);


  
    var decrypted = CryptoJS.AES.decrypt((encryptedKey).toString(), (process.env.NEXTAUTH_SECRET).toString());
    //4d657373616765
    console.log("decrypted")
    console.log(decrypted.toString(CryptoJS.enc.Utf8))



    nookies.set(context, 'next-auth.ext-token', encryptedKey.toString(), {
    maxAge: 30 * 24 * 60 * 60,
    path: '/',
    httpOnly: true
    })

    // await axios.post(
    //     "/api/updateExt",
    //     { profileId: session?.user.profileId, ext: key },
    //     {
    //       headers: {
    //         "content-type": "application/json",
    //       },
    //     }
    //   );

    return {
        props: { user: session.user, bio: userM.bio },
    };


}

export default User;

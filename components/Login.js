import Image from "next/image"
import bg from '../resources/bg.jpg'
import avatar from '../resources/avatar.png'
import { useMoralis } from "react-moralis";
function Login() {

    const { authenticate} = useMoralis()

    return (
        
    <div className="relative text-white">
        <div className="flex flex-col absolute z-10 h-4/6 w-full items-center justify-center space-y-4" >
            <h1 className="font-bold p-4 text-6xl">Welcome to the metaverse</h1>
            <Image className="rounded-full object-cover" 
            src={avatar}
            height={200}
            width={200}
            
            />
            <button onClick={authenticate} className=" bg-teal-500 rounded-lg p-5 font-bold animate-pulse">Login with metaverse</button>
        </div>
    
        <div className="w-full h-screen">
            <Image 
            src={bg}
            layout="fill"
            objectFit="cover"
            />
        </div>
    
    </div>
    
    )
}

export default Login

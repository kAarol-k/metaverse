import { useMoralis } from "react-moralis";
import Image from "next/image"
import bg from '../resources/bg.jpg'
import avatar from '../resources/avatar.png'
import Login from "../components/Login"

function index() {
  const { isAuthenticated, logout,user} = useMoralis()
  console.log(user)

  if(!isAuthenticated) return <Login />
  
  return (
    
    <div className="">
      <div className="relative text-white">
        <div className="flex flex-col absolute z-10 h-4/6 w-full items-center justify-center space-y-4" >
            <h1 className="text-5xl" >Welcome to the metaverse</h1>
            <h1 className="font-bold p-4 text-6xl" >Welcome  <span className="text-teal-400">{user.get("username")}</span></h1>

      <button className=" bg-teal-500 rounded-lg p-5 font-bold" onClick={logout}>Logout</button>
        </div>
    
        <div className="w-full h-screen">
            <Image className=""
            src={bg}
            layout="fill"
            objectFit="cover"
            />
        </div>
    
    </div>
    
    </div>
  )
}

export default index

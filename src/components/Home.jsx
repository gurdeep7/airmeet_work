
import { useState } from "react"
import { Cars } from "./Cars"
import { Navbar } from "./Navbar"

export const Home = ()=>{
const [data,setData] = useState([])
    return(
        <div>
            <Navbar data={data}/>
          <Cars setData= {setData}/>
        </div>
    )
}
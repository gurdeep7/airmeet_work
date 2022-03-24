import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getcarloading, getcarsuccess } from "../store/action";

export const Cars = ()=>{
const dispatch = useDispatch()
const [show,setShow] = useState([])

    const { loading, cars} = useSelector(
        (state) => ({
          cars: state.carsState.cars,
          loading: state.carsState.loading,
        }));

        function req(){
            try{
getcarloading()
        axios.get("https://airmeet1.herokuapp.com/car").then((res)=>{
dispatch(getcarsuccess(res.data))
setShow(res.data)


        })
        console.log(loading)
            }catch(e){
                console.log(e)
            }
        }

        useEffect(()=>{
        req()
        },[])

const [check,setCheck]= useState({})
        const handleCheckbox = (event)=>{
            const target = event.target;
            const value = target.type === 'checkbox' ? target.checked : target.value;
            const name = target.name;
    
            setCheck({
              [name]: value
            });
            console.log(check)
        }
        return<div className="bg-green-300">
         {loading?<img className="m-auto" src="https://i.pinimg.com/originals/d7/34/49/d73449313ecedb997822efecd1ee3eac.gif"></img>:<table className="m-auto">
               <tr>
               <td className="w-28 border-2 font-bold border-gray-600">Sr no</td>
                   <td className="w-28 border-2 font-bold border-gray-600">make</td>
                   <td className="w-28 border-2 font-bold border-gray-600">model</td>
                   <td className="w-28 border-2 font-bold border-gray-600">year</td>
                   <td className="w-28 border-2 font-bold border-gray-600">Select</td>
               </tr>            
               {show?.map((el,i)=>{
               return <tr key={el._id}>
                   
                   <td className="w-28 border-2 border-gray-600">{i+1}</td>
        <td className="w-28 border-2 border-gray-600">{el.car_make}</td>
                   <td className="w-28 border-2 border-gray-600">{el.car_model}</td>
                   <td className="w-28 border-2 border-gray-600">{el.car_year}</td>
                   <td className="w-28 border-2 font-bold border-gray-600"><input className="w-6 h-6 ml-10"name={el._id} onChange={handleCheckbox} type="checkbox" /></td>
                   </tr>
})}
           </table>}
         
        </div>
    }

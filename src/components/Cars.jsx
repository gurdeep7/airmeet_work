import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getcarloading, getcarsuccess } from "../store/action";

export const Cars = ()=>{
const dispatch = useDispatch()


    const { loading, cars} = useSelector(
        (state) => ({
          cars: state.carsState.cars,
          loading: state.carsState.loading,
        }));

        function req(){
            try{

        axios.get("https://airmeet1.herokuapp.com/car").then((res)=>{
dispatch(getcarsuccess(res.data))
console.log((res.data.length),"response")


        })
            }catch(e){
                console.log(e)
            }
        }

        useEffect(()=>{
req()
        },[])

        return<div className="bg-green-300">
           htnbgfvdcsxaz
           

           <table>
               <tr>
               <td className="w-24 border-2 border-gray-600">Sr no</td>
                   <td className="w-24 border-2 border-gray-600">make</td>
                   <td className="w-24 border-2 border-gray-600">model</td>
                   <td className="w-24 border-2 border-gray-600">year</td>
               </tr>
{
    console.log(cars,"cars",loading)
}
{/*               
               {cars.data.map((el,i)=>{
               return <tr key={el._id}>
                   {console.log(el)}
<td className="w-24 border-2 border-gray-600">{el.car_make}</td>
                   <td className="w-24 border-2 border-gray-600">model</td>
                   <td className="w-24 border-2 border-gray-600">year</td>
                   </tr>
})} */}
           </table>
        </div>
    }

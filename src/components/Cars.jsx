import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrementPage, getcarloading, getcarsuccess, incrementPage } from "../store/action";

export const Cars = ({setData})=>{
const dispatch = useDispatch()
const [show,setShow] = useState([])

    const { loading, cars, page} = useSelector(
        (state) => ({
          cars: state.carsState.cars,
          loading: state.carsState.loading,
          page:state.carsState.page
        }));

        function req(page){
            try{
dispatch(getcarloading())
        axios.get(`https://airmeet1.herokuapp.com/car?page=${page}`).then((res)=>{
dispatch(getcarsuccess(res.data))
setShow(res.data)
        })
       
            }catch(e){
                console.log(e)
            }
        }

        useEffect(()=>{
        req(page)
        },[])

const [check,setCheck]= useState([])
        const handleCheckbox = (event)=>{
            const target = event.target;
            const value = target.type === 'checkbox' ? target.checked : target.value;
            const name = target.name;
    
            setCheck(
               [...check,{[name]:value}]
            );
            setData(check)
            console.log(check)
        }

       
        const handleIncrement = ()=>{
           
            dispatch(incrementPage())
            req(page)
        }
        const handleDecrement = ()=>{
            dispatch(decrementPage())
            req(page)
        }
        return<div className="bg-green-300 h-screen">
         {loading?<img className="m-auto h-96" src="https://i.pinimg.com/originals/d7/34/49/d73449313ecedb997822efecd1ee3eac.gif"></img>:<table className="m-auto h-96">
               <tr>
               <td className="w-28 border-2 font-bold border-gray-600">Sr no</td>
                   <td className="w-28 border-2 font-bold border-gray-600">make</td>
                   <td className="w-28 border-2 font-bold border-gray-600">model</td>
                   <td className="w-28 border-2 font-bold border-gray-600">year</td>
                   <td className="w-28 border-2 font-bold border-gray-600">Select</td>
               </tr>            
               {cars?.cars.map((el,i)=>{
               return <tr key={el._id}>
                   
                   <td className="w-28 border-2 border-gray-600">{(page-1)*10 +i +1}</td>
        <td className="w-28 border-2 border-gray-600">{el.car_make}</td>
                   <td className="w-28 border-2 border-gray-600">{el.car_model}</td>
                   <td className="w-28 border-2 border-gray-600">{el.car_year}</td>
                   <td className="w-28 border-2 font-bold border-gray-600"><input className="w-6 h-6 ml-10"name={el._id} onChange={handleCheckbox} type="checkbox" /></td>
                   </tr>
})}
           </table>}
         <div className="w-fit m-auto"><button disabled={page == 1} onClick={handleDecrement} className="m-4 w-20 h-8 bg-slate-200 hover:bg-slate-600">Previous</button><button onClick={handleIncrement} className="m-4 hover:bg-slate-600 w-20 h-8 bg-slate-200">Next</button></div>
        </div>
    }

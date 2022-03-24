import { useDispatch, useSelector } from "react-redux";

export const Navbar = ()=>{

    const { page} = useSelector(
        (state) => ({
         
          page:state.carsState.page
        }));

return(<div><div className="flex bg-lime-500 p-6">
<p className="text-7xl m-auto animate-ping"> ITEM LISTS </p>
</div>

<div className="text-left flex">
    <button className="m-4 w-1/5 bg-yellow-100 border-2 border-black hover:bg-yellow-500">Mark selected as Favourite</button>
    <button className="m-4 w-1/5 bg-red-300 border-2 border-black hover:bg-red-800"> Delete Selected items</button>
    <div className="m-4 w-1/5">Current page is {page}</div>
</div>
</div>)
}
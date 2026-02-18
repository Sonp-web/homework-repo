import {useState} from "react"
const Input =()=>{
    const [state,setState]=useState("")


    return (
        <>
       <input value={state} onChange={e=>setState(e.target.value)}/>
       <p>{state}</p>
        </>
    )
}
export default Input
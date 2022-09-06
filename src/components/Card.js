import React from 'react'
import {useState} from "react"

function Card({data,isInStock}) {
    const [med,setMed] = useState([])
    // {console.log(isInStock)}

const showData =()=>{
    let newData = data;
    let filData = newData.filter((ele)=>ele.in_stock===isInStock)
    setMed(filData)
}

  return (
    <div>
        <h1>Medicines </h1>
        
        <h3>{isInStock ? "Instock Medicines": "Outstock Medicines"}</h3>
        <div >
        {med.map((ele,index)=><p key ={index}>{ele.drugName}</p>)}
        <button onClick={showData} >Show Medicines</button>

        </div>
    </div>
  )
}

export default Card
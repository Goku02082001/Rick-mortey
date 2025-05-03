import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Details.css'
import Timer from './Timer'
const Details = () => {
    const[data,setData]=useState([])
   
    const {id} = useParams()
   
    console.log(id)
    const getData=async()=>{
       try {
        const res=await  fetch(`https://rickandmortyapi.com/api/character/${id}`);
        const jsonData=await res.json();
        console.log("json",jsonData)
        setData(jsonData);
       } catch (error) {
        console.log(error)
       }
    }

    useEffect(()=>{
           
     getData(); 

    },[id])

    if(!data){
        return <h1>Loading.......</h1>
    }
  return (
         
                    <div key={data?.id} className='Container'>
                        <h1>welcome to detals component</h1>
                        <div className='Parents'>
                            <div>
                            <img src={data?.image} alt="err" />
                            </div>
                       <div className='textContainer'>
                       <div className='Name'>name:{data?.name}</div>
                        <div className='Status'>status:{data?.status}</div>
                        <div className='Spicies'>spicies:{data?.species}</div>
                        <div className='type'>type:{data?.type}</div>
                        <div className='gender'>gender:{data?.gender}</div>
                        <div className='origin'>origin:{data?.origin?.name}</div>
                        <div className='location'>location:{data?.location?.name}</div>
                        <div className='episode'>episode:{data?.episode?.length}</div> 
                       </div>
                        </div>
                     <Timer/>
                    </div>
                
       
  )
}

export default Details

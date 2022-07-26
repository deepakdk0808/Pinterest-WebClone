import React, { useEffect,useState } from 'react'
import {useParams} from 'react-router-dom'
import unplash from '../api/unplash'
import styled from "styled-components"
import Mainboard from './Mainboard'
import NoteFound from './NoteFound'
function SinglePin() {
    const [pins,setPins]=useState ([]);

   
    const getImages=(term)=>{
      return unplash.get("https://api.unsplash.com/search/photos",{
        params:{query:term}
      })
    }
  
   

    const [pin,setPin]=useState({});
    const {id}=useParams()
    useEffect(()=>{
       unplash.get(`https://api.unsplash.com/photos/${id}`).then((res)=>{
           setPin(res.data)
           getImages(res.data.alt_description).then((res)=>{
            let results=res.data.results;
            let newPins=[
              ...results,
              ...pins,
            ]
            newPins.sort(function(a,b){
              return 0.5-Math.random()
            });
            setPins(newPins);
          })
       }).catch((err)=>{
             return <NoteFound/>
       })
      
    },[])
    
    let check=Object.keys(pin).length
    if(check===0){
        return <div>Loading</div>
    }
    // console.log(pin)
  return (
      <>
     <WrapperSingle>
      <Inner>
        <LeftSide><img src={pin.urls.full} alt="" /></LeftSide>
        <RightSide>
            <h1>{pin.alt_description.charAt(0).toUpperCase() + pin.alt_description.slice(1)}</h1>
            <br/>
            <h3>{pin.description}</h3>
            <br/>
            <h4>{pin.location.title}</h4>
        </RightSide>
      </Inner>
       
 </WrapperSingle>
 
 <Mainboard pins={pins}/>
      </>

  )
}



const LeftSide = styled.div`

flex: 1;
border-radius:40px 0px 0px 40px;
border: 1px solid transparent;

img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius:40px 0px 0px 40px;
}


`

const RightSide = styled.div`
overflow: hidden;
padding: 40px 5px 20px 20px;
flex: 1;
border-radius:0px 40px 40px 0px;
border: 1px solid transparent;
`

const WrapperSingle=styled.div`
display: flex;
margin:auto;

width: 60%;
height: 700px;
/* border: 2px solid black; */


`

const Inner=styled.div`
display: flex;
width: 100%;
margin-top:80px;
border: 4px solid transparent;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
border-radius:40px;
`

export {WrapperSingle,Inner,LeftSide,RightSide,SinglePin}
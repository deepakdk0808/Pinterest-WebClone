import React from 'react'
import styled from "styled-components"
import Pin from './Pin'
function Mainboard({pins}) {
  return (
    <Wrapper>
        <Container>
            {pins.map((pin,i)=>{
                let {urls,alt_description,id}=pin;
               return <Pin key={i} urls={urls} alt_description={alt_description} id={id}/>
            })}
    
        </Container>
    </Wrapper>
  )
}

export default Mainboard

const Wrapper = styled.div`
background-color: white;
display: flex;
justify-content: center;
width: 100%;
height: 100%;
margin-top: 10px;
`

const Container = styled.div`
column-count: 5;
column-gap: 5px;
margin: 0 auto;
height: 100%;
max-width: 1260px;
margin-top: 63px;
background-color: white;
@media (min-width: 1260px) and (max-width: 1511px) {
  
    max-width: 1260px;
    column-count: 5;
  
}
@media (min-width: 1008px) and (max-width: 1259px) {
  
    max-width: 1008px;
    column-count: 4;
  
}
@media (min-width: 756px) and (max-width: 1007px) {
 
    max-width: 756px;
    column-count: 3;
  
}

@media (min-width: 0px) and (max-width: 755px) {
  
    max-width: 504px;
    column-count: 2;
  
}

`
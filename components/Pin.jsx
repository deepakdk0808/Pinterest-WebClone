// "rfce+tab" shortcut of templet of react component
import React from 'react'
// import { Link } from 'react-router-dom';
import styled from "styled-components";

function Pin({urls,alt_description,id}) {
  
  return (
    <Wrapper>
        <Container>
         
          <LinkComp href={`/pin/${id}`}>
          <img src={urls?.regular} loading="lazy" decoding='async' alt="pin"/>
          <h4>{alt_description===null?alt_description:alt_description.charAt(0).toUpperCase() + alt_description.slice(1)}</h4>
          </LinkComp>
          
        </Container>
    </Wrapper>
  )
}

export default Pin

const Wrapper = styled.div`
  display: inline-flex;
  /* border: 1px solid black; */
  padding: 8px;
`

const Container=styled.div`
display:flex;
align-items:center;
box-sizing:border-box;
cursor: pointer;
width:236px;

img{
    cursor:zoom-in;
    border-radius: 16px;
    background-color: #959595;
    object-fit: cover;
    opacity: 1;
    display: block;
    width: 100%;
    height: auto;
    transition: 0.5s ease;
     backface-visibility: hidden;
}


`

const LinkComp = styled.a`text-decoration: none;
color:black;

h5{
  color: #292929;
}
`



import styled from 'styled-components'
import PinterestIcon from '@mui/icons-material/Pinterest';
import IconButton from '@mui/material/IconButton'
import './styles.css'
import {Login} from './login'
import {Signup} from './signup'


function Navbar() {

  
  return (
      <>
      
   <Wrapper>
    <LogoWrapper>
      <IconButton>
      <PinterestIcon/><p className='pin'>Pinterest</p>
      </IconButton>
    </LogoWrapper>
   <div className='bttns'>
    <button>About</button>
    <button>Business</button>
    <button>Blog</button>
    <Login/>
    <Signup/>

   </div>
  </Wrapper>
          
          
   </>

          
  
  )
}

export default Navbar

const Wrapper = styled.div`
  display: flex;
  justify-content:space-between;
  height: 56px;
  padding:12px 4px 4px 16px;
  background-color: white;
  position: fixed;
  margin-top: -120px;
  z-index: 1;
  width:98%;
  color:red;
 
 `

 const LogoWrapper = styled.div`
 .MuiSvgIcon-root{
   color: #e60013;
   font-size: 35px;
   cursor: pointer;
   
}
 `

 



  

  

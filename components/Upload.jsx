import React from 'react'
import styled from "styled-components"
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import IconButton from '@mui/material/IconButton'
import {useDropzone} from 'react-dropzone'
import {useState} from 'react'
function Upload() {

    const [formData, setFormData]=useState({
        title:'',
        description:'',
        other:'',
      })
    
    
    const change=(e)=>{
      const {id,value}=e.target 
    
      setFormData({
          ...formData,
          [id]:value,
      })
      
    }


    
    const [files, setFiles] = useState([]);

    const {getRootProps, getInputProps, isDragActive} = useDropzone({  
        accept: 'image/*',
        onDrop: acceptedFiles => {
            setFiles(acceptedFiles.map(file => Object.assign(file, {
                preview: URL.createObjectURL(file)
            })));
        }
    })
   
    let arr= JSON.parse(localStorage.getItem('AddPinData')) || {}
   const submit=()=>{
    let obj={
        title:formData.title,
        description:formData.description,
        other:formData.other,
        files:files[0].preview
    }
    arr.push(obj)
    localStorage.setItem('AddPinData',JSON.stringify(arr))
      
 }
    
  return (
    <WrapperSingle>

    <Inner>
      <LeftSide {...getRootProps()} >

          {files.length===0?<><IconButton sx={{top:"40%",left:"15%",display:"block"}}>
         <CloudUploadIcon sx={{fontSize:"50px"}}/>
          <input {...getInputProps()} />
         <h5>Drag and drop or click to upload</h5>
            </IconButton>   
            
          <h4>Recommendation: use high-quality.jpg</h4></>:<img src={files[0].preview} alt=""/>}
   
          </LeftSide> 

      <RightSide>
          <input type="text" id='title' onChange={change} placeholder='Add your title' />
          <br/>
          <input type="text" id='description' onChange={change}  placeholder='Description' />
          <br/>
          <input type="text" id='other' onChange={change}  placeholder='Other' />
          <br />
          <HomePageButton onClick={submit}>Submit</HomePageButton>
      </RightSide>
    </Inner>
     
</WrapperSingle>
  )
}


export default Upload


const LeftSide = styled.div`

flex: 1;
border-radius:40px 0px 0px 40px;
object-fit: cover;
border: 1px solid transparent;
background-color: lightgray;
img{
    width: 100%;
    height: 100%;
   
    border-radius:40px 0px 0px 40px;
}

h4{
   margin-top: 95%;
   margin-left: 20%;
}

`

const RightSide = styled.div`
overflow: hidden;
padding: 40px 5px 20px 20px;
flex: 1;
border-radius:0px 40px 40px 0px;
border: 1px solid transparent;

input{
    width:70%;
    margin: 40px auto;
    height: 50px;
    border: none;
    border-bottom: 4px solid black;
    font-size: 30px;
    
    ::placeholder {
     font-size: 25px;
}
  :focus {
    outline: none;
}
}
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

const HomePageButton = styled.button`
 
background-color:#e60013;
 text-decoration: none;
  color:black;
  font-weight: 700;
  height:48px;
 min-width:123px;
 align-items:center;
 justify-content:center;
 border-radius:20px;
 cursor: pointer;
  :hover{
  background-color: #e1e1e1;
}

`
import React from 'react'
import { useEffect, useState } from "react";
import unplash from '../api/unplash';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    textAlign: 'center',
    transform: 'translate(-50%, -50%)',
    width:"35%",
    bgcolor: '#ff3c4c',
   
    borderRadius: '5px',
    boxShadow:20,
    p: 4,
 
  };
  


function HomeLayout() {
    const[datas,setDatas]=useState([])
  
    const [open, setOpen] =useState(false);
  const handleOpen = () =>{
    let check=localStorage.getItem("token")
    if(check===null){
      setOpen(true)
    }
    
    
  } 
  const handleClose = () => setOpen(false);
    const getImages=(term)=>{
        return unplash.get("https://api.unsplash.com/search/photos",{
          params:{query:term}
        })
      }
    

    const getNewPins=()=>{
        let promises=[];
        let pinData=[];
    
        let pins=["Chai Time Snacks Idea","Outfit Idea","Home Decor Idea"];
    
        pins.forEach((pin)=>{
          promises.push(getImages(pin).then((res)=>{
            let results=res.data.results;
            pinData=pinData.concat(results);
            pinData.sort(function(a,b){
              return 0.5-Math.random();
            })
          }));
        })
        Promise.all(promises).then(()=>{
            setDatas(pinData);
        })
      }
      useEffect(()=>{
        getNewPins()
      },[])
    return (
        <Box sx={{ width:"90%",margin:"auto",marginTop:"40px"}}>
          <ImageList variant="masonry" cols={4} gap={15}>
            {datas.map((item) => (
              <ImageListItem  sx={{borderRadius:"16px"}} key={item.img}>
               <img onClick={handleOpen}  decoding='async' style={{borderRadius:"16px",background:"grey"}}
                  src={item.urls.regular}
                  srcSet={item.urls.regular}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
          {/* ------------------------------------- */}
          <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
      
          <Typography id="modal-modal-description" sx={{ mt: 2,fontSize:"2rem",color:"white",fontWeight:"500" }}>
            Login Required
          </Typography>
        </Box>
      </Modal>
        </Box>
      );
  
}

export default HomeLayout
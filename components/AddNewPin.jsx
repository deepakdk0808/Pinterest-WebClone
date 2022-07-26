import * as React from 'react';
import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { Link } from 'react-router-dom';





export default function AddNewPin() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box>
      <Backdrop open={open} />
      <Link to={"/upload"}><SpeedDial
        ariaLabel="SpeedDial tooltip example"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        
        <SpeedDialAction
           icon={<AddPhotoAlternateIcon />}
           tooltipTitle="Create a Pin"
           tooltipOpen
           onClick={handleClose}
         />
        
      
     </SpeedDial></Link>  
    
    </Box>
  );
}

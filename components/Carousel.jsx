import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';


import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    
    imgPath:
      "Chai Time Snacks Idea",
      color:"red"

  },
  {
    
    imgPath:
    "DIY Idea",
    color:"blue"
  },
  {
    
    imgPath:
    "Outfit Idea",
    color:"yellow"
  },
  {
    
    imgPath:
    'Home Decor Idea',
    color:"green"
  },
];

export function Carousel() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
 

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <>
  
    <div className="header">
    Get Your Next Idea About
</div>

    <Box sx={{ maxWidth: 400, flexGrow: 1,margin:"auto",marginTop:"-160px" }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'background.default',
        //   border:"1px solid red",
          
        }}
      >
        <Typography>{images[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
           
          <div key={index}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="h1"
                sx={{
                  display: 'block',
                  maxWidth: 400,
                  overflow: 'hidden',
                  width: '100%',
                  textAlign:'center',
              
                  color:step.color,
                  fontSize:'40px',
                  fontWeight:"500"
                
                 }}
                
              >{step.imgPath}</Box>
             
            ) : null}
          </div>
        
        ))}
      </AutoPlaySwipeableViews>
     
    </Box>
    </>
  );
}

// export default SwipeableTextMobileStepper;
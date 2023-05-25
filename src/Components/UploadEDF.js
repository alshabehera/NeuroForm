import * as React from 'react';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import {  Box, Button, Grid, } from '@mui/material';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import Typography from '@mui/material/Typography';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';



const QontoConnector = styled(StepConnector)(() => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: 'calc(-50% + 16px)',
    right: 'calc(50% + 16px)',
    border:"3 px "
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: '#10A44B',
      
    },
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: '#10A44B',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: '#10A44B',
    },
  },
}));



const steps = ['Upload EDFs', 'Map Channels', 'Save and Preview'];


export default function UploadEDF() {
 
 
 
  return (
    
   <Stack  sx={{ width: '100%' }} spacing={2}>
      
     <div >
      <Stack direction="row"  spacing={100}>  
        <Box sx={{ backgroundColor:"#CDCDCD"}}>
        <Grid container  spacing={19}>
        <Grid item xs={8} >
         <p><strong>Test_study</strong></p>
        </Grid>
        </Grid>
       </Box>
        <div ><AccountCircle color="primary"sx={{alignItems:"baseline"}} />
            Alsha Behera
        </div>
      </Stack>
       </div>
    
    
    <div container >
        <Stepper sx={{alignItems:"baseline", border:"1px solid white",borderRadius:"5px", backgroundColor:"white"}} alternativeLabel activeStep={0}  connector={<QontoConnector / >}>
      {steps.map((label) => (
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
    </div>
   <div>

<Box
      sx={{
        paddingTop:"30px",
        width: 1010,
        height: 400,
        margin:"auto",
        backgroundColor: 'white',
        
      }}
    ><Box sx={{
        paddingTop:"150px",
        width: 800,
        height: 300,
        margin:"auto",
        border:"1px solid #8A8A8A",
        borderStyle:"dashed ",
        backgroundColor: '#F8F8F8',
        textAlign:"center",
        alignItem:"center"
        
        
      }}
    >
<div sx={{alignItems:"center",textAlign:"center"}}>
       <UploadFileIcon/>
 </div>

<Button sx={{border:"1px solid #6D6D6D" ,color:"#grey",fontSize:"10px"}} size="small" variant="outlined">Browse files</Button>
<Typography>or browse files here</Typography>

      </Box>
      </Box>
    </div>
     <div>
     <Stack >
<Button disabled sx={{ position: "absolute", bottom: "15px ",
right: "70%" }} variant="outlined">Back</Button>
<Button disabled sx={{ position: "absolute", bottom: "15px ",
right: "59%" }} >Cancel Montage</Button>

  <Button  sx={{ position: "absolute", bottom: "15px ",
right: "7px" }} variant="contained">  <Link style={{color:"black"}} className="nav-link" to="/Feed">Next</Link  ></Button>

        </Stack>
  </div>
    
</Stack>

   
  );
    }
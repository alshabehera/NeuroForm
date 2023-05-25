import * as React from 'react';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import {  Box, Grid, Paper,Button} from '@mui/material';
import schema from "./../schema.json";
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
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

 
 
export default function PreviewConfig() {
    
 
  
  return (
    <>
   <Stack sx={{ width: '100%' }} spacing={1}>
      
     <div>
      <Box sx={{ backgroundColor:"#CDCDCD"}}>
     <Grid container spacing={2}>
       <Grid item xs={6} md={3}>
         <p><strong>Test_study</strong></p>
       </Grid>
       <Grid item xs={5} md={9}>
       </Grid>
       </Grid>
       </Box>
</div>
    
      <Item><Stepper alternativeLabel activeStep={3}  connector={<QontoConnector / >}>
      {steps.map((label) => (
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
    </Item>
    <div>
      <Box sx={{ backgroundColor:"#E5F3FF",height:"50px",}}>
     <Grid sx={{textAlign:"center",fontSize:"16px",marginTop:"1px"}} container alignItems="flex-start" spacing={2}>
       <Grid item xs={2}>
         <p>Channels</p>
       </Grid>
       <Grid item xs={3}>
         <p>Primary Channel (default select)</p>
         </Grid>
       <Grid item xs={3} >
         <p>Reference Channel (default N/A)</p>
       </Grid>
      
       </Grid>
       </Box>
</div>
<div>
  <Grid style={{backgroundColor:"white"}}container >
    <Grid style={{borderBottom:"1px solid #a7acb1"}}item xs={2}> {schema.channels[0]}</Grid>
    
    <Grid item style={{border:"1px solid #a7acb1"}} xs={3}>AT</Grid>
    <Grid item style={{border:"1px solid #a7acb1"}} xs={3}>BRU
    </Grid>
    <Grid style={{paddingTop:"10px",paddingRight:"10px"}}item xs={4}>
    
    </Grid>
    </Grid>
<Grid style={{backgroundColor:"white"}}container>
    <Grid  style={{color:"grey"}}item xs={2}>BackUp Channels</Grid>
  
    <Grid item style={{border:"1px solid #a7acb1"}} xs={3}>CRT</Grid>
    <Grid item  style={{border:"1px solid #a7acb1"}} xs={3}>UTV</Grid>
    <Grid item xs={4}> <Button  style={{left:"120px"}}variant="outlined"><a href="./ChannelsMapped" >Edit Channel</a></Button></Grid>
    </Grid>
    
    <Grid style={{ color:"#a7acb1",backgroundColor:"white"}}container>
    <Grid  item xs={2}></Grid>
  
    <Grid item style={{border:"1px solid #a7acb1"}} xs={3}>MKJ</Grid>
    <Grid item style={{border:"1px solid #a7acb1"}} xs={3}>JIK</Grid>
    <Grid item xs={4}></Grid>
    </Grid>
    

</div>
<div>
  <Grid style={{backgroundColor:"white"}}container >
    <Grid style={{borderBottom:"1px solid #a7acb1"}}item xs={2}> {schema.channels[1]}</Grid>
    
    <Grid item style={{border:"1px solid #a7acb1"}} xs={3}>AT</Grid>
    <Grid item style={{border:"1px solid #a7acb1"}} xs={3}>BRU
    </Grid>
    <Grid style={{paddingTop:"10px",paddingRight:"10px"}}item xs={4}>
    
    </Grid>
    </Grid>
<Grid style={{backgroundColor:"white"}}container>
    <Grid  style={{color:"grey"}}item xs={2}>BackUp Channels</Grid>
  
    <Grid item style={{border:"1px solid #a7acb1"}} xs={3}>CRT</Grid>
    <Grid item  style={{border:"1px solid #a7acb1"}} xs={3}>UTV</Grid>
    <Grid item xs={4}> <Button  style={{left:"120px"}}variant="outlined"  > <a href="./ChannelsMapped" >Edit Channel</a></Button></Grid>
    </Grid>
    
    <Grid style={{ color:"#a7acb1",backgroundColor:"white"}}container>
    <Grid  item xs={2}></Grid>
  
    <Grid item style={{border:"1px solid #a7acb1"}} xs={3}>MKJ</Grid>
    <Grid item style={{border:"1px solid #a7acb1"}} xs={3}>JIK</Grid>
    <Grid item xs={4}></Grid>
    </Grid>
    

</div>
<div>
  <Grid style={{backgroundColor:"white"}}container >
    <Grid style={{borderBottom:"1px solid #a7acb1"}}item xs={2}> {schema.channels[2]}</Grid>
    
    <Grid item style={{border:"1px solid #a7acb1"}} xs={3}>AT</Grid>
    <Grid item style={{border:"1px solid #a7acb1"}} xs={3}>BRU
    </Grid>
    <Grid style={{paddingTop:"10px",paddingRight:"10px"}}item xs={4}>
    
    </Grid>
    </Grid>
<Grid style={{backgroundColor:"white"}}container>
    <Grid  style={{color:"grey"}}item xs={2}>BackUp Channels</Grid>
  
    <Grid item style={{border:"1px solid #a7acb1"}} xs={3}>CRT</Grid>
    <Grid item  style={{border:"1px solid #a7acb1"}} xs={3}>UTV</Grid>
    <Grid item xs={4}> <Button  style={{left:"120px"}}variant="outlined"  > <a href="./ChannelsMapped" >Edit Channel</a></Button></Grid>
    </Grid>
    
    <Grid style={{ color:"#a7acb1",backgroundColor:"white"}}container>
    <Grid  item xs={2}></Grid>
  
    <Grid item style={{border:"1px solid #a7acb1"}} xs={3}>MKJ</Grid>
    <Grid item style={{border:"1px solid #a7acb1"}} xs={3}>JIK</Grid>
    <Grid item xs={4}></Grid>
    </Grid>
    

</div>
<div>
  <Grid style={{backgroundColor:"white"}}container >
    <Grid style={{borderBottom:"1px solid #a7acb1"}}item xs={2}> {schema.channels[3]}</Grid>
    
    <Grid item style={{border:"1px solid #a7acb1"}} xs={3}>AT</Grid>
    <Grid item style={{border:"1px solid #a7acb1"}} xs={3}>BRU
    </Grid>
    <Grid style={{paddingTop:"10px",paddingRight:"10px"}}item xs={4}>
    </Grid>

    </Grid>
<Grid style={{backgroundColor:"white"}}container>
    <Grid  style={{color:"grey"}}item xs={2}>BackUp Channels</Grid>
  
    <Grid item style={{border:"1px solid #a7acb1"}} xs={3}>CRT</Grid>
    <Grid item  style={{border:"1px solid #a7acb1"}} xs={3}>UTV</Grid>
    <Grid item xs={4}>
     <Button style={{left:"120px"}} variant="outlined" > <a href="./ChannelsMapped" > Edit Channel</a></Button></Grid>
    </Grid>
    
    <Grid style={{ color:"#a7acb1",backgroundColor:"white"}}container>
    <Grid  item xs={2}></Grid>
  
    <Grid item style={{border:"1px solid #a7acb1"}} xs={3}>MKJ</Grid>
    <Grid item style={{border:"1px solid #a7acb1"}} xs={3}>JIK</Grid>
    <Grid item xs={4}></Grid>
    </Grid>
    

</div>
<div>
  <Grid style={{backgroundColor:"white"}}container >
    <Grid style={{borderBottom:"1px solid #a7acb1"}}item xs={2}> {schema.channels[4]}</Grid>
    
    <Grid item style={{border:"1px solid #a7acb1"}} xs={3}>AT</Grid>
    <Grid item style={{border:"1px solid #a7acb1"}} xs={3}>BRU
    </Grid>
    <Grid style={{paddingTop:"10px",paddingRight:"10px"}}item xs={4}>
    
    </Grid>
    </Grid>
<Grid style={{backgroundColor:"white"}}container>
    <Grid  style={{color:"grey"}}item xs={2}>BackUp Channels</Grid>
  
    <Grid item style={{border:"1px solid #a7acb1"}} xs={3}>CRT</Grid>
    <Grid item  style={{border:"1px solid #a7acb1"}} xs={3}>UTV</Grid>
    <Grid item xs={4}> <Button style={{left:"120px"}}variant="outlined"  > <a href="./ChannelsMapped" >Edit Channel</a></Button></Grid>
    </Grid>
    
    <Grid style={{ color:"#a7acb1",backgroundColor:"white"}}container>
    <Grid  item xs={2}></Grid>
  
    <Grid item style={{border:"1px solid #a7acb1"}} xs={3}>MKJ</Grid>
    <Grid item style={{border:"1px solid #a7acb1"}} xs={3}>JIK</Grid>
    <Grid item xs={4}></Grid>
    </Grid>
    

</div>
<div>
  <Grid style={{backgroundColor:"white"}}container >
    <Grid style={{borderBottom:"1px solid #a7acb1"}}item xs={2}> {schema.channels[5]}</Grid>
    
    <Grid item style={{border:"1px solid #a7acb1"}} xs={3}>AT</Grid>
    <Grid item style={{border:"1px solid #a7acb1"}} xs={3}>BRU
    </Grid>
    <Grid style={{paddingTop:"10px",paddingRight:"10px"}}item xs={4}>
     
    </Grid>
    </Grid>
<Grid style={{backgroundColor:"white"}}container>
    <Grid  style={{color:"grey"}}item xs={2}>BackUp Channels</Grid>
  
    <Grid item style={{border:"1px solid #a7acb1"}} xs={3}>CRT</Grid>
    <Grid item  style={{border:"1px solid #a7acb1"}} xs={3}>UTV</Grid>
    <Grid item xs={4}><Button style={{left:"120px"}}variant="outlined"  > <a href="./ChannelsMapped" >Edit Channel</a></Button></Grid>
    </Grid>
    
    <Grid style={{ color:"#a7acb1",backgroundColor:"white"}}container>
    <Grid  item xs={2}></Grid>
  
    <Grid item style={{border:"1px solid #a7acb1"}} xs={3}>MKJ</Grid>
    <Grid item style={{border:"1px solid #a7acb1"}} xs={3}>JIK</Grid>
    <Grid item xs={4}></Grid>
    </Grid>
    

</div>
<div>
  <Grid style={{backgroundColor:"white"}}container >
    <Grid style={{borderBottom:"1px solid #a7acb1"}}item xs={2}> {schema.channels[6]}</Grid>
    
    <Grid item style={{border:"1px solid #a7acb1"}} xs={3}>AT</Grid>
    <Grid item style={{border:"1px solid #a7acb1"}} xs={3}>BRU
    </Grid>
    <Grid style={{paddingTop:"10px",paddingRight:"10px"}}item xs={4}>
    </Grid>
    </Grid>
<Grid style={{backgroundColor:"white"}}container>
    <Grid  style={{color:"grey"}}item xs={2}>BackUp Channels</Grid>
  
    <Grid item style={{border:"1px solid #a7acb1"}} xs={3}>CRT</Grid>
    <Grid item  style={{border:"1px solid #a7acb1"}} xs={3}>UTV</Grid>
    <Grid item xs={4}> <Button  style={{left:"120px"}}variant="outlined"  > <a href="./ChannelsMapped" > Edit Channel</a></Button></Grid>
    </Grid>
    
    <Grid style={{ color:"#a7acb1",backgroundColor:"white"}}container>
    <Grid  item xs={2}>
    </Grid>
  
    <Grid item style={{border:"1px solid #a7acb1"}} xs={3}>MKJ</Grid>
    <Grid item style={{border:"1px solid #a7acb1"}} xs={3}>JIK</Grid>
    <Grid item xs={4}></Grid>
    </Grid>
    <Item>
 {/*<div sx={{padding:"50px"}}>
 <Stack style={{boxShadow:"none"}} >*/}

 <Grid  >
  <Grid item xs={2}></Grid >
  <Grid item xs={3}><Button style={{right:"40%"}} variant="outlined">Back</Button></Grid>
  <Grid item xs={3}><Button style={{position: "fixed",right:"29%"}} disabled  >Cancel Montage</Button></Grid>
 <Grid item xs={3}> <Button sx={{ position: "fixed", bottom: "15px ",
 right: "7px" }} variant="contained" color="success">  <Link style={{color:"black"}} className="nav-link" to="/SavedConfig">Save</Link></Button></Grid>
 
 
  
 </Grid>
  </Item>  

</div>

</Stack>  

     

    </>
  );
}

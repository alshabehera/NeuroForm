import * as React from 'react';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import {  Box, Grid, Paper,Button} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
import schema from "./../schema.json";

const currencies = [
  {
    value: 'USD',
    label: 'usd',
  },
  {
    value: 'EUR',
    label: 'Eur',
  },
  {
    value: 'BTC',
    label: 'Btc',
  },
  {
    value: 'JPY',
    label: 'jpy',
  },
  {
    value: 'USD',
    label: 'usd',
  },
  {
    value: 'EUR',
    label: 'Eur',
  },
  {
    value: 'BTC',
    label: 'Btc',
  },
  {
    value: 'JPY',
    label: 'jpy',
  },
];


const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: 'calc(-50% + 16px)',
    right: 'calc(50% + 16px)',
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: '#784af4',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: '#784af4',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderTopWidth: 3,
    borderRadius: 1,
  },
}));



const steps = ['Upload EDFs', 'Map Channels', 'Save and Preview'];
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function CustomizedSteppers() {
  
 
  
return (
<>
<Stack sx={{ width: '80%' }} spacing={1}>
  <div>
      <Box sx={{ backgroundColor:"#CDCDCD"}}>
        
         <Grid item xs={6} md={3}>
         <p><strong>Test_study</strong></p>
         </Grid>
         <Grid>
          <p></p>
        </Grid>
      </Box>
  </div>
  
  
   <Item><Stepper alternativeLabel activeStep={0}  connector={<QontoConnector / >}>
     {steps.map((label) => (
     <Step key={label}>
      <StepLabel>{label}</StepLabel>
      </Step>
     ))}
        </Stepper>
    </Item>
  

<Item> <Box sx={{ backgroundColor:"#E5F3FF",height:"50px",}}>
<Grid sx={{fontSize:"15px",marginTop:"1px"}} container alignItems="flex-start" spacing={2}>
  <Grid item xs={2}>
    <div>Channels</div>
  </Grid>
  <Grid item xs={3} style={{paddingLeft:"9px"}}>
    <div sx={{textAlign:"right"}}>Primary Channel (default select)</div>
    </Grid>
  <Grid item xs={4} >
    <div>Reference Channel (default N/A)</div>
  </Grid>
 
  </Grid>
  </Box>
</Item>

<Item >
  <Box>
      <Grid   sx={{textAlign:"center",fontSize:"14px"}} container alignItems="flex-start"  spacing={1}>
       <Grid item xs={2} md={2}>
        <p> {schema.channels[0]}</p>
          </Grid>
       <Grid item xs={3} md={3} style={{paddingTop:"10px",paddingLeft:"39px"}} >
           <div id="selectContainer" >
            <select id="statement" name='statement' className='form-control'>
              <option values="">Select Channels</option>
              
              {currencies.map((option) => (
                  <option value={option.value} key={option.value}>{option.label}</option>
                ))} 
              </select>
           </div>
           </Grid>
        <Grid item xs={4} md={4} style={{paddingTop:"10px",paddingLeft:"30px"}}>
           <div id="selectContainer" >
            <select id="statement" name='statement' className='form-control' >
              <option values="">Select Channels</option>
              
              {currencies.map((option) => (
                  <option value={option.value} key={option.value}>{option.label}</option>
                ))} 
                </select>
           </div>
           </Grid>
           <Grid sx={{paddingLeft:"60px"}}>
      <td><nobr><Button id="btn" sx={{textTransform: 'none'}}startIcon={<AddIcon color="error"/>} color="error"  >Add Backup</Button></nobr></td>
        
      </Grid>
       
    </Grid>
    </Box>
 </Item>
 <Item >
 <Box>
     <Grid   sx={{textAlign:"center",fontSize:"14px"}} container alignItems="flex-start"  spacing={1}>
      <Grid item xs={2} md={2}>
       <p> {schema.channels[1]}</p>
         </Grid>
      <Grid item xs={3} md={3}  style={{paddingTop:"10px",paddingLeft:"39px"}}>
          <div id="selectContainer">
           <select id="statement" name='statement' className='form-control'>
             <option values="">Select Channels</option>
             
             {currencies.map((option) => (
                 <option value={option.value} key={option.value}>{option.label}</option>
               ))} 
             </select>
          </div>
          </Grid>
       <Grid item xs={4} md={4}  style={{paddingTop:"10px",paddingLeft:"30px"}}>
          <div id="selectContainer" sx={{marginTop:"19px",alignItems:"center"}}>
           <select id="statement" name='statement' className='form-control' >
             <option values="">Select Channels</option>
             
             {currencies.map((option) => (
                 <option value={option.value} key={option.value}>{option.label}</option>
               ))} 
               </select>
          </div>
          </Grid>
          <Grid sx={{paddingLeft:"60px"}}>
     <td><nobr><Button id="btn" sx={{textTransform: 'none'}}startIcon={<AddIcon color="error"/>} color="error"  >Add Backup</Button></nobr></td>
       
     </Grid>
      
   </Grid>
   </Box>
</Item>
<Item >
  <Box>
      <Grid   sx={{textAlign:"center",fontSize:"14px"}} container alignItems="flex-start"  spacing={1}>
       <Grid item xs={2} md={2}>
        <p> {schema.channels[2]}</p>
          </Grid>
       <Grid item xs={3} md={3}  style={{paddingTop:"10px",paddingLeft:"39px"}}>
           <div id="selectContainer">
            <select id="statement" name='statement' className='form-control'>
              <option values="">Select Channels</option>
              
              {currencies.map((option) => (
                  <option value={option.value} key={option.value}>{option.label}</option>
                ))} 
              </select>
           </div>
           </Grid>
        <Grid item xs={4} md={4}  style={{paddingTop:"10px",paddingLeft:"30px"}}>
           <div id="selectContainer" sx={{marginTop:"19px",alignItems:"center"}}>
            <select id="statement" name='statement' className='form-control' >
              <option values="">Select Channels</option>
              
              {currencies.map((option) => (
                  <option value={option.value} key={option.value}>{option.label}</option>
                ))} 
                </select>
           </div>
           </Grid>
           <Grid sx={{paddingLeft:"60px"}}>
      <td><nobr><Button id="btn" sx={{textTransform: 'none'}}startIcon={<AddIcon color="error"/>} color="error"  >Add Backup</Button></nobr></td>
        
      </Grid>
       
    </Grid>
    </Box>
 </Item>
 <Item >
 <Box>
     <Grid   sx={{textAlign:"center",fontSize:"14px"}} container alignItems="flex-start"  spacing={1}>
      <Grid item xs={2} md={2}>
       <p> {schema.channels[3]}</p>
         </Grid>
      <Grid item xs={3} md={3}  style={{paddingTop:"10px",paddingLeft:"39px"}}>
          <div id="selectContainer">
           <select id="statement" name='statement' className='form-control'>
             <option values="">Select Channels</option>
             
             {currencies.map((option) => (
                 <option value={option.value} key={option.value}>{option.label}</option>
               ))} 
             </select>
          </div>
          </Grid>
       <Grid item xs={4} md={4}  style={{paddingTop:"10px",paddingLeft:"30px"}}>
          <div id="selectContainer" sx={{marginTop:"19px",alignItems:"center"}}>
           <select id="statement" name='statement' className='form-control' >
             <option values="">Select Channels</option>
             
             {currencies.map((option) => (
                 <option value={option.value} key={option.value}>{option.label}</option>
               ))} 
               </select>
          </div>
          </Grid>
          <Grid sx={{paddingLeft:"60px"}}>
     <td><nobr><Button id="btn" sx={{textTransform: 'none'}}startIcon={<AddIcon color="error"/>} color="error"  >Add Backup</Button></nobr></td>
       
     </Grid>
      
   </Grid>
   </Box>
</Item>
 
 <Item >
  <Box>
      <Grid   sx={{textAlign:"center",fontSize:"14px"}} container alignItems="flex-start"  spacing={1}>
       <Grid item xs={2} md={2}>
        <p> {schema.channels[4]}</p>
          </Grid>
       <Grid item xs={3} md={3}  style={{paddingTop:"10px",paddingLeft:"39px"}}>
           <div id="selectContainer">
            <select id="statement" name='statement' className='form-control'>
              <option values="">Select Channels</option>
              
              {currencies.map((option) => (
                  <option value={option.value} key={option.value}>{option.label}</option>
                ))} 
              </select>
           </div>
           </Grid>
        <Grid item xs={4} md={4} style={{paddingTop:"10px",paddingLeft:"30px"}}>
           <div id="selectContainer" sx={{marginTop:"19px",alignItems:"center"}}>
            <select id="statement" name='statement' className='form-control' >
              <option values="">Select Channels</option>
              
              {currencies.map((option) => (
                  <option value={option.value} key={option.value}>{option.label}</option>
                ))} 
                </select>
           </div>
           </Grid>
           <Grid sx={{paddingLeft:"60px"}}>
      <td><nobr><Button id="btn" sx={{textTransform: 'none'}}startIcon={<AddIcon color="error"/>} color="error"  >Add Backup</Button></nobr></td>
        
      </Grid>
       
    </Grid>
    </Box>
 </Item>

<Item >
<Box>
    <Grid   sx={{textAlign:"center",fontSize:"14px"}} container alignItems="flex-start"  spacing={1}>
     <Grid item xs={2} md={2}>
      <p> {schema.channels[5]}</p>
        </Grid>
     <Grid item xs={3} md={3} style={{paddingTop:"10px",paddingLeft:"39px"}} >
         <div id="selectContainer" >
          <select id="statement" name='statement' className='form-control'>
            <option values="">Select Channels</option>
            
            {currencies.map((option) => (
                <option value={option.value} key={option.value}>{option.label}</option>
              ))} 
            </select>
         </div>
         </Grid>
      <Grid item xs={4} md={4} style={{paddingTop:"10px",paddingLeft:"30px"}}>
         <div id="selectContainer" >
          <select id="statement" name='statement' className='form-control' >
            <option values="">Select Channels</option>
            
            {currencies.map((option) => (
                <option value={option.value} key={option.value}>{option.label}</option>
              ))} 
              </select>
         </div>
         </Grid>
         <Grid sx={{paddingLeft:"60px"}}>
    <td><nobr><Button id="btn" sx={{textTransform: 'none'}}startIcon={<AddIcon color="error"/>} color="error"  >Add Backup</Button></nobr></td>
      
    </Grid>
     
  </Grid>
  </Box>
</Item>
<Item >
  <Box>
      <Grid   sx={{textAlign:"center",fontSize:"14px"}} container alignItems="flex-start"  spacing={1}>
       <Grid item xs={2} md={2}>
        <p> {schema.channels[6]}</p>
          </Grid>
       <Grid item xs={3} md={3} style={{paddingTop:"10px",paddingLeft:"39px"}} >
           <div id="selectContainer" >
            <select id="statement" name='statement' className='form-control'>
              <option values="">Select Channels</option>
              
              {currencies.map((option) => (
                  <option value={option.value} key={option.value}>{option.label}</option>
                ))} 
              </select>
           </div>
           </Grid>
        <Grid item xs={4} md={4} style={{paddingTop:"10px",paddingLeft:"30px"}}>
           <div id="selectContainer" >
            <select id="statement" name='statement' className='form-control' >
              <option values="">Select Channels</option>
              
              {currencies.map((option) => (
                  <option value={option.value} key={option.value}>{option.label}</option>
                ))} 
                </select>
           </div>
           </Grid>
           <Grid sx={{paddingLeft:"60px"}}>
      <td><nobr><Button id="btn" sx={{textTransform: 'none'}}startIcon={<AddIcon color="error"/>} color="error"  >Add Backup</Button></nobr></td>
        
      </Grid>
       
    </Grid>
    </Box>
 </Item><Item >
  <Box>
      <Grid   sx={{textAlign:"center",fontSize:"14px"}} container alignItems="flex-start"  spacing={1}>
       <Grid item xs={2} md={2}>
        <p> {schema.channels[7]}</p>
          </Grid>
       <Grid item xs={3} md={3} style={{paddingTop:"10px",paddingLeft:"39px"}} >
           <div id="selectContainer" >
            <select id="statement" name='statement' className='form-control'>
              <option values="">Select Channels</option>
              
              {currencies.map((option) => (
                  <option value={option.value} key={option.value}>{option.label}</option>
                ))} 
              </select>
           </div>
           </Grid>
        <Grid item xs={4} md={4} style={{paddingTop:"10px",paddingLeft:"30px"}}>
           <div id="selectContainer" >
            <select id="statement" name='statement' className='form-control' >
              <option values="">Select Channels</option>
              
              {currencies.map((option) => (
                  <option value={option.value} key={option.value}>{option.label}</option>
                ))} 
                </select>
           </div>
           </Grid>
           <Grid sx={{paddingLeft:"60px"}}>
      <td><nobr><Button id="btn" sx={{textTransform: 'none'}}startIcon={<AddIcon color="error"/>} color="error"  >Add Backup</Button></nobr></td>
        
      </Grid>
       
    </Grid>
    </Box>
 </Item><Item >
  <Box>
      <Grid   sx={{textAlign:"center",fontSize:"14px"}} container alignItems="flex-start"  spacing={1}>
       <Grid item xs={2} md={2}>
        <p> {schema.channels[8]}</p>
          </Grid>
       <Grid item xs={3} md={3} style={{paddingTop:"10px",paddingLeft:"39px"}} >
           <div id="selectContainer" >
            <select id="statement" name='statement' className='form-control'>
              <option values="">Select Channels</option>
              
              {currencies.map((option) => (
                  <option value={option.value} key={option.value}>{option.label}</option>
                ))} 
              </select>
           </div>
           </Grid>
        <Grid item xs={4} md={4} style={{paddingTop:"10px",paddingLeft:"30px"}}>
           <div id="selectContainer" >
            <select id="statement" name='statement' className='form-control' >
              <option values="">Select Channels</option>
              
              {currencies.map((option) => (
                  <option value={option.value} key={option.value}>{option.label}</option>
                ))} 
                </select>
           </div>
           </Grid>
           <Grid sx={{paddingLeft:"60px"}}>
      <td><nobr><Button id="btn" sx={{textTransform: 'none'}}startIcon={<AddIcon color="error"/>} color="error"  >Add Backup</Button></nobr></td>
        
      </Grid>
       
    </Grid>
    </Box>
 </Item>
 <Item>
 {/*<div sx={{padding:"50px"}}>
 <Stack style={{boxShadow:"none"}} >*/}

 <Grid  >
  <Grid item xs={2}></Grid >
  <Grid item xs={3}><Button style={{right:"40%"}} variant="outlined">Back</Button></Grid>
  <Grid item xs={3}><Button style={{position: "fixed",right:"29%"}} disabled  >Cancel Montage</Button></Grid>
 <Grid item xs={3}> <Button sx={{ position: "fixed", bottom: "15px ", color:"black",
 right: "7px" }} variant="contained">  <Link style={{color:"black"}} className="nav-link" to="/ChannelsMapped">Next</Link  ></Button></Grid>
 
 
  
 </Grid>


         


    {/*</Item></Stack>
    </div*/}
    </Item>
         </Stack>


  
  

    </>
  );
}
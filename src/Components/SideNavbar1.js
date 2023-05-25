import { Box,  Divider,  List, ListItem, ListItemButton, ListItemIcon, ListItemText, } from '@mui/material'
import GridViewIcon from '@mui/icons-material/GridView';
import NoteAddOutlinedIcon from '@mui/icons-material/NoteAddOutlined';
import TollOutlinedIcon from '@mui/icons-material/TollOutlined';


import { Link } from 'react-router-dom';
import React from 'react'
export default function SideNavbar1()  {
 
  return (
   
    

    
        
    <Box flex={1.5} style={{width:"200px"}} sx={{color:"white",backgroundColor:"#04273A", height:"600px"}}>
      <nav aria-label="main mailbox folders" >
        <List>
          <ListItem disablePadding>
            <ListItemButton >
              <ListItemText sx={{fontSize:"20cm", }} primary="React_Test" />
            </ListItemButton  >
          </ListItem>
          </List>
          </nav>
          <Divider color="white"/>
          <nav aria-label="secondary mailbox folders">
            
          <List>
          
          <ListItem disablePadding >
            <ListItemButton  component="a" href="#DA">
            <ListItemIcon sx={{color:"#fff"}}>
              <GridViewIcon  />
              </ListItemIcon>
             <Link className="nav-link" to="/">Dashboarrd</Link>
            </ListItemButton>
          </ListItem>
          
          
          <ListItem disablePadding>
            <ListItemButton component="a" href="#Montages">
          <ListItemIcon sx={{color:"#fff"}}>
              <NoteAddOutlinedIcon/>
            </ListItemIcon>
            <Link className="nav-link" to="/UploadEDF">Montages</Link>
            </ListItemButton>
          </ListItem>
          
          <ListItem disablePadding>
            <ListItemButton component="a" href="#Credits">
            <ListItemIcon sx={{color:"#fff"}}>
              <TollOutlinedIcon />
              </ListItemIcon >
              <Link className="nav-link" to="/">Credits</Link>
            </ListItemButton>
          </ListItem>
         
        </List>
    
        
 
   
   
      <div style={{position:"relative",width:"200px",height:"100px",paddingBottom:"80px",paddingTop:"200px",paddingLeft:"30px",paddingRight:"30px"}}>
      
      
      <p style={{ padding:"10px 10px",backgroundColor:" #02354F", textAlign:'center'}}><h2 className="card-title">1,650</h2><div className="card-subtitle  mb-2" >Total Credits Available</div></p></div>
     
  </nav> 
          
          
    </Box>
  
    
 
  );
}



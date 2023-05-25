import React from 'react';
import SideNavbar1 from "./Components/SideNavbar1.js";
import UploadEDF from './Components/UploadEDF';
import Feed from "./Components/Feed.js";
import  ChannelsMapped from "./Components/ChannelsMapped.js";
import { Stack } from '@mui/material';
import  SavedConfig from "./Components/SavedConfig.js";
import PreviewConfig from "./Components/PreviewConfig"
import {Route,Routes } from 'react-router-dom';

export default function App() {
 
  document.body.style.backgroundColor='#CDCDCD'
  return (
    <Stack direction="row" spacing={2}>
   
    <SideNavbar1 />
      <Routes>
      
      <Route exact path='/UploadEDF' element={ <UploadEDF />} />
       
       
         <Route exact path='/ChannelsMapped' element={<ChannelsMapped/>}/>
         <Route exact path='/Feed' element={<Feed/>}/>
         <Route exact path='/PreviewConfig' element={<PreviewConfig/>}/>
         <Route exact path='/SavedConfig' element={<SavedConfig/>}/>
         
         
      </Routes>
  
     </Stack>
     
       
      
   
  );
}



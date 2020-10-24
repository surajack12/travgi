import React,{useState} from 'react';
import {Grid,Typography,Paper,TextField,Button, CssBaseline,Box,Avatar,Badge,Container} from '@material-ui/core';
import './profile.css';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/ToolBar'
import IconButton from '@material-ui/core/IconButton'
import {ArrowBackIosRounded,CameraAltRounded,Edit} from '@material-ui/icons';


 function profile(props){
     
   const state={
       name:'',
       email:'',
       edit:'',
       phone:''
   }
        
     

    return(
        <div > 
            <CssBaseline/>
            <AppBar position="static"  >
        <Toolbar className="theme-back" >
          <IconButton edge="start"  aria-label="menu" href="../">
            <ArrowBackIosRounded />
          </IconButton>
          <Typography  variant="body1" style={{marginLeft:'1rem'}}>ProjectIND</Typography> 
        </Toolbar>
      </AppBar>
      <Paper variant="outlined" className="paper">
           <Grid container  spacing={3}>
               <Grid item sm={12} md={4} lg={3} xs={12} alignContent="center" >
                <Box className="box">
                <Badge
                overlap="circle"
                anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
                }}
                badgeContent={
                <Avatar variant="circle" style={{backgroundColor:'white',cursor:'pointer',border:'thin solid skyblue'}}>
                <CameraAltRounded style={{color:'black'}} />
                </Avatar>
                }
            >
                <Avatar alt="Travis Howard" src="https://images4.alphacoders.com/936/thumbbig-936378.jpg"  className="profile-pic" />
            </Badge>


                      
                </Box>
                <Container maxWidth="lg">
                <Typography variant="h6">Profile detailes</Typography>

                        <Button  size="small" variant="outlined"  >
                            <Edit  />Edit
                        </Button>

                        <TextField size="small"  className="TextField" value={state.name} fullWidth  type="text" variant="outlined" placeholder="Name" />
                        <TextField size="small" className="TextField" value={state.email} fullWidth  type="email" variant="outlined" placeholder="Email" />
                        <TextField size="small" className="TextField" value={state.phone} fullWidth  type="tel" variant="outlined" placeholder="Phone" />
                      <Button className="mt-2 text-white mb-2  bg-success" variant="outlined" fullWidth  > Update</Button>
                        
                   
                </Container>
               
               </Grid>
               <Grid item  lg={9} md={8} sm={12} xs={12}>
               
               </Grid>

           </Grid>
           </Paper>
        </div>
    )
}
export default profile;
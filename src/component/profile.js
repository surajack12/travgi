import React  from 'react';
import {Grid,Typography,Paper,makeStyles, CssBaseline} from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/ToolBar'
import IconButton from '@material-ui/core/IconButton'
import {ArrowBackIosRounded} from '@material-ui/icons';
const useStyles = makeStyles((theme)=>({
    root :{
        flexGrow:1,
        paddingBlock:1
        
    },
    paper:{
        padding:theme.spacing(1),
        textAlign:'center',
        color:theme.palette.text.primary
    },
    title:{
        paddingLeft:'5px'
    }
}))

 function profile(props){
const classes= useStyles;
    return(
        <div className={classes.root}> 
            <CssBaseline/>
            <AppBar position="static"  >
        <Toolbar className="theme-back" >
          <IconButton edge="start"  aria-label="menu">
            <ArrowBackIosRounded />
          </IconButton>
          <Typography variant="h6" >
            Photos
          </Typography>
          
        </Toolbar>
      </AppBar>
           <Grid container alignContent="center">
               <Grid item sm={12} lg={4} xs={12} alignContent="center">
                    textAlign
               </Grid>
               <Grid item  lg={8} sm={12} xs={12}>
                   textAlign
               </Grid>

           </Grid>

        </div>
    )
}
export default profile;
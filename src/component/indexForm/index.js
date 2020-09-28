import React from "react";
import {Container, Grid,Typography,TextField,Button, DialogTitle, Dialog, DialogContent, DialogActions, DialogContentText} from '@material-ui/core'
import { ArrowForwardRounded} from '@material-ui/icons'

export default class indexForm extends React.Component{
    constructor(props){
        super()
        this.state={
            name:'',
            email:'',
            phone:'',
            open:false
        }
      
  }
 

  handleSubmit= event =>
   {
    event.preventDefault();
      
    const data = this.state;
    fetch("http://localhost:8080/signup1",
    { 
      
        method: "POST",
        body: JSON.stringify(data),               
        headers: {  "Content-type": "application/json; charset=UTF-8" } 
    }) 
    .then(response => response.json()) 
    .then(json =>{
        if(json.code === 1)
        {
           alert('We are sending verification code to : '+this.state.phone);
            this.handleClickOpen();
        }
    }); 

}

handleClickOpen = () => {
    this.setState({open:true});
   
  };
  
   handleClose = () => {
   this.setState({open:false});
  
  };
    render(){
        
        

      
       
        return(
          <> 
           <Container maxWidth="sm" style={{border:'1px solid gray',borderRadius:'0.7rem'}} fixed> 
        <form style={{padding:"1rem"}} encType="multipart/form-data" onSubmit={this.handleSubmit}  >
        <Grid component="div"  container  style={{marginBottom:'2rem'}}>
                <Grid  item  component="div">
                    <Typography variant="h4" >Car Owner</Typography>
                    <Typography  variant="subtitle1" >Enter the following details</Typography>
                </Grid>
            </Grid>
                 <TextField
                 required
                 id="PersonName"
                 label="User Name"
                 name="PersonName"
                 value={this.state.name}
                 variant="outlined"
                 fullWidth="true"
                 className={this.props.formclass}
                 onChange={
                    (e)=> 
                    {this.setState({name:e.target.value});
                   
                }
               }
                  
               />
                 <TextField
                  required
                 id="PersonEmail"
                 label="User Email"
                 name="PersonEmail"
                 variant="outlined"
                 value={this.state.email}
                 fullWidth="true"
                 className={this.props.formclass}
                 onChange={
                     (e)=> 
                     {this.setState({email:e.target.value});
                     
                 }
                }
                    
               />
                 <TextField
                  required
                 id="PersonPhone"
                 label="User Phone"
                 name="PersonPhone"
                 variant="outlined"
                 value={this.state.phone}
                 fullWidth="true"
                 className={this.props.formclass}
                 onChange={
                    (e)=> 
                    {this.setState({phone:e.target.value});
                    
                }
               }
               />   
       
        
        <Button type="submit" variant="contained" style={{backgroundColor:'#FFBE0A'}}  >Submit</Button>
        </form>
        
      <Dialog
        maxWidth="lg"
        
        open={this.state.open}
        onClose={this.handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <Container component="div" >
        <DialogTitle id="responsive-dialog-title">{"Please verify your phone number"}</DialogTitle>
        
        <DialogContent>
          <DialogContentText>
           <TextField
            variant="outlined"
            label="Verification Code"
            fullWidth             
            type="number"
            
             />
             <Button href="/kyc" center style={{backgroundColor:'#FFBE0A',margin:'1rem'}} title="next" size="large">
               <ArrowForwardRounded  />
             </Button>
          
          </DialogContentText>
        </DialogContent>
        <DialogActions>
         
          <Button onClick={this.handleClose} color="primary" autoFocus>
            Close
          </Button>
        </DialogActions>
        </Container>
      </Dialog>
</Container>
 </>
        )
    }
}
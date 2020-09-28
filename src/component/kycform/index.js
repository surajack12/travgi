import React from 'react'
import Axios from 'axios';
import {Container,Button} from '@material-ui/core'
import {AddPhotoAlternateRounded,PermIdentityRounded,CardMembership,FingerprintRounded} from '@material-ui/icons'


class Kyc extends React.Component{
 constructor(props)
    {
        super()
        this.state={
            aadhar:null
        }
    }
 handleUpload=event=>{
     this.setState({aadhar:event.target.files[0]})
 }
 onformSubmit=()=>{
     const formData = new FormData();
     formData.append("aadhar",this.state.aadhar,this.state.aadhar.name);
     console.log(this.state.aadhar);
     
 }
    render(){
        return(
            <>
           <Container style={{backgroundColor:'white'}}>
           <h2> Upload Documents</h2>

           <form style={{marginTop:'2rem'}} >
           <label htmlFor="contained-button-file">
                <FingerprintRounded />Aadhar card
            </label>
           <input
              accept="image/*"
              style={{display:'none'}}
              id="contained-button-file"
              multiple
              type="file"
              onChange={this.handleUpload}
            />
           
            <br/>
            <Button
             variant='contained'
             onClick={this.onformSubmit}
             
              >Submit</Button>
           </form>
           </Container>
            </>
        )
    }

}
export default Kyc;
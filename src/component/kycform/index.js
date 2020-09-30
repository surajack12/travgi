import React from 'react'
import Axios from 'axios';
import {Progress} from 'reactstrap';
import {Container,Button} from '@material-ui/core'
import {FingerprintRounded} from '@material-ui/icons'


class Kyc extends React.Component{
 constructor(props)
    {
        super()
        this.state={
            aadhar:null,
            loaded:0
        }
    }
 handleUpload=event=>{
     this.setState({
         aadhar:event.target.files[0],
         loaded:0
        })
 }
 onformSubmit=()=>{
     const formData = new FormData();
     formData.append("aadhar",this.state.aadhar);
  
     Axios.post('http://localhost:8080/updocs/upaadhar',formData,
        {
            onUploadProgress: ProgressEvent => {
                this.setState({
                  loaded: (ProgressEvent.loaded / ProgressEvent.total*100),
              })
          },
        }
      ).then(res => { // then print response status
        console.log(res)
     })
    }
 
    render(){
        Axios.get('http://localhost:8080/updocs/').then(res=>console.log(res))
        return(
            <>
           <Container style={{backgroundColor:'white'}}>
           <h2> Upload Documents</h2>

           <div style={{marginTop:'2rem'}} >
           <label htmlFor="contained-button-file">
                <FingerprintRounded />Aadhar card
            </label><br/>
           <input
              accept="image/*"              
              id="contained-button-file"
              multiple
              type="file"
              name="aadhar"
              onChange={this.handleUpload}
            />
           
            <br/>
            <Progress max="100" color="success" value={this.state.loaded} >{Math.round(this.state.loaded,2) }%</Progress>
            <br/>
            <Button
             variant='contained'
             onClick={this.onformSubmit}
             
              >Submit</Button>
           </div>
           </Container>
            </>
        )
    }

}
export default Kyc;
import React, { Component } from 'react'
import { Form,Dropdown,Input,Button ,Card} from 'semantic-ui-react'
import firebase  from 'firebase'
import { Link ,Switch,BrowserRouter,Route} from 'react-router-dom';
import {geolocated, geoPropTypes} from 'react-geolocated';
import Geocode from "react-geocode";

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
  { key: 'o', text: 'Prefer not to say', value: 'other' },
]
const pro = [
    { key: '1', text: 'Lawyer', value: 'Lawyer' },
    { key: '2', text: 'Teacher', value: 'Teacher' },
    { key: '3', text: 'Pharmacist', value: 'Pharmacist' },
    { key: '4', text: 'Veterinarian', value: 'Veterinarian' },
    { key: '5', text: 'Electrician', value: 'Electrician' },
    { key: '6', text: 'Plumber', value: 'Plumber' },
    { key: '7', text: 'Labourer', value: 'Labourer' },
    { key: '8', text: 'Accountant', value: 'Accountant' },  
    { key: '9', text: 'Designer', value: 'Designer' },
    { key: '10', text: 'Mechanic', value: 'Mechanic' },
]

class Register extends Component {
  state = {
      first:'',
      last:'',
      profession:'',
      number:'',
      gender:'',
      lat:0.0,
      lng:0.0,
      about:'',
      image: null,
      url: '',
      progress: 0  
      ,location:'',
      setLocation:false,
      tnc:false
  }

  componentDidMount()
{
    Register.propTypes = Object.assign({}, Register.propTypes, geoPropTypes);
     
   
    
}

 
  // handleChange = e => {
  //   if (e.target.files[0]) {
  //     const image = e.target.files[0];
  //     this.setState(() => ({image}));
  //   }
  // }
  // handleUpload = () => {
  //     const {image} = this.state;
  //     const uploadTask = storage().ref(`images/${image.name}`).put(image);
  //     uploadTask.on('state_changed', 
  //     (snapshot) => {
  //       // progrss function ....
  //       const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
  //       this.setState({progress});
  //     }, 
  //     (error) => {
  //          // error function ....
  //       console.log(error);
  //     }, 
  //   () => {
  //       // complete function ....
  //       storage.ref('images').child(image.name).getDownloadURL().then(url => {
  //           console.log(url);
  //           this.setState({url});
  //       })
  //   });}

  onSubmit()
  {
    alert("Your Information Has Been Added To Our Database, Thankyou!!")
    
    firebase.database().ref(`/${this.state.profession}`).push(
        {
            firstName:this.state.first,
            lastName:this.state.last,
            profession:this.state.profession,
            number:this.state.number,
            gender:this.state.gender,
            lat:this.state.lat,
            lng:this.state.lng,
            about:this.state.about,
        }
    )
  }

  allFilled()
  {
    return this.state.first!=''
     && this.state.last!='' 
     && this.state.gender!='' 
     && this.state.about!='' 
     && this.state.number!='' 
     && this.state.profession!=''
     && this.state.lat!=''
     && this.state.lng!='' 
     && this.state.tnc==true  
  }

  render() {
    
    return (
      <div>
        <center>
        <Card>
        <Form style={{padding: '10px'}}>
       
       <Input fluid label='First name' onChange={(text)=>{ this.setState({first:text.target.value}) }} /><br/><br/>
       <Input fluid label='Last name'  onChange={(text)=>{ this.setState({last:text.target.value}) }}/><br/><br/>
 {/* <Form.Select fluid label='Profession' options={pro}  onChange={(text)=>{ this.setState({profession:text.target.value}) }}/>*/}
       <Dropdown fluid selection placeholder={this.state.profession} placeholder='Select Profession' options={pro}>
       <Dropdown.Menu>
         {pro.map(item=>(
             <Dropdown.Item onClick={()=>{this.setState({profession:item.text})}}>
                 {item.text}
             </Dropdown.Item>
         ))}
     </Dropdown.Menu>
        </Dropdown><br/><br/>
       <Input label='Phone no.' fluid onChange={(text)=>{ this.setState({number:text.target.value}) }}/><br/><br/>
       
       <Dropdown fluid button placeholder={this.state.gender} placeholder='Gender'>
     <Dropdown.Menu>
         {options.map(item=>(
             <Dropdown.Item onClick={()=>{this.setState({gender:item.text})}}>
                 {item.text}
             </Dropdown.Item>
         ))}
     </Dropdown.Menu>
        </Dropdown><br/><br/>

        {/* <input type="file" onChange={this.handleChange}/>
     <button onClick={this.handleUpload}>Upload Image</button> */}

     
     
        {
          !this.props.coords?
          <Button disabled color='red'>Set my Location</Button>
          :
          <Button onClick={()=>{
            this.setState({
              lat:this.props.coords.latitude,
              lng:this.props.coords.longitude,
              setLocation:true
            })
          }} color='blue'>Set my Location</Button>
        }
     
     
     <Form.TextArea label='About' placeholder='Tell us more about you....' onChange={(text)=>{ this.setState({about:text.target.value}) }}/>
     <Form.Checkbox label='I agree to the Terms and Conditions' onClick={()=>{
       let tnc_new=!this.state.tnc
       this.setState({tnc:tnc_new})}}/>
     
     {
       this.state.setLocation==true && this.allFilled()?
       <Link to="/"><Button color='blue' onClick={()=>{this.onSubmit()}}>  Submit </Button></Link> 
       :
       <Button disabled >Submit</Button> 
     }
           
   </Form>
      </Card>
        </center>
      </div>
    )
  }
}

export default geolocated({
  positionOptions: {
      enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
}) (Register)

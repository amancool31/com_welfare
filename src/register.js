import React, { Component } from 'react'
import { Form,Dropdown } from 'semantic-ui-react'
import {firebase,storage} from 'firebase'
import { Link ,Switch,BrowserRouter,Route} from 'react-router-dom';


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
      profession:'profession',
      number:'',
      gender:'gender',
      location:'',
      about:'',
      image: null,
      url: '',
      progress: 0  
  }
  handleChange = e => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({image}));
    }
  }
  handleUpload = () => {
      const {image} = this.state;
      const uploadTask = storage().ref(`images/${image.name}`).put(image);
      uploadTask.on('state_changed', 
      (snapshot) => {
        // progrss function ....
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        this.setState({progress});
      }, 
      (error) => {
           // error function ....
        console.log(error);
      }, 
    () => {
        // complete function ....
        storage.ref('images').child(image.name).getDownloadURL().then(url => {
            console.log(url);
            this.setState({url});
        })
    });}

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
            location:this.state.location,
            about:this.state.about,
        }
    )
  }


  render() {
    
    return (
      <Form>
       
          <Form.Input fluid label='First name' onChange={(text)=>{ this.setState({first:text.target.value}) }} />
          <Form.Input fluid label='Last name'  onChange={(text)=>{ this.setState({last:text.target.value}) }}/>
    {/* <Form.Select fluid label='Profession' options={pro}  onChange={(text)=>{ this.setState({profession:text.target.value}) }}/>*/}
          <Dropdown button placeholder={this.state.profession} >
        <Dropdown.Menu>
            {pro.map(item=>(
                <Dropdown.Item onClick={()=>{this.setState({profession:item.text})}}>
                    {item.text}
                </Dropdown.Item>
            ))}
        </Dropdown.Menu>
           </Dropdown>
          <Form.Input fluid label='Phone number' onChange={(text)=>{ this.setState({number:text.target.value}) }}/>
          <label>Gender</label><br/>
          <Dropdown button placeholder={this.state.gender} >
        <Dropdown.Menu>
            {options.map(item=>(
                <Dropdown.Item onClick={()=>{this.setState({gender:item.text})}}>
                    {item.text}
                </Dropdown.Item>
            ))}
        </Dropdown.Menu>
           </Dropdown>

           <input type="file" onChange={this.handleChange}/>
        <button onClick={this.handleUpload}>Upload Image</button>

        <Form.Group inline>
          <label>Current Location</label>
          <Form.Input placeholder='location' onChange={(text)=>{ this.setState({location:text.target.value}) }}/>
        </Form.Group>
        <Form.TextArea label='About' placeholder='Tell us more about you....' onChange={(text)=>{ this.setState({about:text.target.value}) }}/>
        <Form.Checkbox label='I agree to the Terms and Conditions' />
        <Link to="/">
        <Form.Button onClick={()=>{this.onSubmit()}}>Submit</Form.Button>
        </Link>        
      </Form>
    )
  }
}

export default Register
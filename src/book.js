import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import {Card,Button,Dropdown,Modal} from 'semantic-ui-react'
import Geocode from "react-geocode";
import {geolocated, geoPropTypes} from 'react-geolocated';
import firebase from 'firebase';

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

const Marker = props => {
    return <div ><Modal trigger={<p style={{color:'red',fontSize: 25}}>▼</p>}>
    <Modal.Header>
       {props.gender=='Male'?<p>Mr. {props.fname} {props.lname}</p>:<p>Mrs. {props.fname} {props.lname}</p>} 
        {props.prof} <br/><br/>
        {props.phno} 
    </Modal.Header>
    <Modal.Content>
        {props.about}
        <center>
        <Button>
            Book
        </Button>
        </center>
    </Modal.Content>

    </Modal></div>
  }

  
  class GMapReact extends React.Component {
    render() {
      const { center, zoom ,markers} = this.props;
      return (
        <div style={{ width: "100%", height: "100%" }}>
          <GoogleMapReact
           
            bootstrapURLKeys={{ key: 'AIzaSyDVfxkpVfpCnuFViTueOUHnzIuPiPoDqyU' }}
            center={center}
            zoom={zoom}
          >
          {
              markers.map(item=>(
                <Marker 
                lat={item.lat} 
                lng={item.lng} 
                fname={item.firstName} 
                lname={item.lastName} 
                phno={item.number}
                prof={item.profession}
                about={item.about}
                gender={item.gender}

                />
              ))
          }
          </GoogleMapReact>
        </div>
      );
    }
  }

class Book extends Component {
    


componentDidMount()
{
    Book.propTypes = Object.assign({}, Book.propTypes, geoPropTypes);
   
    
}

    constructor()
    {
        super()
        this.state={
            center: {
                lat: 37.7824134,
                lng: -122.4088472
              },
              pos: {
                lat: 37.7824134,
                lng: -122.4088472
              },
              profession:'',
              markerList:[],
              spinner:false
        }
    }

    onSubmit()
    {
        let markers=firebase.database().ref(`/${this.state.profession}`)
        let markerList=[]
        markers.on('value',ss=>{
            let u=ss.val()
            for(let i in u)
            {
                markerList.push(u[i])
            }
            this.setState({markerList:markerList})
        })
         let pos_new=
         {
             lat:this.props.coords.latitude,
             lng:this.props.coords.longitude
         }
         
         this.setState({
             center:pos_new
         })
    }
    

    static defaultProps = {
        center: {
          lat: 30,
          lng: 70
        },
        zoom:11
         
      };
      
    render() {
        const center = this.state.center;
        return (
            <div>
                <br/>
               <div>
                   {
                       !this.props.isGeolocationAvailable
                       ? <div>Your browser does not support Geolocation</div>
                       : !this.props.isGeolocationEnabled
                         ? <div>Geolocation is not enabled</div>
                         : this.props.coords
                           ? 
                             <center>  </center>
                                
                             
                           : <div>Getting the location data&hellip; </div>
                   }<br/>
                   <Dropdown selection placeholder='Select Job' options={pro}  >
                   <Dropdown.Menu>
                {pro.map(item=>(
             <Dropdown.Item onClick={()=>{this.setState({profession:item.text})}}>
                 {item.text}
             </Dropdown.Item>
         ))}
     </Dropdown.Menu>
                   </Dropdown><br/><br/>
                   {
                       this.props.coords==null?
                       <Button disabled>SEARCH</Button>
                       :
                       <Button onClick={()=>{this.onSubmit()}}>SEARCH</Button>
                   }
                   </div>                <br/>
                <center><div style={{ height: '400px', width: '700px' }}>
                     
                    <GMapReact  center={center} zoom={11} markers={this.state.markerList}/>      
                     
                </div></center>
                 
            </div>
        );
    }
}

export default geolocated(
    {
        positionOptions: {
            enableHighAccuracy: false,
          },
          userDecisionTimeout: 5000,
    }
) (Book);
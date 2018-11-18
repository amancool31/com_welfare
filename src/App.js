import React, { Component } from 'react';
import './App.css';
import Particles from 'react-particles-js';
import { Button, Segment } from 'semantic-ui-react';
import { Link ,Switch,BrowserRouter,Route} from 'react-router-dom';
import Book from './book';
import Register from './register'
import firebase from 'firebase'

class App extends Component {
  componentDidMount()
  {
    var config = {
      apiKey: "AIzaSyCBNbKaWlC2qc40DYqUvXnajpLwwOLlv6M",
      authDomain: "comwelfare-bfc42.firebaseapp.com",
      databaseURL: "https://comwelfare-bfc42.firebaseio.com",
      projectId: "comwelfare-bfc42",
      storageBucket: "comwelfare-bfc42.appspot.com",
      messagingSenderId: "1038046730534"
    };
    const app=firebase.initializeApp(config);
  
  }
  render() {
    return (
      <BrowserRouter>
            <div className="App">
      <Segment inverted>
      <Link to="/map"><Button inverted color='teal'>
        Map
      </Button></Link>
      <Link to="/register" >
      <Button inverted color='teal'>
        Register 
      </Button></Link>
      <Link to="/feedback" >
      <Button inverted color='teal'>
        FeedBack
      </Button>
      </Link>
      <Link to="/contact">
      <Button inverted color='teal'>
        Contact us
      </Button>
      </Link>
      </Segment>
        {/* <Particles params={{
            		particles: {
                  interactivity:{
                    detect_on:"canvas",
                    events:
                    {onhover:{enable:true,mode:"repulse"},onclick:{enable:true,mode:"push"},resize:true},modes:{grab:{distance:400}}},
            			line_linked: {
            				shadow: {
            					enable: true,
            					color: "#3CA9D1",
            					//blur: 3
            				}
            			}
            		}
            	}}
              style={{
                width: '100%',
                //backgroundImage: `url(${a})` ,
                background: "#6778c8",
              }}/> */}
               
              <Switch>
              <Route path='/register' component={Register}/>
              <Route path='/contact'/>
              <Route path='/feedback'/>
              <Route path='/map' component={Book}/>
              </Switch>
             
              </div>

      </BrowserRouter>
      
    );
  }
}

export default App;

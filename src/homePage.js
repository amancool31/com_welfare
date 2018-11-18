import React, { Component } from 'react';
import Particles from 'react-particles-js';

class HomePage extends Component {
    render() {
        return (
            <div>
               <Particles params={{
            		particles: {
                  interactivity:{
                    detect_on:"canvas",
                    events:
                    {onhover:{enable:true,mode:"repulse"},onclick:{enable:true,mode:"push"},resize:true},modes:{grab:{distance:400}}},
            			line_linked: {
            				shadow: {
            					enable: true,
            					color: "#3CA9D1",
            					blur: 3
            				}
            			}
            		}
            	}}
              style={{
                width: '100%',
                //backgroundImage: `url(${a})` ,
                height:'100vh',
                background: "#6778c8",
              }}/>
                
            </div>
        );
    }
}

export default HomePage;
import React, { Component } from 'react';
import Particles from 'react-particles-js';

class HomePage extends Component {
    render() {
        return (
            <div>
               <Particles params={{
            		particles: {
                  	line_linked: {
            				shadow: {
            					enable: true,
            					color: "#3CA9D1",
            					blur: 3
            				}
                        },
                        move:{
                            enable:true,
                            speed:6,
                            out_mode:"out",
                        },
                        shape:{
                            polygon:{nb_sides:5},
                        },
                        number:{
                            value:80,
                            density:{enable:true,value_area:800},
                        }
                    },
                    interactivity:{
                        detect_on:"canvas",
                        events:
                        {onhover:{enable:true,mode:"repulse"},
                        onclick:{enable:true,mode:"push"},resize:true},
                        modes:{
                            bubble:{distance:400,size:40,duration:2},
                            repulse:{distance:200},
                            grab:{distance:400}}},
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
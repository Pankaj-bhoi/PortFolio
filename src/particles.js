import React, {Component} from 'react';
import Particles from 'react-particles-js'; 

const ParticlesOptions ={
    "particles": {
      "number": {
        "value": 130,
        "density": {
          "enable": false,
          "value_area": 2762.016745712954
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "edge",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 7
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.6,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1.2181158184520178,
          "opacity_min": 0.09744926547616141,
          "sync": false
        }
      },
      "size": {
        "value": 1,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 30,
          "size_min": 12.993235396821524,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 45,
        "color": "#ffffff",
        "opacity": 0.5129459670609773,
        "width": 1.8939543399174543
      },
      "move": {
        "enable": true,
        "speed": 10,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "grab"
        },
        "onclick": {
          "enable": false,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 596.8767510414887,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 48.724632738080714,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  }
class Particle extends Component {
    render(){
        return(
            <Particles
                params={ParticlesOptions}
            />
        )
    }
}
export default Particle;
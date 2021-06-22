import React, {Component} from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import ImageLinkForm from './Components/ImageLinkForm/ILform';
import Rank from './Components/Rank/Rank';
import Face from './Components/FaceRecog/FaceRecog';
import SignIn from './Components/Signin/Signin';
import Register from './Components/Register/Register';
import './App.css';

// Clarifai API key
const app = new Clarifai.App({apiKey: "YOUR API KEY HERE"});

const particlesOptions = {
  "particles": {
    "number": {
      "value": 50
    },
    "size": {
      "value": 3
    }
  }
}

class App extends Component {
  constructor(){
    super();
    this.state = {
      input:'',
      regions:{},
      height:"",
      width:"",
      route: 'signin',
      isSignedIn: false
    }
  }

  CalculateFaceLocation = (data) =>{
    const region = data.outputs[0].data.regions;
    // console.log(region);
    const image = document.getElementById('inputImage');
    const Width = Number(image.width);
    const Height = Number(image.height);
    this.setState({regions:region,height:Height, width:Width});
  }

  onInputChange = (event) => this.setState({input: event.target.value});

  onButtonSubmit = () => {
    // face detect model from clarifai
    app.models.predict(Clarifai.FACE_DETECT_MODEL,this.state.input)
    .then(response => this.CalculateFaceLocation(response))
    .catch(err => console.log(err));
  }

  onRouteChange = (event) => {
    if(event === 'home')this.setState({isSignedIn: true})
    else{this.setState({isSignedIn: false})}
    this.setState({route: event});
  }

  render(){
    const {isSignedIn, route, input, regions, height, width} = this.state;
    return (
      <div className="App">
        <Particles className='particles' params={particlesOptions} />
        <Navigation onRouteChange={this.onRouteChange} isSignedIn={isSignedIn} />
        { route === 'home'
          ? <div>
              <Logo />
              <Rank />
              <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
              <Face input={input} regions={regions} height={height} width={width} ></Face>
            </div>
          : (
              route === 'signin'
              ? <SignIn onRouteChange={this.onRouteChange} />
              : <Register onRouteChange={this.onRouteChange} />
            )
        }
      </div>
    );
  }
}

export default App;
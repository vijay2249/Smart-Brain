import React, {Component} from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import ImageLinkForm from './Components/ImageLinkForm/ILform';
import Rank from './Components/Rank/Rank';
import Face from './Components/FaceRecog/FaceRecog';
import {Form} from './Components/Form/Form';
import './App.css';
import { keys } from './config.js';

const api_KEY = keys.CLARIFAI_API_KEY;
const app = new Clarifai.App({apiKey: api_KEY});

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
      route: 'register',
      isSignedIn: false,
      userData: {
        username: '',
        email: '',
        entries: 0
      }
    }
  }

  updateUIuser = (user) =>{
    this.setState({
      userData:{
        username: user.username,
        email: user.email,
        entries: 0
      }
    })
  }


  CalculateFaceLocation = (data) =>{
    const region = data.outputs[0].data.regions;
    const image = document.getElementById('inputImage');
    const Width = Number(image.width);
    const Height = Number(image.height);
    this.setState({regions:region,height:Height, width:Width});
  }

  onInputChange = (event) => this.setState({input: event.target.value});

  onButtonSubmit = () => {
    app.models.predict(Clarifai.FACE_DETECT_MODEL,this.state.input)
    .then(response => {
      // if(response){
      //   fetch('http://localhost:443/images',{
      //     method: 'put',
      //     headers: {'Content-Type': 'application/json'},
      //     body: JSON.stringify({
      //       email: this.state.userData.email,
      //       entries: response.outputs[0].data.regions.length
      //     })
      //   })
      //     .then(response =>response.json())
      //     .then(facesDetected =>{
      //       this.setState(Object.assign(this.state.userData, {entries: facesDetected}))
      //     })
      // }
      this.CalculateFaceLocation(response)
      let entry = this.state.userData.entries + response.outputs[0].data.regions.length;
      this.setState(Object.assign(this.state.userData, {entries: entry}))
    })
    .catch(err => console.log(err));
  }

  onRouteChange = (event) => {
    if(event === 'home')this.setState({isSignedIn: true})
    else{this.setState({isSignedIn: false})}
    this.setState({route: event});
  }

  render(){
    const {isSignedIn, route, input, regions, height, width, userData} = this.state;

    return (
      <div className="App">
        <Particles className='particles' params={particlesOptions} />
        <Navigation onRouteChange={this.onRouteChange} isSignedIn={isSignedIn} />
        { route === 'home'
          ? <div>
              <Logo />
              <Rank displayUser={userData.username} entries={userData.entries}/>
              <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
              <Face input={input} regions={regions} height={height} width={width} ></Face>
            </div>
          : <Form onRouteChange={this.onRouteChange} updateUIuser={this.updateUIuser}/>
        }

      </div>
    );
  }
}

export default App;
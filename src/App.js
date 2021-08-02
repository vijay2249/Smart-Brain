import {React, Component, Particles, Clarifai, Navigation, Logo, ImageLinkForm,Rank,Face,Form,keys} from './Components/Imports/Imports';
import './App.css';

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
      route: 'login',
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
      // if(response !== 'error'){
        // fetch('http://localhost:443/images',{
          // method: 'put',
          // headers: {'Content-Type': 'application/json'},
          // body: JSON.stringify({
            // email: this.state.userData.email,
            // entries: response.outputs[0].data.regions.length
          // })
        // })
          // .then(response =>response.json())
          // .then(facesDetected =>{
            // this.setState(Object.assign(this.state.userData, {entries: facesDetected}))
          // })
      // }
      // handle the error for non human faces in the images
      // in this case the length of data is 0
      if(Object.keys(response.outputs[0].data).length === 0){
        alert("Enter image url that contains human faces")
      }else{
        this.CalculateFaceLocation(response)
        let entry = this.state.userData.entries + response.outputs[0].data.regions.length;
        this.setState(Object.assign(this.state.userData, {entries: entry}))
      }
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
              <Logo/>
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
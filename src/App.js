import {React, Component, Particles, Navigation, Logo, ImageLinkForm,Rank,Face,Form} from './Components/Imports/Imports';
import './App.css';

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

let InitialStateofApp = {
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

class App extends Component {
  constructor(){
    super();
    this.state = InitialStateofApp
  }

  updateUIuser = (user) =>{
    this.setState({
      userData:{
        username: user.username,
        email: user.email,
        entries: user.entries
      }
    })
  }

  CalculateFaceLocation = (data) =>{
    const region = data.regions;
    const image = document.getElementById('inputImage');
    const Width = Number(image.width);
    const Height = Number(image.height);
    this.setState({regions:region,height:Height, width:Width});
  }

  onInputChange = (event) => this.setState({input: event.target.value, regions:{}});

  onButtonSubmit = () =>{
    fetch('http://localhost:443/images',{
      method: 'put',
      headers: {'Content-Type':'application/json'},
      body:JSON.stringify({
        imageURL: this.state.input,
        username: this.state.userData.username
      })
    })
      .then(output => output.json())
      .then(response =>{
        this.setState(Object.assign(this.state.userData, {entries:response[0]}))
        if(response[1] !== "error"){
          this.CalculateFaceLocation(response[1])
        }else{
          alert("Enter image url that contains human faces")
        }
      })
      .catch(err => console.log(err))
  }

  onRouteChange = (event) => {
    if(event === 'home')this.setState({isSignedIn: true})
    else{
      this.setState(InitialStateofApp)
      this.setState({isSignedIn: false})
    }
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
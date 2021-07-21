# SmartBrain Frontend
<p align='center'>
    <img alt="W3C Validation" src="https://img.shields.io/w3c-validation/html?targetUrl=https%3A%2F%2Fvijay2249.github.io%2FSmartBrainFrontend%2F">
    <img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/vijay2249/SmartBrainFrontend?style=flat-square">
    <img alt="GitHub code size in bytes" src="https://img.shields.io/github/languages/code-size/vijay2249/SmartBrainFrontend">
    <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/vijay2249/SmartBrainFrontend">
    <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/vijay2249/SmartBrainFrontend">
    <img alt="GitHub issues" src="https://img.shields.io/github/issues/vijay2249/SmartBrainFrontend?style=flat-square">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/vijay2249/SmartBrainFrontend">
</p>


This app uses Clarifai Face Detect API for the process.
So for this app to work make sure that you have your own clarifai api key 
Get it from here [Clarifai](https://www.clarifai.com/).
Also create your own API key in that website.

After getting your own api key follow the steps below:

1. create a new config.js file in the src folder

2. then create an object keys with key value as CLARIFAI_API_KEY and your api as value

The code in your config.js at the end should be

    export const keys = { CLARIFAI_API_KEY : "YOUR API KEY HERE" }

replace YOUR API KEY HERE with your API key.

In this code i used my own api key by creating a new file and storing adding the file to gitignore file so you can't see it..


This app just recognises the face in a picture

Also the local files cannot be accessced due to security

Input url better end with image extensions(with either jpg or jpeg or png)

More features to come near by.


Clone this repository or download this folder

### Run the commands:

1.`npm install`

2.`npm start`

then open your browser navigate to [localhost:3000](localhost:3000)

Also this app do not accept the local files, please use pictures from the internet.

## Dependencies or Modules used

- [Robohash](https://robohash.org/) for Logo
- [React Tilt](https://www.npmjs.com/package/react-tilt) npm package for Logo animation
- [shields.io](https://shields.io/) to update readme status automatically
- [styled-components](https://styled-components.com/) for creating _src/Components/Styles/Styles.js_ file (alternative way to apply css to directly components)
- [Clarifai API](https://www.clarifai.com/developers/pre-trained-models) for detecting face in picture
- [React-particle-js](https://www.npmjs.com/package/react-particles-js) for background particles
- [Tachyons](https://tachyons.io/) for some of the pre-defined styling 
- For more information about this repo dependencies click [here](https://github.com/vijay2249/SmartBrainFrontend/network/dependencies)

<p align:'center' style="font-size:20px;"><i>Happy Learning</i></p>

# -->_😉😉HAPPY LEARNING😉😉_ <--

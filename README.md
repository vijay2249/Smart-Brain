This app uses Clarifai Face Detect API for the process.
So for this app to work make sure that you have your own clarifai api key 
Get it from here [Clarifai](https://www.clarifai.com/).

Also create your own API key in that website.

And use the API key in app.js file and at 

const app = new Clarifai.App({
  apiKey: 'YOUR API KEY HERE'
});

at this line of code


This app just recognises the face in a picture

Also the local files cannot be accessced due to security

More features to come near by.


Clone this repository or download this folder

### Run the commands:

1.`npm install`

2.`npm start`

then open your browser navigate to [localhost:3000](localhost:3000)

Also this app do not accept the local files, please use pictures from the internet.

### `Happy Learning`

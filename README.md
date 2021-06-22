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

More features to come near by.


Clone this repository or download this folder

### Run the commands:

1.`npm install`

2.`npm start`

then open your browser navigate to [localhost:3000](localhost:3000)

Also this app do not accept the local files, please use pictures from the internet.

### `Happy Learning`

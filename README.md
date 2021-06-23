<h2>Simple Crud Application using Google Maps API and Geocoding API</h2>
Simple crud application using Nodejs and MongoDB. Using Google's Geocoding API to determinate the client's geolocation according with the given address and Google Maps's API to show the client's location on the interface.
<img src='https://user-images.githubusercontent.com/57187549/122800330-2e16af80-d299-11eb-9a9a-f008f6f1c5d2.png'>

<h2>How to set it up</h2>

First you will need a Google Maps API key, you can find more information about the API and how to get it [clicking here](https://developers.google.com/maps/documentation/javascript/overview#maps_map_simple-javascript).

Second you will need a Geocoding API key, you can find more information about the API and how to get it [clicking here](https://developers.google.com/maps/documentation/geocoding/overview?hl=en).

Once you have both API keys enabled, you have to put in the ejs and js files to get the project working properly. 
Go to ../public/views/index.ejs. Once you opened the file, replace #INSERT-YOUR-API-HERE# with your API key. 
![image](https://user-images.githubusercontent.com/57187549/122799570-40dcb480-d298-11eb-89c1-7611ab1217ca.png)

Now go to ../public/js/main.js. Once you opened the file, replace #INSERT-YOUR-API-HERE# with your API key. 
![image](https://user-images.githubusercontent.com/57187549/122799477-2acef400-d298-11eb-9beb-6a13a1771b74.png)

Once both APIs are placed, just hit a "yarn dev" in the console and you're good to go.

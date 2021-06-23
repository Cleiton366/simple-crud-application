const api = '#INSERT-YOUR-API-HERE#';
const fetch = require("node-fetch");

class ClienteServices {

    getGeocoding = async (address) => {
        //this will filter the string if theres any non-ascii character in the address
        address = encodeURIComponent(address);
        try{
            var url = "https://maps.googleapis.com/maps/api/geocode/json?address="+address+"&key="+api;
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }catch(err){
            console.error("Error while trying to fetch geocoding data: ", err);
        }
    }
}

export { ClienteServices }
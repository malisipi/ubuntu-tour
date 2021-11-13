if (typeof(Storage) === "undefined") { 
    console.error("Enable localStorage to best experience")
}

__get_location_info = () => {
    var _location = new XMLHttpRequest();
    _location.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        localStorage["location"]=this.responseText.replace(/[0-9]+\.[0-9]+\.[0-9]+\.[0-9]+/g,"");
        }
    };
    _location.open("GET", "https://api.codetabs.com/v1/geolocation/json", true);
    _location.send();
}

if(localStorage["wallpaper"]==undefined) localStorage["wallpaper"]="icons/unsplash/9XngoIpxcEo.jpg";

if(localStorage["location_date"]!=Date().toString().match(/... [0-9][0-9] [0-9][0-9][0-9][0-9]/g)){
    localStorage["location_date"]=Date().toString().match(/... [0-9][0-9] [0-9][0-9][0-9][0-9]/g);
    localStorage["location"]=JSON.stringify({"country_code": "FR","country_name": "France","region_code": "IDF","region_name": "Ile-de-France","city": "Paris","zip_code": "75001","time_zone": "Europe/Paris","latitude": 48.8628,"longitude": 2.3292});
    
    setTimeout(()=>{
        if(window["__hide_location_confirm"]!=1){
            showDialog("Allow Location","Do you allow the website to access your location?","No","Yes","","__get_location_info();")
        }else{
            delete __hide_location_confirm;
        }
    },3000)
}

window.addEventListener("load",()=>{
    document.querySelector(".wallpaper").src=localStorage["wallpaper"];
});
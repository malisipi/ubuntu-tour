if (typeof(Storage) === "undefined") { //If localStorage not supported, create a variable for storing data as temporary.
    localStorage={};
}

if(localStorage["wallpaper"]==undefined) localStorage["wallpaper"]="icons/unsplash/9XngoIpxcEo.jpg";

window.addEventListener("load",()=>{
    document.querySelector(".wallpaper").src=localStorage["wallpaper"];
});
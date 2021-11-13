function showWallpaper(){
    document.getElementById("theWallpaper").src=parent.parent.document.getElementsByClassName("wallpaper")[0].src;
}

function setWallpaper(file){
    parent.parent.document.getElementsByClassName("wallpaper")[0].src="icons/unsplash/"+file;
    localStorage["wallpaper"]="icons/unsplash/"+file;
    document.getElementById("theWallpaper").src="../../icons/unsplash/"+file;
}
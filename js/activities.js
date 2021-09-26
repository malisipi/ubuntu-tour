function showHideActivities(){
    if(document.getElementsByClassName("activities")[0].style.visibility=="hidden"){
        document.getElementsByClassName("activities")[0].style.visibility = "visible";
        document.getElementsByClassName("app-menu")[0].style.visibility = "hidden";
        document.querySelector(".notification-about").hidden=true;
        document.querySelector(".status-about").hidden=true;
        document.querySelector(".activities-wallpaper").src=document.querySelector(".wallpaper").src;
    }else{
        document.getElementsByClassName("activities")[0].style.visibility = "hidden";
    }
}
function showHideAppMenu(){
    if(document.getElementsByClassName("app-menu")[0].style.visibility=="hidden"){
        document.getElementsByClassName("app-menu")[0].style.visibility = "visible";
        document.querySelector(".app-menu-container-wallpaper").src=document.querySelector(".wallpaper").src;
        document.getElementsByClassName("activities")[0].style.visibility = "hidden";
        document.querySelector(".notification-about").hidden=true;
        document.querySelector(".status-about").hidden=true;
    }else{
        document.getElementsByClassName("app-menu")[0].style.visibility = "hidden";
    }
}

function hideAppMenu(){
    document.getElementsByClassName("app-menu")[0].style.visibility = "hidden";
}
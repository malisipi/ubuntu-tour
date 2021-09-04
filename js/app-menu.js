function showHideAppMenu(){
    if(document.getElementsByClassName("app-menu")[0].style.visibility=="hidden"){
        document.getElementsByClassName("app-menu")[0].style.visibility = "visible";
    }else{
        document.getElementsByClassName("app-menu")[0].style.visibility = "hidden";
    }
}

function hideAppMenu(){
    document.getElementsByClassName("app-menu")[0].style.visibility = "hidden";
}
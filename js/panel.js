monthShortNames=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]

function UpdatePanelTime(){
    now = new Date();
    document.getElementsByClassName("panel-notification")[0].innerHTML=now.getDate()+" "+(monthShortNames[now.getMonth()])+ " " + now.toString().match("..:..")[0];
}

setInterval(UpdatePanelTime,1000)

function changePanelActiveAppIcon(icon,name,brightness=1){
    if(name==""){
        document.querySelector(".panel-active-app").hidden=true;
    }else{
        document.querySelector(".panel-active-app").hidden=false;
    }
    document.getElementsByClassName("panel-active-app-icon")[0].src=icon;
    document.getElementsByClassName("panel-active-app-name")[0].innerText=name;
    document.querySelector(".panel-active-app-icon").style.filter="brightness("+brightness+") grayscale(1)"
    setTimeout(() => {
        document.querySelector(".panel-active-app").style.width=Math.abs(document.getElementsByClassName("panel-active-app-icon")[0].getBoundingClientRect().left-document.getElementsByClassName("panel-active-app-name")[0].getBoundingClientRect().right)-(-20)+"px";
    }, 1);
}

function showStatusAbout(){
    if(document.getElementsByClassName("status-about")[0].hidden){
        document.getElementsByClassName("status-about")[0].hidden=false;
        document.querySelector(".notification-about").hidden=true;
    }else{
        document.getElementsByClassName("status-about")[0].hidden=true;
    }
}

function showNotificationAbout(){
    if(document.getElementsByClassName("notification-about")[0].hidden){
        document.getElementsByClassName("notification-about")[0].hidden=false;
        document.querySelector(".status-about").hidden=true;
    }else{
        document.getElementsByClassName("notification-about")[0].hidden=true;
    }
}
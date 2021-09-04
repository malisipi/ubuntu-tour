monthShortNames=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]

function UpdatePanelTime(){
    now = new Date();
    document.getElementsByClassName("panel-notification")[0].innerHTML=now.getDate()+" "+(monthShortNames[now.getMonth()])+ " " + now.getHours() + ":" + now.getMinutes();
}

setInterval(UpdatePanelTime,1000)

function changePanelActiveAppIcon(icon,name){
    document.getElementsByClassName("panel-active-app-icon")[0].src=icon;
    document.getElementsByClassName("panel-active-app-name")[0].innerText=name;
}

function showStatusAbout(){
    if(document.getElementsByClassName("status-about")[0].hidden){
        document.getElementsByClassName("status-about")[0].hidden=false;
    }else{
        document.getElementsByClassName("status-about")[0].hidden=true;
    }
}

function showNotificationAbout(){
    if(document.getElementsByClassName("notification-about")[0].hidden){
        document.getElementsByClassName("notification-about")[0].hidden=false;
    }else{
        document.getElementsByClassName("notification-about")[0].hidden=true;
    }
}
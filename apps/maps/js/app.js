function myLocation(){
    parent.parent.showNotification("It's just a demo :)","","",1250);
}

function layers(){
    parent.parent.showNotification("It's just a demo :)","","",1250);
}

function zoomIn(){
    document.getElementsByClassName("content-iframe")[0].contentWindow.zoom+=1;
    document.getElementsByClassName("content-iframe")[0].contentWindow.map.setCenter(null , document.getElementsByClassName("content-iframe")[0].contentWindow.zoom);
}

function zoomOut(){
    document.getElementsByClassName("content-iframe")[0].contentWindow.zoom-=1;
    document.getElementsByClassName("content-iframe")[0].contentWindow.map.setCenter(null , document.getElementsByClassName("content-iframe")[0].contentWindow.zoom);
}

function star(){
    parent.parent.showNotification("It's just a demo :)","","",1250);
}

function showMenu(){
    parent.parent.showNotification("It's just a demo :)","","",1250);
}

function goTo(){
    if (window.event.keyCode == '13'){
        parent.parent.showNotification("It's just a demo :)","","",1250);
    }
}

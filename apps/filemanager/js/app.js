function goToBack(){
    document.getElementsByClassName("content-iframe")[0].contentWindow.history.back()
}

function goToForward(){
    document.getElementsByClassName("content-iframe")[0].contentWindow.history.forward()
}

function goTo(){
    if (window.event.keyCode == '13'){
        parent.parent.showNotification("It's just a demo :)","","",1250);
    }
}

function showMenu(){
    parent.parent.showNotification("It's just a demo :)","","",1250);
}

function showAsList(){
    parent.parent.showNotification("It's just a demo :)","","",1250);
}

function changeLook(){
    parent.parent.showNotification("It's just a demo :)","","",1250);
}

function searchAnything(){
    parent.parent.showNotification("It's just a demo :)","","",1250);
}
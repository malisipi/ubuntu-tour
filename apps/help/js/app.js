function goToBack(){
    parent.history.back()
}

function goToForward(){
    parent.history.forward()
}

function showBookmarks(){
    parent.parent.showNotification("It's just a demo :)","","",1250);
}

function searchbutton(){
    parent.parent.showNotification("It's just a demo :)","","",1250);
}

function showMenu(){
    parent.parent.showNotification("It's just a demo :)","","",1250);
}

function reloadWebpage(){
    document.getElementsByClassName("content-iframe")[0].src=document.getElementsByClassName("content-iframe")[0].src;
}
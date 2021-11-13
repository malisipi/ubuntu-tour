function changeUrlBar(){
    document.getElementById("url-bar").value=document.getElementsByClassName("content-iframe")[0].src;
}

function goToBack(){
    parent.history.back()
}

function goToForward(){
    parent.history.forward()
}

function openNewTab(){
    parent.parent.showNotification("It's just a demo :)","","",1250);
}

function showBookmarks(){
    parent.parent.showNotification("It's just a demo :)","","",1250);
}

function goTo(){
    if (window.event.keyCode == '13'){
        document.getElementsByClassName("content-iframe")[0].src=document.getElementById("url-bar").value;
    }
}


function showMenu(){
    parent.parent.showNotification("It's just a demo :)","","",1250);
}

function reloadWebpage(){
    document.getElementsByClassName("content-iframe")[0].src=document.getElementsByClassName("content-iframe")[0].src;
}
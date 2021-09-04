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
    alert("It's just a demo :)");
}

function showBookmarks(){
    alert("It's just a demo :)");
}

function goTo(){
    if (window.event.keyCode == '13'){
        document.getElementsByClassName("content-iframe")[0].src=document.getElementById("url-bar").value;
    }
}


function showMenu(){
    alert("It's just a demo :)");
}

function reloadWebpage(){
    document.getElementsByClassName("content-iframe")[0].src=document.getElementsByClassName("content-iframe")[0].src;
}
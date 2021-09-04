function myLocation(){
    alert("It's just a demo :)")
}

function layers(){
    alert("It's just a demo :)")
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
    alert("It's just a demo :)");
}

function showMenu(){
    alert("It's just a demo :)");
}

function goTo(){
    if (window.event.keyCode == '13'){
        alert("It's just a demo :)");
    }
}

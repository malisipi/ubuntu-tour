function goToBack(){
    document.getElementsByClassName("content-iframe")[0].contentWindow.history.back()
}

function goToForward(){
    document.getElementsByClassName("content-iframe")[0].contentWindow.history.forward()
}

function goTo(){
    if (window.event.keyCode == '13'){
        alert("It's just a demo :)")
    }
}

function showMenu(){
    alert("It's just a demo :)");
}

function showAsList(){
    alert("It's just a demo :)")
}

function changeLook(){
    alert("It's just a demo :)")
}

function searchAnything(){
    alert("It's just a demo :)")
}
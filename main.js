function rightclick(event) {
    showHideContextMenu(event.clientY,event.clientX);
}

function showHideContextMenu(top=0,left=0){
    if(document.getElementsByClassName("context-menu-container")[0].hidden){
        document.getElementsByClassName("context-menu-container")[0].hidden=false;
        document.getElementsByClassName("context-menu")[0].style.top=top+"px";
        document.getElementsByClassName("context-menu")[0].style.left=left+"px";
    } else {
        document.getElementsByClassName("context-menu-container")[0].hidden=true;
    }
}

document.addEventListener("contextmenu", rightclick);
function rightclick(event) {
    showHideContextMenu(event.clientY,event.clientX);
}

function showHideContextMenu(top=0,left=0){
    if(document.getElementsByClassName("context-menu-container")[0].hidden){
        if(top<=26) return false;
        if(left<=80) return false;
        if(document.querySelector(".activities").style.visibility!="hidden") return false;
        if(document.querySelector(".app-menu").style.visibility!="hidden") return false;
        document.getElementsByClassName("context-menu-container")[0].hidden=false;
        document.getElementsByClassName("context-menu")[0].style.top=top+"px";
        document.getElementsByClassName("context-menu")[0].style.left=left+"px";
    } else {
        document.getElementsByClassName("context-menu-container")[0].hidden=true;
    }
}

document.addEventListener("contextmenu", rightclick);
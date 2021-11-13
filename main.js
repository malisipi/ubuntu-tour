function rightclick(event) {
    if(event.target.className=="desktop" || event.target.className=="context-menu-container"){
        showHideContextMenu(event.clientY,event.clientX);
    }
}

function showHideContextMenu(top=0,left=0){
    if(document.getElementsByClassName("context-menu-container")[0].hidden){
        if(document.querySelector(".activities").style.visibility!="hidden") return false;
        if(document.querySelector(".app-menu").style.visibility!="hidden") return false;
        document.getElementsByClassName("context-menu-container")[0].hidden=false;
        document.getElementsByClassName("context-menu")[0].style.top=top+"px";
        document.getElementsByClassName("context-menu")[0].style.left=left+"px";
        var context_menu_location=document.getElementsByClassName("context-menu")[0].getBoundingClientRect();
        if(window.innerWidth<context_menu_location.right){document.getElementsByClassName("context-menu")[0].style.left=(window.innerWidth-context_menu_location.width)+"px";}
        if(window.innerHeight<context_menu_location.bottom){document.getElementsByClassName("context-menu")[0].style.top=(window.innerHeight-context_menu_location.height)+"px";}
    } else {
        document.getElementsByClassName("context-menu-container")[0].hidden=true;
    }
}

document.addEventListener("contextmenu", rightclick);
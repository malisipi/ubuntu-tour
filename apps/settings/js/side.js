function doInactive(obj){
    obj.className="location-inactive";
}

function doActive(obj){
    obj.className="location-active";
}

function openLocation(thelocation){
    if(thelocation=="!") aboutLocation=["",-1];
    if(thelocation=="Background") aboutLocation=["background.html",3];
    if(thelocation=="About") aboutLocation=["about.html",24];

    try {
        doInactive(parent.document.getElementsByClassName("side-iframe")[0].contentWindow.document.getElementsByClassName("location-active")[0]);
    } catch {}
    if(aboutLocation[1]!=-1){
        parent.document.getElementsByClassName("content-iframe")[0].src=aboutLocation[0];
        doActive(parent.document.getElementsByClassName("side-iframe")[0].contentWindow.document.getElementsByClassName("location-inactive")[aboutLocation[1]]);
    } else {
        alert("It's just a demo :)")
    }
}
function doInactive(obj){
    obj.className="location-inactive";
}

function doActive(obj){
    obj.className="location-active";
}

function openLocation(thelocation){
    if(thelocation=="Starry") aboutLocation=["starry.html","Starry",0];
    if(thelocation=="Home") aboutLocation=["home.html","/home/user/",1];
    if(thelocation=="Desktop") aboutLocation=["desktop.html","/home/user/Desktop",-1];
    if(thelocation=="Documents") aboutLocation=["documents.html","/home/user/Documents",2];
    if(thelocation=="Downloads") aboutLocation=["downloads.html","/home/user/Downloads",3];
    if(thelocation=="Music") aboutLocation=["music.html","/home/user/Music",4];
    if(thelocation=="Pictures") aboutLocation=["pictures.html","/home/user/Pictures",5];
    if(thelocation=="Videos") aboutLocation=["videos.html","/home/user/Videos",6];
    if(thelocation=="Trash") aboutLocation=["trash.html","Trash",7];
    if(thelocation=="Other Locations") aboutLocation=["other_locations.html","Other Locations",8];
    if(thelocation=="Templates") aboutLocation=["templates.html","/home/user/Templates",-1];
    parent.document.getElementsByClassName("content-iframe")[0].src=aboutLocation[0];

    try {
        doInactive(parent.document.getElementsByClassName("side-iframe")[0].contentWindow.document.getElementsByClassName("location-active")[0]);
    } catch {}
    if(aboutLocation[2]!=-1) doActive(parent.document.getElementsByClassName("side-iframe")[0].contentWindow.document.getElementsByClassName("location-inactive")[aboutLocation[2]]);
    parent.document.getElementById("url-bar").value=aboutLocation[1];
}

function openFile(theFile){
    if(theFile=="9XngoIpxcEo.jpg") aboutFile=["../../icons/unsplash/9XngoIpxcEo.jpg","picture"];
    if(theFile=="qDG7XKJLKbs.jpg") aboutFile=["../../icons/unsplash/qDG7XKJLKbs.jpg","picture"];
    if(theFile=="Tjbk79TARiE.jpg") aboutFile=["../../icons/unsplash/Tjbk79TARiE.jpg","picture"];

    if(aboutFile[1]=="picture"){
        parent.parent.start_app('eog',"file="+aboutFile[0]);
    }
}
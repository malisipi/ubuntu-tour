urlParams = new URLSearchParams(window.location.search);
theFile = urlParams.get('file');

function zoomIn(){
    document.getElementById("zoomNumber").value-=-5;
    setZoom();
}

function setZoom(){
    document.getElementsByClassName("content-iframe")[0].contentWindow.document.getElementsByTagName("img")[0].style.zoom=document.getElementById("zoomNumber").value/100;
}

function zoomOut(){
    document.getElementById("zoomNumber").value-=5;
    setZoom();
}

function doFullscreen(){
    parent.parent.showNotification("It's just a demo :)","","",1250);
}

function showMenu(){
    parent.parent.showNotification("It's just a demo :)","","",1250);
}

function showImage(){
    if(theFile!=null){
        document.getElementsByClassName("content-iframe")[0].src="image.html?image="+theFile;
        document.getElementsByClassName("special-title")[0].innerText=theFile.replace(/^.*(\\|\/|\:)/, '');
    } else {
        document.getElementsByClassName("special-title")[0].innerText="Image Viewer";
        document.getElementById("zoom-in").disabled=true;
        document.getElementById("zoom-out").disabled=true;
        document.getElementById("zoomNumber").disabled=true;
    }
}
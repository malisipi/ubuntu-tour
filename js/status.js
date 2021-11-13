function changeBrightness(){
    parent.document.getElementById("brightness").style.opacity=1-document.getElementById("brightness-change").value/100;
}

function openSettings(){
    parent.showStatusAbout();
    parent.start_app('gnome-control-center');
}

openShutdown = ()=>{
    parent.showDialog("Shutdown Computer","Do you want to shutdown your computer?","Cancel","Shutdown","","location.href='https://github.com/malisipi/ubuntu-tour'")
}
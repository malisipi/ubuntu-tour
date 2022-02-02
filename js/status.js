function changeBrightness(){
    parent.document.getElementById("brightness").style.opacity=1-window.event.target.value/100;
}

function changeVolume(){
    let _volume=window.event.target.value;
    if(_volume==0){
        parent.document.querySelector("#sound").src="icons/Suru/Suru/scalable/status/audio-volume-muted-symbolic.svg"
    } else if(_volume<26){
        parent.document.querySelector("#sound").src="icons/Suru/Suru/scalable/status/audio-volume-low-symbolic.svg"
    } else if(_volume<76){
        parent.document.querySelector("#sound").src="icons/Suru/Suru/scalable/status/audio-volume-medium-symbolic.svg"
    } else {
        parent.document.querySelector("#sound").src="icons/Suru/Suru/scalable/status/audio-volume-high-symbolic.svg"
    }
}

function openSettings(){
    parent.showStatusAbout();
    parent.start_app('gnome-control-center');
}

openShutdown = ()=>{
    parent.showDialog("Shutdown Computer","Do you want to shutdown your computer?","Cancel","Shutdown","","location.href='https://github.com/malisipi/ubuntu-tour'")
}

lockSession=()=>{
    parent.showStatusAbout();
    parent.lockSession();
}
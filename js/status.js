function changeBrightness(){
    parent.document.getElementById("brightness").style.opacity=1-document.getElementById("brightness-change").value/100;
}

function openSettings(){
    parent.showStatusAbout();
    parent.window_create_special(parent.createRandomWindowID(),'apps/settings/index.html','Settings','icons/Suru/Suru/48x48/apps/system-settings.png');
}
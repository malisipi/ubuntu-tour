function changeBrightness(){
    parent.document.getElementById("brightness").style.opacity=1-document.getElementById("brightness-change").value/100;
}
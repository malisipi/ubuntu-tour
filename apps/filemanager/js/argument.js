function checkArgument(){
    urlParams = new URLSearchParams(window.location.search);
    argv = urlParams.get('open');
    if(argv!=null) document.getElementsByClassName("side-iframe")[0].contentWindow.openLocation(argv);
}
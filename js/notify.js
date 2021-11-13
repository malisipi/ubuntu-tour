__notify_action="";

showNotification = (__title="",__text="",__action="",__wait=10000) => {
    document.querySelector("#notify-box").hidden=false;
    document.querySelector("#notify-title").innerText=__title;
    document.querySelector("#notify-text").innerText=__text;
    __notify_action=__action;
    setTimeout(()=>{document.querySelector("#notify-box").hidden=true;},__wait) //notify-autoclose
}
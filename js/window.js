__set_movable = (obj,_mv,s="") => {
    if(_mv){
        document.getElementById(obj.id+"-titlebar"+s).onmousedown = function(e) {
            pointerX = e.clientX;
            pointerY = e.clientY;
            document.onmouseup = function(){
                document.onmouseup = null;
                document.onmousemove = null;};
                document.onmousemove =  function(e) {
                    pointerXmove = pointerX - e.clientX;
                    pointerYmove = pointerY - e.clientY
                    pointerX = e.clientX
                    pointerY = e.clientY;
                    obj.style.top = (obj.offsetTop - pointerYmove) + 'px';
                    obj.style.left = (obj.offsetLeft - pointerXmove) + 'px';
        };};

        document.getElementById(obj.id+"-titlebar"+s).ontouchstart = function(e) {
            pointerX = e.touches[0].clientX;
            pointerY = e.touches[0].clientY;
            document.ontouchend = function(){
                document.ontouchend = null;
                document.ontouchmove = null;};
                document.ontouchmove =  function(e) {
                    pointerXmove = pointerX - e.touches[0].clientX;
                    pointerYmove = pointerY - e.touches[0].clientY
                    pointerX = e.touches[0].clientX
                    pointerY = e.touches[0].clientY;
                    obj.style.top = (obj.offsetTop - pointerYmove) + 'px';
                    obj.style.left = (obj.offsetLeft - pointerXmove) + 'px';
        };};
    } else {
        document.getElementById(obj.id+"-titlebar").onmousedown = function(e) {};
        document.getElementById(obj.id+"-titlebar").ontouchstart = function(e) {};    
    }
}

function AllowMovable(obj) {
    __set_movable(obj,true)

    if (document.getElementById(obj.id+"-titlebar2") != null) { // For special titlebars
        [2,3,4].forEach(s=>{__set_movable(obj,true,s)})
    }
}

function DisableMovable(w) {
    obj=document.getElementById(w);
    __set_movable(obj,false)

    if (document.getElementById(obj.id+"-titlebar2") != null) { // For special titlebars
        [2,3,4].forEach(s=>{__set_movable(obj,false,s)})
    }
}

function window_minimize(w){
    hideAppMenu();
    if(document.getElementById(w).hidden){
        document.getElementById(w).hidden=false;
        changeWindowZIndex(w);
        document.getElementById(w).onmousedown()
    }else{
        if(ZIndex-1==document.getElementById(w).style.zIndex){
            document.getElementById(w).hidden=true;
            changePanelActiveAppIcon('icons/null.svg','');
        }else{
            changeWindowZIndex(w);
            document.getElementById(w).onmousedown()
        }
    }
}

window_infos={};

function window_maximize(w){
    window_infos[w]=[document.getElementById(w).style.top,document.getElementById(w).style.left,document.getElementById(w).style.width,document.getElementById(w).style.height];
    document.getElementById(w).style.top="26px";
    document.getElementById(w).style.left="80px";
    document.getElementById(w).style.width="calc(100% - 80px)";
    document.getElementById(w).style.height="calc(100% - 26px)";
    DisableMovable(w);
    document.getElementById(w+"-maximize").src="icons/Suru/Suru/scalable/ui/window-restore-symbolic.svg";
    document.getElementById(w+"-maximize").onclick = function(e) {window_restore(w)};
    document.getElementById(w).style.boxShadow="none";
    document.getElementById(w).style.border="none";
    document.getElementById(w).style.borderTopLeftRadius="0px";
    document.getElementById(w).style.borderTopRightRadius="0px";
    document.getElementById(w).style.resize="none";
}

function window_restore(w){
    document.getElementById(w).style.top=window_infos[w][0];
    document.getElementById(w).style.left=window_infos[w][1];
    document.getElementById(w).style.width=window_infos[w][2];
    document.getElementById(w).style.height=window_infos[w][3];
    AllowMovable(document.getElementById(w));
    document.getElementById(w+"-maximize").src="icons/Suru/Suru/scalable/ui/window-maximize-symbolic.svg";
    document.getElementById(w+"-maximize").onclick = function(e) {window_maximize(w)};
    document.getElementById(w).style.boxShadow="0px 0px 10px #220022";
    document.getElementById(w).style.border="#220022 1px solid";
    document.getElementById(w).style.borderTopLeftRadius="10px";
    document.getElementById(w).style.borderTopRightRadius="10px";
    document.getElementById(w).style.resize="both";
}

function window_create(name,url,title,icon,icon_grayscale="",icon_brightness=1){
    if(icon_grayscale=="") icon_grayscale=icon;
    hideAppMenu();
    document.getElementsByClassName("dock")[0].insertAdjacentHTML('afterend',"<div id=\""+name+"\" onmousedown=\"changePanelActiveAppIcon('"+icon_grayscale+"','"+title+"',"+icon_brightness+");changeWindowZIndex('"+name+"');\" class=\"window\">\
        <div id=\""+name+"-titlebar\" class=\"window-titlebar\">\
            <div class=\"window-titlebar-title\">"+title+"</div>\
            <div class=\"window-titlebar-control\">\
                <img class=\"window-titlebar-control-icon\" onclick=\"window_minimize('"+name+"');\" draggable=\"false\" src=\"icons/Suru/Suru/scalable/ui/window-minimize-symbolic.svg\"/>&nbsp;&nbsp;\
                <img id=\""+name+"-maximize\" class=\"window-titlebar-control-icon\" onclick=\"window_maximize('"+name+"');\" draggable=\"false\" src=\"icons/Suru/Suru/scalable/ui/window-maximize-symbolic.svg\"/>&nbsp;&nbsp;\
                <img class=\"window-titlebar-control-close-icon\" onclick=\"window_delete('"+name+"');\" draggable=\"false\" src=\"icons/Suru/Suru/scalable/ui/window-close-symbolic.svg\"/>&nbsp;&nbsp;\
            </div>\
        </div>\
        <iframe id=\""+name+"-content\" allowfullscreen class=\"window-content\" src=\""+url+"\"></iframe>\
    </div>");
    AllowMovable(document.getElementById(name));
    document.getElementById("dock").innerHTML+="<div id=\""+name+"-dock\" class=\"dock-app-container\">\
        <div class=\"dock-app-active\"></div>\
        <img class=\"dock-app\" onclick=\"window_minimize('"+name+"');\" draggable=\"false\" src=\""+icon+"\"/>\
    </div>";
    changePanelActiveAppIcon(icon_grayscale,title,icon_brightness);
    changeWindowZIndex(name);
    showNotification(title,"\""+title+"\" is ready","",2000);
}

function window_create_special(name,url,title,icon,icon_grayscale="",icon_brightness=1){
    if(icon_grayscale=="") icon_grayscale=icon;
    hideAppMenu();
    document.getElementsByClassName("dock")[0].insertAdjacentHTML('afterend',"<div id=\""+name+"\" onmousedown=\"changePanelActiveAppIcon('"+icon_grayscale+"','"+title+"',"+icon_brightness+");changeWindowZIndex('"+name+"');\" class=\"window\">\
        <div id=\""+name+"-titlebar\" class=\"window-titlebar-special\">\
            <div class=\"window-titlebar-control\">\
                <img class=\"window-titlebar-control-icon\" onclick=\"window_minimize('"+name+"');\" draggable=\"false\" src=\"icons/Suru/Suru/scalable/ui/window-minimize-symbolic.svg\"/>&nbsp;&nbsp;\
                <img id=\""+name+"-maximize\" class=\"window-titlebar-control-icon\" onclick=\"window_maximize('"+name+"');\" draggable=\"false\" src=\"icons/Suru/Suru/scalable/ui/window-maximize-symbolic.svg\"/>&nbsp;&nbsp;\
                <img class=\"window-titlebar-control-close-icon\" onclick=\"window_delete('"+name+"');\" draggable=\"false\" src=\"icons/Suru/Suru/scalable/ui/window-close-symbolic.svg\"/>&nbsp;&nbsp;\
            </div>\
        </div>\
        <div id=\""+name+"-titlebar2\" class=\"window-titlebar-special-2\"></div>\
        <div id=\""+name+"-titlebar3\" class=\"window-titlebar-special-3\"></div>\
        <div id=\""+name+"-titlebar4\" class=\"window-titlebar-special-4\"></div>\
        <iframe id=\""+name+"-content\" allowfullscreen class=\"window-content-special\" src=\""+url+"\"></iframe>\
    </div>");
    AllowMovable(document.getElementById(name));
    document.getElementById("dock").innerHTML+="<div id=\""+name+"-dock\" class=\"dock-app-container\">\
        <div class=\"dock-app-active\"></div>\
        <img class=\"dock-app\" onclick=\"window_minimize('"+name+"');\" draggable=\"false\" src=\""+icon+"\"/>\
    </div>";
    changePanelActiveAppIcon(icon_grayscale,title,icon_brightness);
    changeWindowZIndex(name);
    showNotification(title,"\""+title+"\" is ready","",2000);
}

function window_delete(w){
    document.getElementById(w).remove();
    document.getElementById(w+"-dock").remove();
    changePanelActiveAppIcon('icons/null.svg','');
}

ZIndex=1000;

function changeWindowZIndex(id){
    document.getElementById(id).style.zIndex=ZIndex;
    ZIndex+=1;
}

latest_window_id=0;

function createRandomWindowID(){
    latest_window_id+=1;
    return "w"+latest_window_id;
}

// /?[<name>,<icon>,<location>]
// for example; ?[%22Ubuntu-Tour%22,%22https://malisipi.github.io/ubuntu-tour/%22,%22https://malisipi.github.io/ubuntu-tour/icons/Suru/Suru/scalable/places/start-here-symbolic.svg%22]
window.addEventListener("load",()=>{
    if(window.location.search!=""){
        __hide_location_confirm=1;
        __the_app=JSON.parse(decodeURIComponent(window.location.search).replace("?",""));
        console.info(__the_app);
        window_create(createRandomWindowID(),__the_app[1],__the_app[0],__the_app[2]);
        window_maximize("w1");
    }
});
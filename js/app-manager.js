app_list = [
    {
        "code_name":"epiphany",
        "name":"Web",
        "location":"apps/webbrowser/index.html",
        "icon_48":"icons/Suru/Suru/48x48/apps/webbrowser-app.png",
        "dark_icon":"icons/Suru/Suru/scalable/apps/webbrowser-app-symbolic.svg",
        "dark_icon_brightness":2,
        "special":true,
        "icon":"icons/Suru/Suru/256x256/apps/webbrowser-app.png"
    },
    {
        "code_name":"nautilus",
        "name":"Files",
        "location":"apps/filemanager/index.html",
        "icon_48":"icons/Suru/Suru/48x48/apps/filemanager-app.png",
        "dark_icon":"icons/Suru/Suru/scalable/apps/filemanager-app-symbolic.svg",
        "dark_icon_brightness":2,
        "special":true,
        "icon":"icons/Suru/Suru/256x256/apps/filemanager-app.png"
    },
    {
        "code_name":"eog",
        "name":"Image Viewer",
        "location":"apps/imageviewer/index.html",
        "icon_48":"icons/Suru/Suru/48x48/apps/image-viewer-app.png",
        "dark_icon":"icons/Suru/Suru/scalable/apps/image-viewer-app-symbolic.svg",
        "dark_icon_brightness":2,
        "special":true,
        "icon":"icons/Suru/Suru/256x256/apps/image-viewer-app.png"
    },
    {
        "code_name":"gnome-maps",
        "name":"Maps",
        "location":"apps/maps/index.html",
        "icon_48":"icons/Suru/Suru/48x48/apps/maps-app.png",
        "dark_icon":"icons/Suru/Suru/scalable/apps/maps-app-symbolic.svg",
        "dark_icon_brightness":2,
        "special":true,
        "icon":"icons/Suru/Suru/256x256/apps/maps-app.png"
    },
    {
        "code_name":"gnome-help",
        "name":"Help",
        "location":"apps/help/index.html",
        "icon_48":"icons/Suru/Suru/48x48/apps/help-app.png",
        "dark_icon":"icons/Suru/Suru/scalable/apps/help-app-symbolic.svg",
        "dark_icon_brightness":2,
        "special":true,
        "icon":"icons/Suru/Suru/256x256/apps/help-app.png"
    },
    {
        "code_name":"gnome-control-center",
        "name":"Settings",
        "location":"apps/settings/index.html",
        "icon_48":"icons/Suru/Suru/48x48/apps/system-settings.png",
        "dark_icon":"icons/Suru/Suru/scalable/apps/system-settings-symbolic.svg",
        "dark_icon_brightness":2,
        "special":true,
        "icon":"icons/Suru/Suru/256x256/apps/system-settings.png"
    },
    {
        "code_name":"gnome-terminal",
        "name":"Terminal",
        "location":"apps/terminal/index.html",
        "icon_48":"icons/Suru/Suru/48x48/apps/terminal-app.png",
        "dark_icon":"icons/Suru/Suru/scalable/apps/terminal-app-symbolic.svg",
        "dark_icon_brightness":2,
        "special":true,
        "icon":"icons/Suru/Suru/256x256/apps/terminal-app.png"
    },
    {
        "code_name":"gnome-weather",
        "name":"Weather",
        "location":"apps/weather/index.html",
        "icon_48":"icons/Suru/Suru/48x48/apps/weather-app.png",
        "dark_icon":"icons/Suru/Suru/scalable/apps/weather-app-symbolic.svg",
        "dark_icon_brightness":2,
        "special":true,
        "icon":"icons/Suru/Suru/256x256/apps/weather-app.png"
    },
    {
        "code_name":"loffice --writer",
        "name":"LibreOffice Writer",
        "location":"apps/libreoffice/writer/index.html",
        "icon_48":"icons/Suru/Suru/48x48/apps/libreoffice-writer.png",
        "dark_icon":"icons/Suru/Suru/scalable/mimetypes/x-office-document-symbolic.svg",
        "dark_icon_brightness":2,
        "icon":"icons/Suru/Suru/256x256/apps/libreoffice-writer.png"
    },
    {
        "code_name":"loffice --calc",
        "name":"LibreOffice Calc",
        "location":"apps/libreoffice/calc/index.html",
        "icon_48":"icons/Suru/Suru/48x48/apps/libreoffice-calc.png",
        "dark_icon":"icons/Suru/Suru/scalable/mimetypes/x-office-spreadsheet-symbolic.svg",
        "dark_icon_brightness":2,
        "icon":"icons/Suru/Suru/256x256/apps/libreoffice-calc.png"
    },
    {
        "code_name":"wine mspaint.exe",
        "name":"Paint - WineHQ",
        "location":"https://paint.js.org",
        "icon":"https://paint.js.org/assets/icon.png"
    },
    {
        "code_name":"wine notepad.exe",
        "name":"Notepad - WineHQ",
        "location":"apps/wine/notepad.html",
        "icon":"icons/Suru/Suru/256x256/apps/wine.png",
        "dark_icon":"icons/Suru/Suru/scalable/apps/wine-symbolic.svg",
        "dark_icon_brightness":2,
        "icon_48":"icons/Suru/Suru/48x48/apps/wine.png"
    },
    {
        "code_name":"code",
        "name":"Visual Studio Code",
        "location":"https://vscode.dev",
        "icon":"https://code.visualstudio.com/favicon.ico"
    }
]

// init app_menu
init_app_list = () => {
    __app_list="";
    app_list.forEach(app => {
        if(app.dark_icon==undefined) app.dark_icon=app.icon;
        if(app.dark_icon_brightness==undefined) app.dark_icon_brightness=1;
        if(app.icon_48==undefined) app.icon_48=app.icon;
        if(app.special==undefined) app.special=false;
        __app_list+="<div class=\"app-menu-app\"><img class=\"app-menu-app-image\" onclick=\"start_app('"+app.code_name+"');\" draggable=\"false\" src=\""+app.icon+"\"/></div>";
    });

    document.querySelector(".app-menu-container").innerHTML=__app_list;
    delete __app_list;
}
//

window.addEventListener("load",()=>{
    init_app_list();
});

start_app = (code_name,arg="") => {
    app="";
    app_list.forEach(__app => {if(__app.code_name==code_name){app=__app;}});
    if(arg!="") arg="?"+arg;
    if(app!=""){
        if(app.special){
            window_create_special(createRandomWindowID(),app.location+arg,app.name,app.icon_48,app.dark_icon,app.dark_icon_brightness);
        } else {
            window_create(createRandomWindowID(),app.location+arg,app.name,app.icon_48,app.dark_icon,app.dark_icon_brightness);
        }
    }
}

check_app = (code_name) => {
    app="";
    app_list.forEach(__app => {if(__app.code_name==code_name){app=__app;}});
    if(app!=""){
        return true;
    } else {
        return false;
    }
}
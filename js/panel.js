monthShortNames=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

if(navigator.getBattery!=undefined){
    batteryIcon=document.querySelector("#battery");
    (async ()=>{
        deviceBattery=await navigator.getBattery();

        updateBatteryIcon=()=>{
            if(deviceBattery.charging){
                batteryIcon.src="icons/Suru/Suru/scalable/status/battery-level-"+(Math.round(deviceBattery.level*10)*10)+"-charging-symbolic.svg";
                document.querySelector(".status-about").contentDocument.querySelector("#battery").src="icons/Suru/Suru/scalable/status/battery-level-"+(Math.round(deviceBattery.level*10)*10)+"-charging-symbolic.svg";
                if(deviceBattery.level==1){
                    document.querySelector(".status-about").contentDocument.querySelector("#battery-info").innerText="Full";
                } else {
                    if(deviceBattery.chargingTime!=Infinity){
                        document.querySelector(".status-about").contentDocument.querySelector("#battery-info").innerText=Math.floor(((1-deviceBattery.level)*100*60*3) / 3600)+":"+Math.floor(((1-deviceBattery.level)*100*60*3) % 3600 / 60)+" Until Full ("+(deviceBattery.level*100)+" %)";
                    }
                }
            } else {
                batteryIcon.src="icons/Suru/Suru/scalable/status/battery-level-"+(Math.round(deviceBattery.level*10)*10)+"-symbolic.svg";
                document.querySelector(".status-about").contentDocument.querySelector("#battery").src="icons/Suru/Suru/scalable/status/battery-level-"+(Math.round(deviceBattery.level*10)*10)+"-symbolic.svg";
                if(deviceBattery.dischargingTime!=Infinity){
                    document.querySelector(".status-about").contentDocument.querySelector("#battery-info").innerText=Math.floor(deviceBattery.dischargingTime / 3600)+":"+Math.floor(deviceBattery.dischargingTime % 3600 / 60)+" Remaining ("+(deviceBattery.level*100)+" %)";
                } else {
                    document.querySelector(".status-about").contentDocument.querySelector("#battery-info").innerText=Math.floor((deviceBattery.level*100*60*3) / 3600)+":"+Math.floor((deviceBattery.level*100*60*3) % 3600 / 60)+" Remaining ("+(deviceBattery.level*100)+" %)";
                }
            }
        }
        
        deviceBattery.addEventListener("chargingchange",updateBatteryIcon);
        deviceBattery.addEventListener("levelchange",updateBatteryIcon);
    })();
}

wifiIcon=document.querySelector("#wifi");
wifiOfflineSVG="data:image/svg+xml,%3Csvg viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform='translate(-1073 267)'%3E%3Cpath d='M1081.003-265c-2.61 0-5.22.838-7.4 2.518l-.266.205.205.263 7.457 9.672 7.668-9.931-.264-.206a12.105 12.105 0 0 0-7.4-2.521zm0 1c2.181 0 4.344.672 6.227 1.951l-6.229 8.07-6.226-8.074c1.883-1.278 4.047-1.948 6.228-1.947z' fill='gray' font-family='sans-serif' font-weight='400' opacity='.5' overflow='visible' style='font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-ligatures:none;font-variant-numeric:normal;font-variant-position:normal;isolation:auto;mix-blend-mode:normal;shape-padding:0;text-decoration-color:%23000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-transform:none' white-space='normal'/%3E%3C/g%3E%3C/svg%3E"; // from Suru icons, licensed by (CC-BY-SA 4.0). Learn more about license from LICENSE.md

window.addEventListener("offline",()=>{
    wifiIcon.src="data:image/svg+xml,%3Csvg viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'%3E%3C/svg%3E";
    document.querySelector(".status-about").contentDocument.querySelector("#wifi").src=wifiOfflineSVG;
    document.querySelector(".status-about").contentDocument.querySelector("#wifi-info").innerText="Wi-Fi Not Connected";
    document.querySelector(".panel-status").className+=" panel-status-no-wifi";
});

window.addEventListener("online",()=>{
    wifiIcon.src="icons/Suru/Suru/scalable/status/network-wireless-connected-symbolic.svg";
    document.querySelector(".status-about").contentDocument.querySelector("#wifi").src="icons/Suru/Suru/scalable/status/network-wireless-connected-symbolic.svg";
    document.querySelector(".status-about").contentDocument.querySelector("#wifi-info").innerText="Wi-Fi";
    document.querySelector(".panel-status").className=document.querySelector(".panel-status").className.replace(" panel-status-no-wifi","");
});

function UpdatePanel(){
    now = new Date();
    document.getElementsByClassName("panel-notification")[0].innerHTML=now.getDate()+" "+(monthShortNames[now.getMonth()])+ " " + now.toString().match("..:..")[0];
}

setInterval(UpdatePanel,1000)

function changePanelActiveAppIcon(icon,name,brightness=1){
    if(name==""){
        document.querySelector(".panel-active-app").hidden=true;
    }else{
        document.querySelector(".panel-active-app").hidden=false;
    }
    document.getElementsByClassName("panel-active-app-icon")[0].src=icon;
    document.getElementsByClassName("panel-active-app-name")[0].innerText=name;
    document.querySelector(".panel-active-app-icon").style.filter="brightness("+brightness+") grayscale(1)"
    setTimeout(() => {
        document.querySelector(".panel-active-app").style.width=Math.abs(document.getElementsByClassName("panel-active-app-icon")[0].getBoundingClientRect().left-document.getElementsByClassName("panel-active-app-name")[0].getBoundingClientRect().right)-(-20)+"px";
    }, 1);
}

function showStatusAbout(){
    if(document.getElementsByClassName("status-about")[0].hidden){
        document.getElementsByClassName("status-about")[0].hidden=false;
        document.querySelector(".notification-about").hidden=true;
    }else{
        document.getElementsByClassName("status-about")[0].hidden=true;
    }
}

function showNotificationAbout(){
    if(document.getElementsByClassName("notification-about")[0].hidden){
        document.getElementsByClassName("notification-about")[0].hidden=false;
        document.querySelector(".status-about").hidden=true;
    }else{
        document.getElementsByClassName("notification-about")[0].hidden=true;
    }
}
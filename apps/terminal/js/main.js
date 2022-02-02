terminal_filesystem={
    bin:{},
    boot:{},
    cdrom:{},
    dev:{},
    etc:{},
    home:{
        user:{
            "Desktop":{},
            "Documents":{},
            "Downloads":{},
            "Music":{},
            "Pictures":{},
            "Templates":{},
            "Videos":{},
        }
    },
    lib:{},
    "lost+found":{},
    media:{},
    mnt:{},
    opt:{},
    proc:{},
    root:{},
    run:{},
    sbin:{},
    srv:{},
    tmp:{},
    usr:{},
    var:{}
};

out=document.querySelector("#out")
__console_info="Welcome to Terminal";
outputs=__console_info;
now_dir="/";
now_command="";
run_python3=0;

function updateOutputs(){
    out.value=outputs;
}

function updateOutputsWithCommands(){
    setTimeout(() => {
        out.value=outputs+"\nuser@desktop:"+now_dir+"# "+now_command;
        out.scrollBy(0,9999999999999999999999999);
    }, 1);
}

function clearOutputs(){
    outputs=__console_info;
    updateOutputs();
}

function clearCommands(){
    now_command="";
}

function writeOutput(_value,add_new_line=1){
    if(add_new_line==1){
            outputs+="\n"+_value;
    }else{
            outputs+=_value;
    }
    out.scrollBy(0,9999999999999999999999999);
}

function runBashCommand(__command){
    __command=__command.trim().split(" ");
    var __the_command=__command[0];
    if(__the_command=="clear"){
        clearCommands();
        clearOutputs();
        return 0;
    }
    writeOutput("user@desktop:"+now_dir+"# "+now_command);
    if(parent.parent.check_app(__command.join(" "))){
        parent.parent.start_app(__command.join(" "));
    }else if(__the_command=="mkdir"||__the_command=="rmdir"||__the_command=="cp"||__the_command=="mv"||__the_command=="rm"){
        writeOutput(__the_command+": Read-only file system");
    }else if(__the_command==""){
        writeOutput("",0);
    }else if(__the_command=="apt-get"||__the_command=="apt"||__the_command=="dpkg"){
        writeOutput("Package manager is busy now.")
    }else if(__the_command=="su"||__the_command=="sudo"){
        writeOutput("You are already logged in as root user.")
    }else if(__the_command=="uname"){
        writeOutput("Linux")
    }else if(__the_command=='notify-send'){
        parent.parent.showNotification(__command[1],__command[2]);
    }else if(__the_command=='wine'){
        if(__command.length==1 || __command[1]=="--help"){
            writeOutput("Usage: wine PROGRAM [ARGUMENTS...]   Run the specified program\n       wine --help                   Display this help and exit\n       wine --version                Output version information and exit");
        } else if(__command[1]=="--version"){
            writeOutput("wine-7.0-rc5")
        } else {
            writeOutput("The application could not be started or there is no application associated with the specified file.")
        }
    }else if(__the_command=="sh"||__the_command=="bash"){
        writeOutput(__console_info);
    }else if(__the_command=="python3"){
        run_python3=1;
        brython({"debug":0});
    }else if(__the_command=="echo"){
        writeOutput(__command.join(" ").replace("echo ",""))
    }else if(__the_command=="cd"){
        if(now_dir=="/"){
            if(__command[1] in terminal_filesystem){
                now_dir+=__command[1]+"/";
                writeOutput("",0);
            }else{
                writeOutput("cd: Directory not found");
            }
        }else if(__command[1].startsWith("..")){
            now_dir="/";
            writeOutput("",0);
        }else{
            writeOutput("It's just a demo :)")
        }
    }else if(__the_command=="ls"||__the_command=="dir"){
        if(now_dir=="/"){
            var __temp=[];
            for(var i in terminal_filesystem){
                __temp.push(i);
            }
            __temp.forEach((_)=>{writeOutput(_);})
        }else{
            writeOutput("It's just a demo. :)")
        }
    }else if(__the_command=="help"){
        writeOutput("\
mkdir       rmdir   cp      mv      rm\n\
apt-get     apt     dpkg    su      sudo\n\
sh          bash    echo    help    clear\n\
cd          ls      dir     python3 uname\n\
notify-send wine")
    }else{
        writeOutput(__the_command+": Command not found")
    }
    clearCommands();
    updateOutputsWithCommands();
}

function handlerKeyPress(){
    if(run_python3==1) return false;
    keyCode=window.event.keyCode;
    keyName=window.event.key;
    if(keyCode==8){
        now_command=now_command.substring(0,now_command.length-1);
    } else if(keyCode==13){
        runBashCommand(now_command);
    } else if(keyName.length<2){
        now_command+=keyName;
    }
    updateOutputsWithCommands();
}

document.addEventListener("keydown",handlerKeyPress);

updateOutputsWithCommands();
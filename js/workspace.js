_workspace_change=0;
function changeWorkspace(){
    _workspace_change+=1;
    document.querySelector(".workspaces").hidden=false;
    setTimeout((_ws)=>{
        if(_workspace_change==_ws){
            document.querySelector(".workspaces").hidden=true;
        }
    },1000,_workspace_change)
}
__dialog_opt1="";
__dialog_opt2="";

showDialog = (__title="",__text="",__opt1="Cancel",__opt2="OK",__opt1_func="",__opt2_func="") => {
    __dialog_opt1=__opt1_func;
    __dialog_opt2=__opt2_func;
    document.querySelector("#dialog-box-container").hidden=false;
    document.querySelector("#dialog-title").innerText=__title;
    document.querySelector("#dialog-text").innerText=__text;
    document.querySelector("#dialog-option-1").innerText=__opt1;
    document.querySelector("#dialog-option-2").innerText=__opt2;
}
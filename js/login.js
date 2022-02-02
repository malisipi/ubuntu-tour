loginSession=()=>{
    document.querySelector("link#login-css").remove();
}

lockSession=()=>{
    document.head.insertAdjacentHTML("beforeend",'<link rel="stylesheet" href="css/login.css" id="login-css">');
}
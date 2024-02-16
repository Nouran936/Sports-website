const logEmail = document.getElementById("logEmail");
const logPass = document.getElementById("logPass");
const logPassErorr = document.getElementById('logPassErorr');
const logEmailErorr = document.getElementById('logEmailErorr');
const changeaction = document.getElementById("cahngeAction");


logEmail.onblur = function(){
    if(logEmail.value == ""){
        
    }
    else if (localStorage.getItem(logEmail.value) == null){
        logEmail.style.border = "1px solid red";
        logEmailErorr.style.display = "block";
        logEmailErorr.innerText="wrong email pleas try again.";
    }
    else{
        const Elements = JSON.parse(localStorage[logEmail.value]);
        console.log(Elements[0].indexOf("@admin"));
        if (Elements[0] == logEmail.value && Elements[0].indexOf("@admin") == -1){
            console.log("no");
            logEmail.style.border = "1px solid green";
            logEmailErorr.style.display = "none";
            logPass.onblur = function(){
                if(Elements[1] == logPass.value ){

                    logPass.style.border = "1px solid green";
                    logPassErorr.style.display = "none";
                    
                    return false;

                }
                else{

                    logPassErorr.style.display = "block";
                    logPass.style.border = "1px solid red";
                    logPassErorr.innerText="your password is wrong.";
                    
                    return false;
                    
                }
            }
        }
        else if(Elements[0] == logEmail.value && Elements[0].indexOf("@admin") != -1){
            console.log("yes");
            logEmail.style.border = "1px solid yellow";
            logEmailErorr.style.display = "none";
            logPass.onblur = function(){
                if(Elements[1] == logPass.value ){

                    logPass.style.border = "1px solid yellow";
                    logPassErorr.style.display = "none";
                    return false;

                }
                else{

                    logPassErorr.style.display = "block";
                    logPass.style.border = "1px solid red";
                    logPassErorr.innerText="your password is wrong.";
                    
                    return false;
                    
                }
            }
        }
        
        
    }
}


function login(){
    
    

    if(localStorage.getItem(logEmail.value) == null){
        return false;
    }

    else{
        const Elements = JSON.parse(localStorage[logEmail.value]);
        if (Elements[0] == logEmail.value && Elements[0].indexOf("@admin") == -1){
            if(Elements[1] == logPass.value){
                logEmail.value = "";
                console.log("login successfully");
                document.location.href = "homepage.html";
                return false;
                
            }
            else{
                return false;
            }
        }
        else if(Elements[0] == logEmail.value && Elements[0].indexOf("@admin") != -1){
                if(Elements[1] == logPass.value ){
                    logEmail.value = "";
                    document.location.href = "admin.html";
                    console.log("welcom felo");
                    return false;

                }
                else{
                    return false;
                }
            }
    }
    
}
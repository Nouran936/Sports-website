const Email = document.getElementById("email");
const pass = document.getElementById("password");
const rePass = document.getElementById("password1");
const phoneNum = document.getElementById("phoneNum")

const passError = document.getElementById('pass_erorr');


rePass.onblur = function(){
    if(pass.value != rePass.value ){
        passError.style.display = "block";
        rePass.style.border = "1px solid red";
        passError.innerText = "The passwords you entered do not match.";
    }
    else if(rePass.value==""){
        passError.style.display = "block";
        rePass.style.border = "1px solid red";
        passError.innerText = "pleas fill the text";
    }
    else{
        
        passError.style.display = "none";
        rePass.style.border = "1px solid green";
    }
}



function validate(){
    
   
    if(pass.value != rePass.value ){
        return false;
    }
    else {
        
        passError.style.display = "none";
        rePass.style.border = "1px solid green";


        var data = [Email.value, pass.value, phoneNum.value]

        var myData = JSON.stringify(data);

        localStorage.setItem(Email.value, myData);
        document.location.href = "login.html";
        return false;
        
    }
}



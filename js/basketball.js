

if(localStorage.getItem("navBarcolor") == "" || localStorage.getItem("navBarcolor") === null){
  console.log("no");
}
else{
    
  document.getElementById("container").style.backgroundColor = localStorage.getItem("navBarcolor");
}


if(localStorage.getItem("changeBackground") == "" || localStorage.getItem("changeBackground") === null){
    console.log("no");
}
else{
    
  document.body.style.backgroundColor = localStorage.getItem("changeBackground");
}
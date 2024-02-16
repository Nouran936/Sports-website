if(localStorage.getItem("navBarcolor") == "" || localStorage.getItem("navBarcolor") === null){
  
}
else{
  document.getElementById("container").style.backgroundColor = localStorage.getItem("navBarcolor");
}


if(localStorage.getItem("changeBackground") == "" || localStorage.getItem("changeBackground") === null){
  
}
else{
  document.body.style.backgroundColor = localStorage.getItem("changeBackground");
}





function openCity(evt, cityName) {
  var i, tabcontent, tablinks1,tablinks2,tablinks3;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks1 = document.getElementsByClassName("tablinks1");
  tablinks2 = document.getElementsByClassName("tablinks2");
  tablinks3 = document.getElementsByClassName("tablinks3");
    
      for (i = 0; i < tablinks2.length; i++) {
    tablinks2[i].className = tablinks2[i].className.replace(" active", "");
    
  for (i = 0; i < tablinks1.length; i++) {
    tablinks1[i].className = tablinks1[i].className.replace(" active", "");
  }

  }
  for (i = 0; i < tablinks3.length; i++) {
    tablinks3[i].className = tablinks3[i].className.replace(" active", "");
  }
    
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
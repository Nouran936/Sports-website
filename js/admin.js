const change_text = document.getElementById("text2");
const changeBackground = document.getElementById("text2");




document.getElementById("button3").onclick = function(){
  localStorage.removeItem("navBarcolor");
}
document.getElementById("button4").onclick = function(){
  localStorage.removeItem("changeBackground");
}
//change nav bar color
function showColor1(){
  document.getElementById("text1").value = document.getElementById("colorList1").value;
}
document.getElementById("button1").onclick = function(){
  localStorage.setItem("navBarcolor", document.getElementById("text1").value);
  document.getElementById("text1").value="";
}

//change background color

function showColor2(){
  changeBackground.value = document.getElementById("colorList2").value;
}
document.getElementById("button2").onclick = function(){
  localStorage.setItem("changeBackground", changeBackground.value);
  changeBackground.value="";
}








function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

   
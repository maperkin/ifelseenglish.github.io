let img = document.querySelector('img');
let myButton = document.getElementById('change');
let myClear = document.getElementById('clear');
let myHeading = document.querySelector('h1');

img.onclick = (function(){
  if(img.getAttribute('src')=='images/english.jpg'){
    img.setAttribute('src','images/english_ch.jpg');
  } else{
    img.setAttribute('src','images/english.jpg');
  }
});

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName.trim()){
    setUserName();
  } else{
    localStorage.setItem('name', myName.trim());
    myHeading.textContent = 'if-else-' + myName.trim();
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'if-else-' + storedName;
}

myClear.onclick = function(){
  localStorage.removeItem('name');
  myHeading.textContent = 'if-else-ENGLISH';
}

myButton.onclick = function(){
  setUserName();
}

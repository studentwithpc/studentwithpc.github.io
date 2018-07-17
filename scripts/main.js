//var myHeading = document.querySelector('h1');
//myHeading.textContent = 'Hello world!';
/*document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}*/
var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/pic1.png') {
      myImage.setAttribute ('src','images/pic2.png');
    } else {
      myImage.setAttribute ('src','images/pic1.png');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML  =  myName + ' посетил спутник Сатурна!!!';
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML  = 'Mozilla is cool, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}
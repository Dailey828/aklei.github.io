let myImage = document.querySelector('img');
myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/timg.jpg'){
        myImage.setAttribute('src','images/e.jpg');
    }else{
        myImage.setAttribute('src','images/timg.jpg');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName(){
    let myName = prompt('请输入你的名字：');
    if(!myName || myName === null) {
        setUserName();
      } else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'nga' + myName;
      }
}
if(!localStorage.getItem('name')){
    setUserName(); 
}else{
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'nga'+storedName;
}
myButton.onclick = function(){
    setUserName();
}
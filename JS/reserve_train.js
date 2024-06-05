// Automatic Counter with sroll Start
const secStatistics = document.querySelector('.statistics');
const statisticsItems = document.querySelectorAll(
  '.statistics__item__number'
);

let isDone = false;
const stepsNum = 200;

function startCount(el) {
  const countNumber = Number(el.dataset.toNumber);
  const stepsValue = Math.trunc(countNumber / stepsNum);
  const timerID = window.setInterval((e) => {
    el.textContent = Number(el.textContent) + stepsValue;
    if (Number(el.textContent) >= countNumber) {
      window.clearInterval(timerID);
    }
  }, 5);
}

function CountUpNumbers() {
  if (window.scrollY > secStatistics.offsetTop - 300) {
    // console.log("Hello");
    isDone = true;
    window.removeEventListener('scroll', CountUpNumbers);

    statisticsItems.forEach((item) => {
      startCount(item);
    });
  }
}

window.addEventListener('scroll', CountUpNumbers);
// Automatic Counter with sroll End
// Start to use AOS Animation 
AOS.init();

// const oneWay=document.getElementById("oneWay");
// const roundTrip=document.getElementById("roundTrip");
// const date=document.getElementById("date");
// if(oneWay.value =="oneWay"){
//   date.style.display="none";
// } 
// else if(roundTrip.value =="option2"){
//   date.style.display="flex";
// }
const replacebtn=document.querySelector(".replace__btn");
function change(){
  replacebtn.classList.toggle("unactive");
}
replacebtn.addEventListener("click",change);
var frominput=document.getElementById("frominput");
var toinput=document.getElementById("toinput");
var btn=document.querySelector(".searchbtn");
function validate(){
  if(frominput.value.trim()!=""){
    btn.style.pointerEvents="auto";
    btn.style.opacity="1";
}
else{
  btn.style.pointerEvents="none";
  btn.style.opacity="0.5";
}
}
frominput.addEventListener("keyup",validate);


// For Swapping between two inputs start
const input1=document.querySelector(".input1");
const input2=document.querySelector(".input2");
function swap(){
  var temp="";
  var obj1=input1.value;
  var obj2=input2.value;
  temp = obj1;
  obj1 = obj2;
  obj2 = temp;
  document.querySelector(".input1").value = obj1;
  document.querySelector(".input2").value = obj2;
}
btn.addEventListener("click",swap);
// For Swapping between two inputs End

// For increment and decrement number Start
let data=0;
let data1=0;
let data2=0;
document.querySelector(".data").innerHTML=data;
document.querySelector(".data1").innerHTML=data1;
document.querySelector(".data2").innerHTML=data2;
$(document).ready(function( ){
  $(".increment").click(function(){
    data++;
    document.querySelector(".data").innerHTML=data;
    if(data<=0){
      document.querySelector(".number").innerHTML="";
      $(".decrement").css({"pointer-events":"none","opacity":"0.5"});
    }if(data>0){
      $(".decrement").css({"pointer-events":"auto","opacity":"1"});
    }
  })
  $(".decrement").click(function(){
    data--;
    document.querySelector(".data").innerHTML=data;
    if(data<=0){
      $(".decrement").css({"pointer-events":"none","opacity":"0.5"});
    }if(data>0){
      $(".decrement").css({"pointer-events":"auto","opacity":"1"});
    }
    
  })
  $(".increment1").click(function(){
    data1++;
    document.querySelector(".data1").innerHTML=data1;
    if(data1<=0){
      $(".decrement1").css({"pointer-events":"none","opacity":"0.5"});
    }if(data1>0){
      $(".decrement1").css({"pointer-events":"auto","opacity":"1"});
    }
  })
  $(".decrement1").click(function(){
    data1--;
    document.querySelector(".data1").innerHTML=data1;
    if(data1<=0){
      $(".decrement1").css({"pointer-events":"none","opacity":"0.5"});
    }if(data1>0){
      $(".decrement1").css({"pointer-events":"auto","opacity":"1"});
    }
    
  })  
  $(".increment2").click(function(){
    data2++;
    document.querySelector(".data2").innerHTML=data2;
    if(data2<=0){
      $(".decrement2").css({"pointer-events":"none","opacity":"0.5"});
    }if(data2>0){
      $(".decrement2").css({"pointer-events":"auto","opacity":"1"});
    }
  })
  $(".decrement2").click(function(){
    data2--;
    document.querySelector(".data2").innerHTML=data2;
    if(data2<=0){
      $(".decrement2").css({"pointer-events":"none","opacity":"0.5"});
    }if(data2>0){
      $(".decrement2").css({"pointer-events":"auto","opacity":"1"});
    }
    })
    // For increment and decrement number End

    // For displaying search input
    $(".findbtn").click(function(){
      $(".search").toggle();
    })
  }); 
var btn=document.querySelector(".submitbtn");
    
function validate(){
    var content=document.querySelector(".modal__content");
    var modal=document.getElementById("staticBackdrop");
var x = document.forms["SignUp"]["Email1"].value;
if (x == "") {
    modal.style.display="block";
    modal.style.opacity="1";
    content.innerHTML="Please Enter from input";
    return false;
}
    else if(x.length > 30){
        modal.style.display="block";
    modal.style.opacity="1";
    content.innerHTML="Email too long";
    return false;
    }
var y = document.forms["SignUp"]["Email2"].value;
if (y == "") {
    modal.style.display="block";
    modal.style.opacity="1";
    content.innerHTML="Please Enter to input";
    return false;
    }
       else if(y.length > 30){
        modal.style.display="block";
    modal.style.opacity="1";
    content.innerHTML="Email too long";
    return false;
    }

    if (x!=y){
        modal.style.display="block";
    modal.style.opacity="1";
    content.innerHTML="Emails must match";
    return false;
    }
    
    
var c = document.forms["SignUp"]["Pass1"].value;
if (c == "") {
    modal.style.display="block";
    modal.style.opacity="1";
    content.innerHTML="Please Enter Password input";
    return false;
}
    

       else if(c.length > 30){
        modal.style.display="block";
    modal.style.opacity="1";
    content.innerHTML="Password too long";
    return false;
    }
}

btn.addEventListener("click",validate);
$(document).ready(function( ){
    $(".closebtn").click(function(){
        $(".modal").hide();
    })
    $(".findbtn").click(function(){
        $(".search").toggle();
      })
});



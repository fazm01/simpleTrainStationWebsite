var btn=document.querySelector(".submitbtn");
    
function validate(){
    var content=document.querySelector(".modal__content");
    var modal=document.getElementById("staticBackdrop");
    
var x = document.forms["Login"]["Email"].value;
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
    
var y = document.forms["Login"]["Password"].value;
if (y == "") {
    modal.style.display="block";
    modal.style.opacity="1";
    content.innerHTML="Please Enter to input";
    return false;
    }
else if(y.length > 30){
    modal.style.display="block";
    modal.style.opacity="1";
    content.innerHTML="Password too long";
    return false;
    }

    
    }
    

btn.addEventListener("click",validate);
$(document).ready(function( ){
    // For displaying search input
    $(".closebtn").click(function(){
        $(".modal").hide();
    })
});



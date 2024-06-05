var btn=document.querySelector(".submitbtn");
function validate(){
    var content=document.querySelector(".modal__content");
    var modal=document.getElementById("staticBackdrop");
var x = document.forms["edit"]["from"].value;
if (x == "") {
    modal.style.display="block";
    modal.style.opacity="1";
    content.innerHTML="Please Enter from input";
    return false;
}else if(x.length>20){
    modal.style.display="block";
    modal.style.opacity="1";
    content.innerHTML="Please Enter from input not greater than 20";
    return false;
}else if(x.length<3){
    modal.style.display="block";
    modal.style.opacity="1";
    content.innerHTML="Please Enter from input not less than 3";
    return false;
}
x = document.forms["edit"]["to"].value;
if (x == "") {
    modal.style.display="block";
    modal.style.opacity="1";
    content.innerHTML="Please Enter to input";
    return false;
    }
x = document.forms["edit"]["station"].value;
if (x == "") {
    modal.style.display="block";
    modal.style.opacity="1";
    content.innerHTML="Please Enter station input";
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
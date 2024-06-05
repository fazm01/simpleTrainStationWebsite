/*hide function*/

let EditF=document.querySelector(".Edit-form");
let CheckF=document.querySelector(".check_train");
let isShow=true;  

function hide(){
	var x = document.forms["form1"]["name"].value;
		if (x == "") {
			alert("name must be filled out ");
			return false;
		}
		x = document.forms["form1"]["id"].value;
		if (x == "") {
			alert("id must be filled out");
			return false;
			}

		if(isShow){
	CheckF.style.display="none";
	EditF.style.display="block"
	isShow=false;
          }
        else{
   CheckF.style.display="block";
	isShow=true;
         }
 
}
/*hide function*/

/*train data*/
let train_id=[1,2,3,4,5,6];

/*train data*/
/*remove train */


function Remove(){
	
	var x = document.forms["form2"]["name"].value;
	if (x == "") {
		alert("name must be filled out ");
		return false;
	}
	x = document.forms["form2"]["id"].value;
	if (x == "") {
		alert("id must be filled out");
		return false;
		}

        for(var i=0;i<=train_id.length;i++){
	       var id =document.forms["form2"]["id"].value;
	      if(train_id.includes(id)===-1){
			alert("train that id "+id+" rong");
			return false;
	  }
	  else{
		alert("train that id "+id+" removed successfully");
		return false;
		
	 
		 
	  }
	}

}
/*remove train */

function validate(){
	var x = document.forms["form"]["name"].value;
	if (x == "") {
		alert("name must be filled out ");
		return false;
	}
	x = document.forms["form"]["id"].value;
	if (x == "") {
		alert("id must be filled out");
		return false;
		}
	x = document.forms["form"]["direction"].value;
	if (x == "") {
		alert("direction must be filled out");
		return false;
	}
	x = document.forms["form"]["Departure"].value;
	if (x == "") {
		alert("departure must be filled out");
		return false;
	}
	x = document.forms["form"]["Arrive"].value;
	if (x == "") {
		alert("arrive must be filled out");
		return false;
	}
	}


	function contact(){
		var x = document.forms["form_c"]["name"].value;
		if (x == "") {
			alert("name must be filled out ");
			return false;
		}
		x = document.forms["form_c"]["email"].value;
		if (x == "") {
			alert("email must be filled out");
			return false;
			}
		x = document.forms["form_c"]["message"].value;
		if (x == "") {
			alert("message must be filled out");
			return false;
		}}

		
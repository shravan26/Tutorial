

function getBase64(file) {
   var reader = new FileReader();
   reader.readAsDataURL(file);
   reader.onload = function () {
   	console.log('reader onload0', reader.result)
     return reader.result;
   };
   reader.onerror = function (error) {
     console.log('Error: ', error);
   };
}
function validateEmail($email) {
  var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  return emailReg.test( $email );
}
function update(){
	var x = document.getElementById("frm1");
	var field = [];
	var i;
	var j = x.length;
	var flag = 0;
		document.getElementById("nameempty").innerHTML = '';
		document.getElementById("contactempty").innerHTML = '';
		document.getElementById("emailempty").innerHTML = '';
		for(i = 0 ; i < j ; i++){
		if(i == 0 && x.elements[i].value == ''){
			document.getElementById("nameempty").innerHTML = "This field is mandatory";
			flag = 1;
		}
		else if(i == 1 && x.elements[i].value == ''){
			document.getElementById("contactempty").innerHTML = "This field is mandatory";
			flag = 1;
		}
		else if(i == 2 && x.elements[i].value == ''){
			document.getElementById("emailempty").innerHTML = "This field is mandatory";
			flag = 1;
		}
		else{
			if (i == (j-1) ){
				if ( validateEmail(x.elements[i].value)){
					field [i]= " <td>"+ x.elements[i].value + "<button class='icon' onclick='makecall(this)'><i class='fa fa-phone'></i></button><button class='icon' onclick='makemessage(this)' ><i class='glyphicon glyphicon-envelope'></i></button></td>"; 
				}
				else{
					document.getElementById("emailempty").innerHTML =  "Email is not valid";
					flag = 1;
				}			
		}
		else{
			field [i]= " <td>" + x.elements[i].value + "</td>";
}
}
}
	if(flag == 0){
		// alert()
			var files = document.getElementById('file').files;
			if (files.length > 0) {
		 		console.log(files[0]);
		 		// var fileStr = getBase64(files[0])
		 		// console.log('fileSttr', fileStr)


					// function getBase64(file) {
					   var reader = new FileReader();
					   reader.readAsDataURL(files[0]);
					   reader.onload = function () {
					   	console.log('reader onload0', reader.result)
					     // return reader.result;
							field[0] = "<td><img src='"+reader.result+"' width='30px' height='30px' style='margin-left:10px ; margin-right: 10px' id='avatar'>"+x.elements[0].value+"</td>";
							console.log(field[0]);
							document.getElementById("ContactsTable").innerHTML = document.getElementById("ContactsTable").innerHTML + "<tr>"+field.toString()+"</tr>";
					   };
					   reader.onerror = function (error) {
					     console.log('Error: ', error);
					   };
					// }



  			}		/*function avatar(){
			document.getElementById('Submit').addEventListener('click', function() {
			var files = document.getElementById('file').files;
			//var linkname;
 			if (files.length > 0) {
		 	console.log(getBase64(files[0]));
  			}
  		});
		}*/
		// field[0] = "<td><img src='"+fileStr+"' width='30px' height='30px' style='margin-left:10px ; margin-right: 10px' id='avatar'>"+x.elements[0].value+"</td>";
		// console.log(field[0]);
		// document.getElementById("ContactsTable").innerHTML = document.getElementById("ContactsTable").innerHTML + "<tr>"+field.toString()+"</tr>";
	}

}
function makecall(element){
	var dt = new Date();
	var time = "<td>"+dt.getHours()+":"+dt.getMinutes()+":"+dt.getSeconds()+"</td>";
	var name = "<td>"+ document.getElementById("ContactsTable").rows[element.closest('tr').rowIndex].cells[0].innerHTML + "</td>";
	var contactnumber = "<td>"+ document.getElementById("ContactsTable").rows[element.closest('tr').rowIndex].cells[1].innerHTML + "</td>";
	document.getElementById("calllogtable").innerHTML = document.getElementById("calllogtable").innerHTML + "<tr>" + name + contactnumber + time + "</tr>";
}
function makemessage(element){
	var message = "<td>" + window.prompt("Enter the Message") + "</td>";
	var sentto = "<td>" + window.prompt("Enter the recepient's name") + "</td>";
	var sentby ="<td>" + document.getElementById("ContactsTable").rows[element.closest('tr').rowIndex].cells[0].innerHTML + "</td>";
	document.getElementById("messagetable").innerHTML = document.getElementById("messagetable").innerHTML + "<tr>" + sentby + sentto + message + "</tr>";
}
$(document).ready(function(){$("#Submit").hover(function(){
	$("#Submit").css({"width":"110px","height":"60px"})}
, function(){
	$("#Submit").css({"width":"100px","height":"50px"});
}
);
});

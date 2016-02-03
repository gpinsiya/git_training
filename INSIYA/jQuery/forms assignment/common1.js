$(document).ready(function()
{
	var msg="";
$( "#subbtn" ).on('click',function()  
{
	var msg1,msg;
 if ( $( "#text" ).val()==""||$( "#password" ).val()=="")
  {
	  //msg1.empty();
	  msg="";
	  if( $( "#text" ).val()=="")
		  msg="username is empty";
	  if($( "#password" ).val()=="")
		msg+="password is empty";
	  
  msg1='<div id="displayMsg" style="background-color:red;">'+msg+'</div>'
  $(".form").prepend(msg1);
	
   
  }
  else{
	  var name=$("#text").val();
 $(".display").append("Welcome !"+" "+name+'<br>');
 
  $(".display").append('username'+'<input type="text" id="text"/></br>');
  $(".display").append('password'+'<input type="password" id="password"/></br>');
  $(".display").append('<input type="button" value="click me" id="submit"/></br>');
  $(".form").css("display","none");
  $(".display").css("display","block");
  }
  $("#submit").on('click',function()
   {
	   alert("Hi !");
  });
	  
  
 
  
});
});  
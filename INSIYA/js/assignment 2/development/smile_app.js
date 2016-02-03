var prompt = prompt("Please enter your name", "");
//A prompt box appears where a user will enter his/her name.
if(prompt.length>0&& prompt.length!=null){
	alert("Hi !"+" "+prompt);
	//If user enters the name, then an alert box will be opened saying 'Hi! *person name*', and image will be replaced by happySmile.png.
	var happySmiley=document.getElementById("image");
	happySmiley.src="./images/happySmiley.png";
}
//If user does not enter the name,the prompt box will be closed and image sadSmiley will be as it is.
  
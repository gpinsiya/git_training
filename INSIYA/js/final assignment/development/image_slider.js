/***

	
	Created by:Insiya
	Date:23-01-2016

***/
// A function is made called image slider

function image_slider(){
	var image=image1.src;
	image1.src=image2.src;
	image2.src=image3.src;
	image3.src=image4.src;
	image4.src=image;
}
window.setInterval(image_slider,3000);//image fades in after 3 sec
//An image is stored in variable nd then it is swapped with the next one.
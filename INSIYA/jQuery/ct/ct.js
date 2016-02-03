$(document).ready(function()
{
  $(".dropdown-content").hide();
  $(".hover_effect").mouseover(function()
  {
	$(this).find(".dropdown-content").fadeIn(500);
	//console.log($(this).find(".dropdown-content"));
  // $(".dropdown-content").fadeIn(2000);
  });
 
   $(".hover_effect").mouseleave(function()
   {
    $(this).find(".dropdown-content").fadeOut(500);
   });
   
 });
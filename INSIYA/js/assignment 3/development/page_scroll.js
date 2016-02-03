/**
	
	Function:onScroll
	Created by:Insiya
	Date:22-01-2016
	
**/
document.onscroll = function onScroll(docHeight,bttBtn)
{
	var scrollTopValue = document.body.scrollTop,
		docHeight = document.body.scrollHeight/2;
		if(scrollTopValue > docHeight)
		{
		document.getElementById('js-btn').style.display = 'block';
		}
		if(scrollTopValue < docHeight)
		{
		document.getElementById('js-btn').style.display = 'none';
		}
};
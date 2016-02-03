$(document).ready(function()
{
	var w1;
	$("section .dataTables_scrollHead .simple-datatable").find("thead").each(function(index)
	{
		 w1=$(this);
		
	});
	
	$("section .dataTables_scrollBody .simple-datatable").find("tbody").each(function(index1)
	{
		$(this).find("td").each(function(index1)
		{
			width=w1.eq(index1).width();
			index1++;
			console.log(width);
		});
	});
});
	
	
	
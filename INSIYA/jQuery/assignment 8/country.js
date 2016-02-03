$(document).ready(function() {
			var value=$("country").val();
			console.log(value);
            $("select").on('change',function(){  
			$.post("state.php",{country:"India"},function(){
				
			});
});
});
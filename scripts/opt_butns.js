$(document).ready(function(){
	$("#convert_butn").click(function(){
		var input = document.getElementById("input1").value;

		if(input.length == 0){
			$("#conv_output").val("");
		}

		else{
			detect_type(input.trim());
		}
	})
})

function detect_type(input){
	var is_binary = true;

	for(var i = 0; i < input.length; ++i){
		if(input[i] != "1" && input[i] != "0" && input[i] != " "){
			is_binary = false;
		}
	}

	if(is_binary){
		$("#title_txt").text("Binary - Text");
		convert_to_text(input);
	}

	else{
		$("#title_txt").text("Text - Binary");
		convert_to_binary(input);
	}
}
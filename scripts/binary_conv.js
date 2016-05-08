function convert_to_binary(input){
	var bin_values = "";

	for(var i = 0; i < input.length; ++i){
		bin_value = input.charCodeAt(i).toString(2);
		
		if(bin_value.length != 8){
			range = 8 - bin_value.length;
			prepend_zero = "";

			for(var x = 0; x < range; ++x){
				prepend_zero += "0";
			}

			bin_values += prepend_zero + bin_value + " ";
		}

		else{
			bin_values += bin_value + " ";
		}
	}

	$("#conv_output").val(bin_values);
}


function convert_to_text(input){
	bin_values = input.split(" ");
	ascii_txt = "";

	for(var i = 0; i < bin_values.length; ++i){
		ascii_txt += String.fromCharCode(parseInt(bin_values[i], 2));
	}

	$("#conv_output").val(ascii_txt);
}
/**
 * sanitizes any string attribute of an element to remove any harmful attributes/tags 
 * and to turn <> tags into their repective html entity code
 */
module.exports.sanitizeInput = function(input){

	var sanitizer = require('sanitizer');
	var sanitizedInput = input;

	for(var key in input){

		if(input.hasOwnProperty(key)){

			if(typeof input[key] == 'string'){
				//sanitize string
				sanitizedInput[key] = sanitizer.sanitize(input[key]);
				sanitizedInput[key] = sanitizedInput[key].replace(/</g, '&lt;');
				sanitizedInput[key] = sanitizedInput[key].replace(/>/g, '&gt;');
			}
		}
	}

	return sanitizedInput;
}

var getWords = function(titles){

	//  Filter out punctuation/numbers, Return words array

	var words = [];
	
	titles.forEach(function(element){
		var string=element.replace(/[1234567890.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
		var newstring=string.split(" ");
		words.push(newstring);
	});

	return words;
}


module.exports = getWords;
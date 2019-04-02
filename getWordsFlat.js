
var getWordsFlat = function(words){

	//  Flatten the 2D words array using reduce, Return flat words array

	var wordsFlat = words.reduce(function(a,b){
		return a.concat(b);
	});

	return wordsFlat;
}


module.exports = getWordsFlat;
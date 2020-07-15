//Question 1
//Convert the list of names in array of object like:

var listOfNames = `Neeta sapkota
neha shiwakoti
Srijana Khatiwada 
Smrity Dhakal
Sami Chakradhar
Kirtee Maharjan
Trija Thebe
Sindhu Aryal
Kusum Ranjitkar
Elisha Bista
Rachana kafle
Barsha Maharjan
Pooja Gurung
Bisikha Subedi
Kritika Baral
Srijana Thulung`;
listOfNames = listOfNames.split('\n');

function result(array) {
	return array.map(function(value, index) {
		var obj = {};
        var name = value.split(' ');
        var nameCapitalized = name[0].charAt(0).toUpperCase() + name[0].slice(1)
        var lastCapitalized = name[1].charAt(0).toUpperCase() + name[1].slice(1)
	    obj['id'] = index + 1;
	    obj['firstName'] = nameCapitalized;
	    obj['lastName'] = lastCapitalized;
	    return obj;
	});
};

console.log(result(listOfNames));
console.log('\n\n')

//Question 2
//Given the result of the above problem, create a function which takes a character and prints the count of first names which starts with letter that letter and which donot start with given letter.

function output(array, letter) {
	var getArrayFromQ1 = result(array);
	var equalTo = getArrayFromQ1.filter(function(value) {
		return value.firstName[0] == letter.toUpperCase();
	});
	var startWith = equalTo.length;
	var startWithout = getArrayFromQ1.length - startWith;
	return letter + ': ' + startWith + ' and ' + startWithout;
};

console.log(output(listOfNames, 's'));
console.log(output(listOfNames, 'a'));

// 3

function nextResult(array) {
    a = result(array);
    var sum = a.reduce(function(acc, value) {
        
    )}
}
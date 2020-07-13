//1. Printing Star Pattern
function starPattern(n) {
	let output = '';
	for (let i = 0; i <= n; i++) {
		for (let j = n; j >= i; j--) {
			output = output.concat('*');
		}
		output = output.concat('\n');
	}
	return output;
};

console.log(starPattern(5));
console.log(' \n \n');

//2. Censor Words Longer Than Four Characters
function censorWord(str) {
let output='';
sent = str.split(' ');  //' ' creates space between 2 words and '' creates space between each letters
    for(var i = 0; i < sent.length; i++) {
        var count = sent[i].length;
        if (count  > 4) {
            output = output + '*'.repeat(count) + ' '; //The code is + *.5+ '' => The code is *****
        } 
        else {
                output = output + sent[i] + ' ';
        }
    }
    return output;
};

console.log(censorWord('The code is fourty'));
console.log(censorWord('Two plus three is five'));
console.log(censorWord('aaaa aaaaa 1234 12345'));
console.log(' \n \n');

//3. Converting Objects to Arrays
function objToArray(obj) {
	let keys = Object.keys(obj);  
	let count = keys.length;
	let arr = [];
	for (let i = 0; i < count; i++) {
		arr.push([ keys[i], obj[keys[i]] ]);  //eg: { a: 1, b: 2 }  :: keys[i] - a,b and obj[keys[i]] - 1,2
	}
	return arr;
}

console.log(objToArray({ a: 1, b: 2 }));
console.log(objToArray({ shrimp: 15, tots: 12 }));
console.log(objToArray({}));
console.log(' \n \n');

//4. Filter Repeating Character Strings
function identicalFilter(arr) {
    let output = [];
    for (var i = 0; i < arr.length; i++) {
      let repetition = new Set(arr[i]);
      if (repetition.size === 1) {
        output.push(arr[i]);
      }
    }
    return output;
  }

console.log(identicalFilter([ '88', '999', '22', '545', '133' ]));
console.log(identicalFilter([ 'xxxxo', 'oxo', 'xox', 'ooxxoo', 'oxo' ]));
console.log(' \n\nAnswer-4 : \n\n')

//5. Filter Repeating Character Strings
function keysAndValues(obj){
	let keys = Object.keys(obj);			
	let output = [];
	for (i = 0; i < keys.length; i++) {
		output[i] = obj[keys[i]];  			
	}
	return [ keys, output];
};

console.log( keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" }) ); 
console.log( keysAndValues({ a: 1, b: 2, c: 3 }) ); 
console.log( keysAndValues({ key1: true, key2: false, key3: undefined }) );


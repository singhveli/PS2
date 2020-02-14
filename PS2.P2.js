
/* Write a generator that is initialized with a sentence and that emits each word of the sentence in
 turn.
 Use the generator to print the words, one per line, of the string
 “All I know is something like a bird within her sang”.
 */

function* emit(str){

  const emit = str.split(/(\s+)/);
  let word = -1;
  let listLength = emit.length;
  while(listLength--){
      word++;
      yield emit[word];
  }
}

const emitted = str =>{

  let res = "";
	for (emit of emit(str)) {
		res += `${emit}\n`;
	}
	return res;
}

const str = 'All I know is something like a bird within her sang';
console.log(emitted(str));

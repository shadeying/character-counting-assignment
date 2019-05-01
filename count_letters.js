function countLetters(string){
  var object = {};
  var stringArray = string.split(" ").join("").split("");
  var count = 1;

  for(var i = 0; i < stringArray.length; i++){
    var letter = stringArray[i];
    for(var j = i + 1; j < stringArray.length; j++){
      object[letter] = count;
      if(letter === stringArray[j]){
        object[letter]++;
      }
    }
  }
  return object;
};

console.log(countLetters("lighthouse in the house"));
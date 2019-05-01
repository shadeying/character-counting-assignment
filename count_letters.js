function countLetters(string){
  var object = {};
  var stringArray = string.split(" ").join("").split("");

  for(var i = 0; i < stringArray.length; i++){
    var letter = stringArray[i];
    var count = 1;
    for(var j = i + 1; j < stringArray.length; j++){
      if(stringArray[j] === letter){
        stringArray.splice(j, 1);
        j--;
        count++;
      }
    }
    object[letter] = count;
  }
  return object;
};

console.log(countLetters("lighthouse in the house"));
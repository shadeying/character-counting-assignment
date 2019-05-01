function countLetters(string){
  var object = {};
  var stringArray = string.split(" ").join("").split("");
  // console.log(stringArray);

  for(var i = 0; i < stringArray.length; i++){
    var letter = stringArray[i];
    var count = 1;
    for(var j = i + 1; j < stringArray.length; j++){
      if(stringArray[j] === letter){
        stringArray.splice(j, 1);
        count++;
      }
    }
    console.log(count);
    object[letter] = count;
  }
  return object;
};

console.log(countLetters("lighthouse in the house"));
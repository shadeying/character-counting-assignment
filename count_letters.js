function countLetters(string){
  var object = {};
  var stringArray = string.split(" ").join("").split("");
  var count = 1;

  for(var i = 0; i < stringArray.length; i++){
    var letter = stringArray[i];
    for(var j = i + 1; j = stringArray.length; j++){
      object[stringArray[j]] = count;
      if(letter === stringArray[j]){
        object[stringArray[j]] = count + 1;
      }
    }
  }
  return object;
};

console.log(countLetters("Lighthouse Labs"));
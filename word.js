function WordCount(str) {
    var space = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === " ") {
            space += 1;
        }
        else if (str[i] === "[") {
            space -= 1;
        }
    }
    return space+1; 
}
console.log(WordCount("Kemarin Shopia pe[rgi ke mall."));
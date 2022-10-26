function sockMerchant(word) {

    let obj = {};
    let pairs  = 0

    for (let element of word) {
        obj[element] = obj[element] + 1 || 1;

        if(obj[element] % 2 === 0){
            pairs +=1;
        }
    }
    return pairs

}

console.log(sockMerchant([10, 20, 20, 10, 10, 30, 50 ,10, 20]));
console.log(sockMerchant([6, 5, 2, 3, 5, 2, 2, 1, 1, 5, 1, 3, 3 ,3 ,5]));
console.log(sockMerchant([1, 1, 3, 1, 2 ,1 ,3 ,3 ,3, 3]));

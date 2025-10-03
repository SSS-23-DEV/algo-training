function vowelIndices(word){
    let res = [];
    let iterWord = word.toLowerCase().split('');

    for(let i=0; i<iterWord.length; i+=1){
        if('aeiouy'.includes(iterWord[i])){
            res.push(i+1)
        }
    }
    return res;
};

console.log(vowelIndices('MMczHhoEnwJFxhSKswIwiTvU'));
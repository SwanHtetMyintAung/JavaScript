function duplicateEncode(word){
    let lowerCase = word.toLowerCase();
    let Obj = {} ;
    let str=[];
    //find which letter has how much repeated time
    for(let i=0;i<lowerCase.length;i++){
        let testWord = lowerCase[i];
        if([lowerCase[i]] in Obj){
            Obj[testWord] += 1;
        }else{
            Obj[testWord] = 1;
        }
    }
    for(let j=0;j<lowerCase.length;j++){
        if(Obj[lowerCase[j]] == 1){
            str.push('(')
        }else{
            str.push(')')
        }
    }
    return str.join('')
}
console.log(duplicateEncode("helloWorld"))
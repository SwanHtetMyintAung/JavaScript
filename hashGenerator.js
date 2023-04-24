function generateHashtag (str) {
    let newAry = str.trim().split(" ");
    let SecondAry = [];
    if(str.length == 0 || newAry[0] == ""){
        return false;
    }
    for(let i=0; i < newAry.length ; i++){
        if(i == 0){
                SecondAry[0] = "#";
        }
        SecondAry[i+1] = newAry[i].charAt(0).toUpperCase() + newAry[i].slice(1)
    }
    if(SecondAry.join('').length > 140 | SecondAry.join('').length == 0){
        return false
    }else{
        return SecondAry.join('')
    } 
  }
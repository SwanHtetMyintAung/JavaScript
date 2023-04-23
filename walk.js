function isValidWalk(walk) {
    if(walk.length != 10){
        return false;
    }
    let n =0, s=0 , w=0 , e=0 ;
    walk.forEach(dir => {
      switch(dir){
          case 'n':
          n++ ;
          break;
          case 's':
          s++ ;
          break;
          case 'w':
          w++;
          break;
          case 'e':
          e++ ;
          break;
      }
    })
    if(n == s && e == w){
      return true;
    }else{
      return false;
    }
  }
  console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']))
var countFlower = (flower, n) => {
    if(n == 0) return true;
    for(let i = 0; i < flower.length; i++) {
        if(flower[i] == 0 && flower[i + 1] != 1&& flower[i-1] != 1){
            flower[i] =1 ;
            n --;
        }
        if(n == 0 ) {
            return true;
        }

    }
     return false;     
}

console.log(countFlower([1,0,0,0,1],1))
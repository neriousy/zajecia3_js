function isHappyNumber(x){
    let value = parseInt(x);
    let newValue = 0;
    
    for(i = 0; i < 10; i++){
        if(value == 1){
            return true;
        }
        
        while(value >= 1){
            newValue += Math.pow((value%10), 2);    
            value = parseInt(value / 10);
            
        }
        value = newValue;
        newValue = 0;
    }

    return false;
     
}
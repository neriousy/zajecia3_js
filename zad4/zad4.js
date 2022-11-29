function sum(arr){
    let values = [...arr]
    let sumReturn = 0;
    for(i = 0; i < values.length; i++) {
        sumReturn += values[i];
    }
    return sumReturn;
}
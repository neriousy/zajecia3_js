function fibbonachi(a){
    let values = [];

    values.push(0);
    if(a == 1){
        return values;
    }

    values.push(1);
    if(a == 2){
        return values;
    }

    for(i = 2; i < a; i++){
        values.push(values[i-2] + values[i-1]);
    }
    
    return values;

}
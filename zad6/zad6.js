function palindrom(a){
    a = a.toLowerCase();
    for(i = 0; i < a.length / 2; i++){

        if(a[i] != a[a.length - 1 - i]){
            return false;
        }
    }

    return true;
}
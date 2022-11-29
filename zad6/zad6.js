function palindrom(a){
    let value = a.toLowerCase();

    b = a.split('').reverse().join('');

    return a == b;
}
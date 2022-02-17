//* 371. Sum of Two Integers
//!! study 
var getSum = function(a, b) {
    let carry;
    
    while(b) {
        carry = a & b;
        a ^= b;
        b = carry << 1;
    }
    
    return a;
};
// Q. 1 Program to find the factorial of a number

function factorial(num) {
    //if number is 0
    if(num==0){
        return 1;
    }

    // if number is positive
    else{
        return num*factorial(num-1);
    }
}

console.log(factorial(5));

//======================================================================
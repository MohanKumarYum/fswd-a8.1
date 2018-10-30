function isPrime(number) {

    var result = true;

    // Number greater than 1.
    if (number < 1)
        result = "false";

    // Check from 2 to n-1 
    for (var index = 2; index < number; index++) {
        if (number % index === 0)
            result = "false";
    }
    return result;
}
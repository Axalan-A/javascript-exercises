const fibonacci = function(index) {
    firstTerm = 0
    secondTerm = 1
    let fibonacciIndex
    if(typeof index !== 'number'){
        fibonacciIndex = parseInt(index)
    } else {
        fibonacciIndex = index
    }

    if(fibonacciIndex < 0) return "OOPS"

    if(index == 0){
        return 0
    } else {
        for(let i = 1; i < index; i++){
        let currTerm = firstTerm + secondTerm;
        firstTerm = secondTerm;
        secondTerm = currTermn
        }
    }
    return secondTerm
};

// Do not edit below this line
module.exports = fibonacci;

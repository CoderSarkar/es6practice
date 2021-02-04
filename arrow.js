// Multiple Ways to write a function



// function doubleIt(num){
//     return num * 2;
// }

// const doubleIt = function myfunc(num){
//     return num * 2;
// }


// arrow function

const doubleIt = num => num * 2; // single paramiter
const add = (x, y) => x + y;
const give5 = () => 5;
const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}

const result = add(50, 70)
const result2 = give5();
const result3 = doMath(20, 10);
console.log(result3)
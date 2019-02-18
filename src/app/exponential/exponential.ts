export function exponential(num1, num2){
    let result = 1;
    for (let index = 0; index < num2; index++) {
        result = result * num1;
    }
    return result;
}
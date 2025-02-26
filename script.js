const a1 = [1, 2, 3];
const a2 = ["A", "B", "C"];

const z = ["z1", "z2", ...a1, ...a2]; //spread operator ... inside array or object it will be a spread operator
// [1, 2, 3, "A", "B", "C"]

console.log(z);

// ... Rest operator = returns array, inside parameter, puts rest in a array

function sum(a, b, ...c) {
    return (a = 1), (b = 7), (c = [1, 3, 4, 5, 6, 5]);
}

// console.log(sum(1, 7, 1, 3, 4, 5, 6, 5));
// console.log(sum(1, 7, 1, 3));
// console.log(sum(1, 7, 1, 3));
// console.log(sum(1, 7));

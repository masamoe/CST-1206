function multiply(a, b) {
    return a * b;
}

function multiplyWithRest(...args) {
    let total = 1;
    for (let i = 0; i < args.length; i++) {
        total *= args[i];
    }
    return total;
}

function sumWithRest(...args) {
    let total = 0;
    for (let i = 0; i < args.length; i++) {
        total += args[i];
    }
    return total;
}

function averageWithRest(...args) {
    let total = 0;
    for (let i = 0; i < args.length; i++) {
        total += args[i];
    }
    return total / args.length;
}
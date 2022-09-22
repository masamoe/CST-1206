function arraySum(arr){
    let sum = 0;
    for (i in arr){
        sum+=arr[i];
    };
    console.log(sum);
};

function evenElements(arr, limit){
    for (i in arr){
        if (arr[i]%2==0 && arr[i] <= limit){
            console.log(arr[i]);
        }
    }
};

function containsY(strin){
    if (strin.includes("y") || strin.includes("Y")){
        console.log("Yes");
    }
};

function factorial(number){
    let factorl = 1;
    while (number != 0) {
        factorl *= number;
        number--;
    }
    console.log(factorl);
};

function avgGrade(num1, num2, num3, num4){
    let average = (num1+num2+num3+num4)/4;
    let grade = "F"
    if (average > 90) {
        grade = "A";
    } else if (average > 70 && average <= 90){
        grade = "B";
    } else if (average >= 50 && average <= 70){
        grade = "C"
    };
    console.log(`Grade = ${grade}`);
};

function stars(limit){
    for (let i = 0; i < limit; i++){
        let star = "*";
        for (let j = 0; j<i; j++){
            star += "*"
        }
        console.log(star);
    }
}

function starsReverse(limit){
    let iter = 0
    for (iter; iter < limit; iter++){
        let star = "*";
        for (let j = 0; j<iter; j++){
            star += "*"
        }
        console.log(star);
    }
    do {
        iter--
        let star = "";
        for (let j = 0; j < iter; j++){
            star += "*"
        }
        console.log(star);
    }
    while (iter > 1);
}


const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

arraySum(myArray);
evenElements(myArray, 8);
containsY("Yellow");
containsY("Hilly");
factorial(7);
avgGrade(40, 80, 90, 75);
stars(5);
starsReverse(5);
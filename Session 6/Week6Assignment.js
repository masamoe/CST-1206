//Question 1
let student = [
    {
        name: "Daniel",
        email: "daniel@gmail.com",
        marks: [80, 60, 50, 70, 95]
    },
    {
        name: "Mark",
        email: "mark@gmail.com",
        marks: [99, 40, 84, 72, 60]
    },
    {
        name: "Stacy",
        email: "stacy@gmail.com",
        marks: [8, 30, 11, 0, 20]
    },
    {
        name: "Geri",
        email: "geri@gmail.com",
        marks: [100, 99, 95, 85, 99]
    }
];

const studentWithHighestMarks = (array) => {
    let highestMark = 0;
    let studentWithHighestMarks = ""
    for (i in array) {
        let total = 0;
        for (j in array[i].marks) {
            total += array[i].marks[j];
        }
        array[i].total = total;
        if (array[i].total > highestMark) {
            highestMark = array[i].total;
            studentWithHighestMarks = array[i].name;
        }
    }
    return studentWithHighestMarks;
}

console.log(studentWithHighestMarks(student));

//Question 2
let array1 = [4, 5, 2, 1, 0];
let array2 = [2, 1, 0, 3, 7, 6, 4, 5, 10, 9];

const sortArray = (array) => {
    let temp = 0;
    for (i = 0; i < array.length; i++) {
        for (j = 0; j < array.length; j++) {
            if (array[i] < array[j]) {
                temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
    return array;
}

const missingNumber = (array, n) => {
    let missing = [];
    n--;
    for (i = 0; i < n; i++) {
        if (array[i] != i) {
            missing.push(i);
        }
    }
    return missing;
}

console.log(missingNumber(sortArray(array1), array1.length));
console.log(missingNumber(sortArray(array2), array2.length));

//Question 3


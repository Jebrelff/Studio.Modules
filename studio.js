// 1. Use code to print “Hello, World” to the screen.
console.log("Hello, World!");

// 2. Define, initialize, change, and use variables.
let value = 10;
console.log("Original value: ", value);

value = 100;
console.log("Updated value: ", value);

// 3. Convert the string '1234' into a number.
const str = '1234';
const number = parseInt(str, 10);
console.log("Number: ", number);

// 4. Construct a for loop to repeat a task 100 times.
for (let i = 0; i < 100; i++) {
  console.log("Task No.: ", i + 1);
}

// 5. Construct if/else if/else statements to decide which of three tasks to perform.
const option = 2;
if (option === 1) {
  console.log("Opting Task 1!");
} else if (option === 2) {
  console.log("Opting Task 2!");
} else {
  console.log("Opting Task 3!");
}

// 6. Build, modify, and access an array.
const arr = [1, 2, 3, 4, 5];
console.log("Original array: ", arr);

arr[0] = 6;
console.log("Modified array: ", arr);

// 7. Design and call a function.
function func() {
    console.log('called function func');
}

func();

// 8. Call one function from within another function.
function callFunctionFunc() {
    console.log('calling function func from callFunctionFunc')
    func();
}

callFunctionFunc();

// 9. Find and fix bugs in a segment of non-working code.
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [1, 2, 3, 4, 5];

// Non-working code
if (arr1 === arr2) {
    console.log('Non-working code: Arrays are equal!');
}

// Working code
if(JSON.stringify(arr1) === JSON.stringify(arr2)) {
  console.log('Working code: Arrays are equal!');
}
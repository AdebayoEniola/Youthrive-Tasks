// Function to calculate the area of a rectangle
function calculateArea(length, width) {
    return length * width;
}

// Function to reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Function to check if a number is even
function isEven(number) {
    return number % 2 === 0;
}

// Example usage:
console.log(calculateArea(5, 4)); // Output: 20
console.log(reverseString("hello")); // Output: "olleh"
console.log(isEven(6)); // Output: true
console.log(isEven(7)); // Output: false

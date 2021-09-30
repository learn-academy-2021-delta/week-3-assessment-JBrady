// ASSESSMENT 3: Coding practical questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.


// Adding a describe method that lists the name of the function
describe("fibonnaciSequence", () => {

  // Adding a test method that describes what a function does
  it("Takes in a number greater than 2 and returns an array that length containing the numbers of the Fibonacci sequence", () => {

    // Adding an expect method which calls on the fibonnaciSequence() function, followed by the .toEqual() matcher that checks the expected output of the function return.
    expect(fibonnaciSequence(6)).toEqual([1, 1, 2, 3, 5, 8])
    expect(fibonnaciSequence(10)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
  })
})

// Test fails with the ReferenceError: fibonnaciSequence is not defined

// Example input: 6
// Expected output: [1, 1, 2, 3, 5, 8]

// Example input: 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// b) Create the function that makes the test pass.

// A Fibonacci Sequence is the series of numbers. Each number in the sequence is the sum of the two numbers that precede it. The sequence goes: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, etc.

// Creating a function with a parameter
const fibSeq = (num) => {

  // Adding an if statement that says "if num is greater than 2, return an array that's exactly that number of elements"
  if (num > 2) {

    // Creating a variable to hold the 2 numbers used to calculate the next number in the sequence
    let myArray = [1,1]
    
    // Create a variable to store the new array
    let newArray = []

    // Using the higher-order function .map() to iterate through the array, and return a new array of the same length.
    // const newArray = myArray.map((value) => {
    //   return value.length
    // })

    // Actually, I'm going to use a for loop so I can see what's happening more clearly.
    for (let i = 0; i < arr.length; i++) {
      let sumOfTwoNumbers = myArray[i]
    }

  } else {
    return "num must be greater than 2"
  }

// Hitting another wall. Gotta move on to the next question.


  // --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

  // a) Create a test with expect statements for each of the variables provided.
  
  
  // Adding a describe method that lists the name of the function
  describe("oddNumbersLeastToGreatest", () => {

    // Adding a test method that describes what a function does
    it("Takes in an array and returns a new array of only odd numbers sorted from least to greatest.", () => {

      // Adding an expect method which calls on the oddNumbersLeastToGreatest() function, followed by the .toEqual() matcher that checks the expected output of the function return.
      expect(oddNumbersLeastToGreatest([4,9,0,"7",8,true,"hey",7,199,-9,false,"hola"])
      ).toEqual([-9, 7, 9, 199])
      expect(oddNumbersLeastToGreatest(["hello",7,23,-823,false,78,null,"67",6,"number"])
      ).toEqual([-823, 7, 23])
    })
  })

  // Test fails with ReferenceError: oddNumbersLeastToGreatest is not defined

  var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
  // Expected output: [-9, 7, 9, 199]

  var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
  // Expected output: [-823, 7, 23]

  // b) Create the function that makes the test pass.
  // Creating a function that takes in an array as a parameter and returns a new array of only odd numbers sorted from least to greatest.

  // Creating a function that takes in an array as a parameter
  const oddNumbersLeastToGreatest = ([]) => {

    // Variable to store the new array
    let newArray = []

    // Using the higher-order function .map() to iterate through the array, and return a new array of only odd numbers
    return array.map(value, index, array)
  }


  // --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

  // a) Create a test with expect statements for each of the variables provided.
  
  // Adding a describe method that lists the name of the function
  describe("accumulatingSum", () => {

    // Adding a test method that describes what a function does
    it("Takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.", () => {

      // Adding an expect method which calls on the accumulatingSum() function, followed by the .toEqual() matcher that checks the expected output of the function return.
      expect(accumulatingSum([2, 4, 45, 9])).toEqual([2, 6, 51, 60])
      expect(accumulatingSum([0, 7, -8, 12])).toEqual([0, 7, -1, 11])
      expect(accumulatingSum([])).toEqual([])
    })
  })

  // Test fails with ReferenceError: accumulatingSum is not defined

  var numbersToAdd1 = [2, 4, 45, 9]
  // Excpected output: [2, 6, 51, 60]

  var numbersToAdd2 = [0, 7, -8, 12]
  // Expected output: [0, 7, -1, 11]

  var numbersToAdd3 = []
  // Expected output: []

  // b) Create the function that makes the test pass.

  // Creating a function that takes in an array as a parameter
  const accumulatingSum = (array) => {

    // Using the .map() method to loop through the array and will return the empty array.
    return array.map((value) => value + i++)
  }
}


// I have to time-box this so I'm not sleep-deprived for the rest of the week, so this is my best shot at the moment. I worked on this for around 3 hours, I feel like I made a little progress. Some ideas are clicking a little better. I took a look at other classmates code to see if I understood how they did it. Some of it made sense, and some not. I think its just a matter of doing consistent practice every day for a few weeks.
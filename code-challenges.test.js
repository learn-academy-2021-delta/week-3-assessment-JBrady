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

// Creating the function fibonnaciSequence() with the parameter num
const fibonnaciSequence = (num) => {
    // from here, I'm not sure I'm understanding wtf is going on.
    // I have to create a function (which I just did on line 43) that "takes in a number (greater than 2) and returns an array that length". Here's my question. What length? Are we talking about the length of the number that will be input as the parameter? Because it could be 1, or 2 until you get to 100, at which point it will be 3. Then if you happen to put in 1000 as the parameter, it will be 4 numbers. shrug emoji.

    // Alright, I'm just going to create a variable called 'array' that holds a (spoiler alert) array.
    let array = [0,1,2,3] // Dont know how long to make this. 4 seems like a nice number.
    for(i = 4; i < num; i++) {

    }

    return array // I'm going to have to return something?
  }

  // This isnt working. I'm not sure I understand what's suppossed to be happening here.



// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.
// Adding a describe method that lists the name of the function
describe("oddNumbersLeastToGreatest", () => {

    // Adding a test method that describes what a function does
        it("Takes in an array and returns a new array of only odd numbers sorted from least to greatest.", () => {
      
          // Adding an expect method which calls on the oddNumbersLeastToGreatest() function, followed by the .toEqual() matcher that checks the expected output of the function return.
          expect(oddNumbersLeastToGreatest([4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"])).toEqual([-9, 7, 9, 199])
          expect(oddNumbersLeastToGreatest(["hello", 7, 23, -823, false, 78, null, "67", 6, "number"])).toEqual([-823, 7, 23])
        })
      })

// Test fails with ReferenceError: oddNumbersLeastToGreatest is not defined

var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]

var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]


// b) Create the function that makes the test pass.

// Lets create a function shall we
const oddNumbersLeastToGreatest = (array) => {
    // Creat a new array to hold the numbers
    let newArray = []

    // Thinking I have to use .map() function to iterate through
    return array.map(value, index, array)
    // Going to need conditionals
    // if statements
}
// Im not sure how to get inside the .map, to give the conditional statements 

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.
describe("accumulatingSum", () => {

    // Adding a test method that describes what a function does
        it("Takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.", () => {
      
          // Adding an expect method which calls on the oddNumbersLeastToGreatest() function, followed by the .toEqual() matcher that checks the expected output of the function return.
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

    // I think I need to loop through the array. I can use the .map() method for that.
    return array.map(value => value + i++)
}
// Not sure where else to go with this.

// I refuse to accept that I'm just not capable of understanding how to do these vanilla javascript probems. And yet... my brain keeps going there. Maybe its a time-management thing? It's literally 2:30am, so maybe not wait till Sunday to do these? Thats probably a good idea. I just know I'll be in a world of pain when I open this particular file each week. This is painful.

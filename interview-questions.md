# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.


1. What is `this` in JavaScript?

  Your answer: `this` is a keyword that tells JavaScript to look in the scope of the function in which its being called.  

  Researched answer: The keyword `this` represents the object that is executing the current function. For example, if you have a function that's part of an object (otherwise known as a method), `this` will be referencing that object itself. Otherwise, if that function is just a regular function (not part of an object), `this` will be representing the global object (the window object in web browsers). Here's a few examples to help clarify the concept...
  
```javascript
// Since play() and stop() are methods in the movie object, `this` will be referencing the movie object itself.
  const movie = {
    title: 'matrix',
    play() {
      console.log(this)
    }
  }

  movie.stop = function() {
    console.log(this)
  }

  // Returns the movie object in the console.
  movie.play()
  // Also returns the movie object in the console.
  movie.stop()


  // But since playMovie() is a function outside of the movie object, it will return the Window object in the console.
  function playMovie() {
    console.log(this)
  }
  
  // Returns the Window object.
  playMovie()

```



2. What is React? Why would you use it?

  Your answer: React is a JavaScript library that makes it much easier to build dynamic user interfaces.

  Researched answer: React is a JavaScript library open-sourced by Facebook in 2013. It's main purpose is to handle the frontend UI, which is why it's technically considered a library as opposed to a framework (like Angular which also handles some backend functionality). React has a huge ecosystem of tools (Next.js, Gatsby, Electron) that have been created to expand it's usefulness. It's fairly simple to learn, which allows for rapid development of applications. The React community is very active which gives React devs lots of resources and support.



3. Which lifecycle method is required in a React class component?

  Your answer: The constructor lifecycle method is required when using a React class component.

  Researched answer: The render() method is the only required lifecycled method for a React class component. Every component file calls the render() method by default in order for the JSX to be displayed. If there's no render() method, nothing is going to get rendered onto the page. 


4. What is JSX? What is one notable difference between HTML and JSX?

  Your answer: JSX is essensially HTML in JavaScript. More specifically, its how we're able to write HTML directly into React without having to use the script tag. JSX is almost identical to HTML with a few exceptions, like using className="" for CSS classes instead of class="".

  Researched answer: JSX is an acronym that stands for 'JavaScript Syntax Extension' or 'JavaScript XML'. It's what allows HTML to be rendered in a React application. One of the ways it does this is by keeping JavaScripts reserved keywords intact. Any HTML attribute that has the same name as a reserved JS keyword, will be slightly different in JSX. Web browsers don't support JSX though, so it transpiled with a compiler like Babel or Webpack. One of the main differences between HTML and JSX is that JSX needs (and can only return) a single parent element. A 'fragment' <> ... </> is what's recommended to be used, but any element will work.



5. What is yarn? What file(s) are modified in a React application when you run yarn?

  Your answer: Yarn is one of many node package managers available via the cloud. Yarn will download thousands of files and put them in a 'node_pakages' folder within your react app. It will also add two files called 'packages.json' and 'yarn.lock' to the root of your react app. 

  Researched answer: Yarn is a package manager created and introduced by Facebook in 2016 to solve a number of problems they were having with npm. Yarn uses the folder 'node_modules' to store all the packages that are necessary for a react app. It uses a lock file called yarn.lock to lock down versions of packages (dependancies) that are listed in an applications package.json file. This allows an application to work the same way on every machine, and helps alleviate the problem of "works on my machine" bugs.



6. STRETCH: What is an anonymous function in JavaScript?

  Your answer: An anonynous function is a function that you've created from scratch, as oppossed to a built-in method native to JavaScript.

  Researched answer: An anonymous function is a function without a name associated with it. They are often used as arguments passed to higher-order functions. It is not accessible after its initial creation and can only be accessed by a variable it's stored in.


## Looking Ahead: Terms for Next Week

1. Conditional rendering: Having something render on a page after a specific action or condition has been met.

2. Props: Reacts version of properties, or parameters.

3. JavaScript Events: Actions built into JavaScript that wait for the user to do something, then they will perfom that specific action.

4. Object oriented programming: A style of programming that involves organizing code into objects.

5. Ruby: A programming language that handles backend server-side tasks like routing, APIs, and page encryption. 

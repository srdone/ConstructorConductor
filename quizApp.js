//We're going to create the JS for a basic quiz application. 

//Let's think about the nature of this quiz app first. We're going to be creating lots of user objects, and we're
//also going to be creating lots of Question objects. Those would make two perfectly good constructors. 

//Create a User constructor that accepts name, email, password, and totalScore parameters and set them appropriatly

  //code here
  var User = function(name, email, password, totalScore) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.totalScore = totalScore;
  };


//Create a Question constructor that accepts title, answersArray, rightAnswer, and difficulty parameters

  //code here
  var Question = function(title, answersArray, rightAnswer, difficulty) {
    this.title = title;
    this.answersArray = answersArray;
    this.rightAnswer = rightAnswer;
    this.difficulty = difficulty;
  };


//Create a users Array which is going to hold all of our users.

  //code here
  var users = [];

//Let's say three people signed up for our service, create 3 instances of User and add each to the users Array

  //code here
  users.push(new User("Stephen", "srdone@gmail.com", "asdf", 0));
  users.push(new User("Fred", "fred@gmail.com", "asdflkje", 0));
  users.push(new User("Fanny", "fanny@gmail.com", "asde", 0));

//Create a questions Array which is going to hold all of our questions

  //code here
  var questions = [];


//Now, let's say we wanted to create a quiz about JavaScript. Create three instances of Question which contain the following data
var q1title = 'T/F: Inheritance is achieved in JavaScript through Prototypes?';
var q2title = 'T/F: JavaScript is just a scripting version of Java';
var q3title = "T/F: In Javascript, == doesn't check 'type' but just the value - where === checks type and value";
var tfarr = ["true", "false"]; // note that this can causes issues if we ever want to update this for only one question, as the objects are storing a reference to this. not a clopy
// we can fix the issue by calling tfarr.slice(0) when we pass it to the constructor
//Fill in the rest of the required data as you see appropriate.

  //code here
  questions.push(new Question(q1title, tfarr, "true", "medium"));
  questions.push(new Question(q2title, tfarr, "false", "easy"));
  questions.push(new Question(q3title, tfarr, "true", "medium"));

//Now push all of your instances of Question into the questions Array

  //code here

console.log('My users Array and my questions arrray are ...');
//Now loop console.log your users array and your questions array and verify that they're both holding the right data.

  //code here
  users.forEach(function(current) {
    console.log(current);
  });
  questions.forEach(function(current) {
    console.log(current);
  });

  // see: http://stackoverflow.com/questions/9639167/passing-console-log-as-a-parameter-to-foreach-doesnt-work
  // We can't do the following and expect just the objects to be logged
  // this is because the forEach function is passing three arguments to console.log:
  // the current element in the array
  // the array index
  // the entire array
  //
  // So - what we get with the below code is, for each element of the array,
  // the following logged to the console:
  // The current element, the array index of the current element, the entire array.
  // Yuck! Just use the above code.
  //var c = console.log.bind(console);
  //users.forEach(c);

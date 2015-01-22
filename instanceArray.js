/*
  Your 3 Users will be the following. 
    0) Tyler, tylermcginnis33@gmail.com, 'iLoveJS'
    1) Cahlan, cahlan@devmounta.in, 'iLoveHashtags'
    2) Lenny, lenny@theLenster.com, 'iLoveLentilSoup'
*/

var User = function(name, email, pw){
  this.name = name;
  this.email = email;
  this.pw = pw;
};

//Create an Array called 'users' that will store all our instances of User.

  //code here
  var users = [];

//Now create and push into your users array 3 seperate instances of User using the data from above in that exact order

  //code here
  users.push(new User("Tyler", "tylermcginnis33@gmail.com", "iLoveJS"));
  users.push(new User("Cahlan", "cahlan@devmounta.in", "iLoveHashtags"));
  users.push(new User("Lenny", "lenny@theLenster.com", "iLoveLentilSoup"));


console.log('Tyler\'s information is ');
//Console.log all of Tylers information
  User.prototype.getInfo = function(cb) {
    for (var key in this) {
      if (this.hasOwnProperty(key)) {
        cb(this[key]);
      }
    }
  };

  var byName = users.reduce(function(prev, current) {
    prev[current.name] = current;
    return prev;
  }, {});
  //code here
  byName.Tyler.getInfo(console.log);

console.log('Lenny\'s information is ');
//Now console.log all of Lennys information

  //code here
  byName.Lenny.getInfo(console.log);

//Now create another instance of User using your own information and then add that to your users array.

  //code here
  var me = new User("Stephen", "srdone@gmail.com", "hah");
  users.push(me);
  byName.Stephen = me;

console.log('All my users names are ');
//Now loop through your users Array and console.log every users name. 

  //code here
  for (var key in byName) {
    if (byName.hasOwnProperty(key)) {
      console.log(byName[key].name);
    }
  }

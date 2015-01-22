//Just like you can add methods to your own constructor, you can also add methods and properties to built in classes in JavaScript like Arrays and Objects.

//Add a reverse method to the String 'class' so that every instance of String can call reverse and reverse itself.
  
  //code here
  String.prototype.reverse = function() {
    var result = this.split('');
    for (var i = 0; i < result.length; i++) {
      result.splice(i, 0, result[result.length - 1]);
      result.pop();
    }
    result = result.join('');
    //note - we are returning a value because strings are immutable and we can't modify them in place
    return result;
  };

  var reversed = "I love to sing".reverse();
  console.log(reversed);

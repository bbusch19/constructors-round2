//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in the Constructor.

  var Person = function(name, age) {
      this.name = name;
      this.age = age;
  }


//Now create three instances of Person with data you make up

  var brian = new Person('Brian', 25);
  var brett = new Person('Brett', 25);
  var breiden = new Person('Breiden', 24);


//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.

  Person.prototype.sayName = function() {
      alert(this.name);
  }

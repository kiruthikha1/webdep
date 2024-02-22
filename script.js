// Define an object constructor
function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  // Add a method to the object prototype
  Person.prototype.sayHello = function() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  };
  
  // Function to handle button click event
  function createObject() {
    const name = prompt("Enter person's name:");
    const age = prompt("Enter person's age:");
  
    // Create a new Person object
    const person = new Person(name, age);
  
    // Display information in the output div
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = `
      <h2>Greeting:</h2>
      <p>${person.sayHello()}</p>
    `;
  }
  
  // Event listener for the button click
  const createObjectBtn = document.getElementById("createObjectBtn");
  createObjectBtn.addEventListener("click", createObject);
  
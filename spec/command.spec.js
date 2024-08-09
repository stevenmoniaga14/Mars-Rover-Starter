const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.

describe("Command class", function() {

  // Test 1
  test("throws error if command type is NOT passed into constructor as the first parameter", function () {
    expect(function() { new Command();}).toThrow(new Error('Command type required.'));
    });
    
    /* Or this 
    let instantationAttempt = function () {
    new Command();
    };
    let errorMessage = "Command type is required!";
    expect(instanntationAttempt).toThrowError(errorMessage); */
  
  // Test 2
  test("constructor sets command type", function () {
    const command = new Command ("MODE_CHANGE");
    expect(command.commandType).toEqual("MODE_CHANGE");
    /* checks that the constructor in the Command class correctly sets the commandType property in the new object. */
  });

  // Test 3
  test("constructor sets a value passed in as the 2nd argument", function () {
    const command = new Command ("MOVE", 100)
    expect(command.value).toEqual(100)
  });


});
const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.


describe("Rover class", function() {
  // Test 7
  test("constructor sets position and default values for mode and generatorWatts", function () {
    const rover = new Rover(21);
    // Checking for position
    expect(rover.position).toEqual(21);
    // Checking for mode
    expect(rover.mode).toEqual("NORMAL");
    expect(rover.generatorWatts).toEqual(110);
  });

  // Test 8
  test("response returned by receiveMessage contains the name of the message", function () {
    let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
    let message = new Message('Alert! Message!', commands); // expect
    let rover = new Rover(21);
    let response = rover.receiveMessage(message);
    expect(response.message).toEqual("Alert! Message!"); // expect
  });

  // Test 9
  test("response returned by receiveMessage includes two results if two commands are sent in the message", function () {
    let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
    let message = new Message('Alert! Message!', commands);
    let rover = new Rover(21);   
    let response = rover.receiveMessage(message);
    
    expect(response.results.length).toEqual(commands.length);
    });

    // Test 10
  test("responds correctly to the status check command", function() {
      let rover = new Rover(21);
      let commands = [new Command('STATUS_CHECK')];
      let message = new Message('Test status check command', commands);
      let response = rover.receiveMessage(message);
      // This statement expects all of the these values when pushed to the results 
      // array from the receiveMessage method
      expect(response.results[0].completed).toEqual(true);
      expect(response.results[0].roverStatus.mode).toEqual('NORMAL');
      expect(response.results[0].roverStatus.generatorWatts).toEqual(110);
      expect(response.results[0].roverStatus.position).toEqual(21);
    });

  // Test 11

  test("responds correctly to the mode change command", function () {
    let rover = new Rover(21);
    let commands = [new Command('MODE_CHANGE', 'LOW_POWER')];
    let message = new Message('Test change command', commands);
    let response = rover.receiveMessage(message);
    
    expect(response.results[0].completed).toEqual(true);
    
  });

  
  // Test 12
  test("responds with a false completed value when attempting to move in LOW_POWER mode", function () {
    let rover = new Rover(21); // Initial position
    let commands = [
      new Command('MODE_CHANGE', 'LOW_POWER'),
      new Command('MOVE', 102)
    ];
    let message = new Message('Test in LOW_POWER mode', commands);
    let response = rover.receiveMessage(message);
    // Access the result of the second command; MOVE
    expect(response.results[1].completed).toEqual(false);
    expect(rover.position).toEqual(21);
    });

  
  // Test 13
  test("responds with position for move command", function () {
    let rover = new Rover (21);
    let commands = [
      new Command("MOVE", 541)
    ]
    let message = new Message("Moving positions", commands);
    let response = rover.receiveMessage(message);
    expect(rover.position).toEqual(541);
    expect(response.results[0].completed).toEqual(true);
  });

  });


  




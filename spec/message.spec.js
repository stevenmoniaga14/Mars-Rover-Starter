const Message = require('../message.js');
const Command = require('../command.js');


// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.

describe("Message class", function() {
// Test 4

test("throws error if a name is NOT passed into the constructor as the first parameter", () => {
    expect(function() { new Message();}).toThrow(new Error('Name specification required.'));
});

// Test 5
test("constructor sets name", () => {
    let message = new Message('Alert! Message!');
    expect(message.name).toEqual('Alert! Message!');
    /* test confirms that the constructor in the Message class correctly sets the name property in a new message object. */
});

// Test 6
test("contains a commands array passed into the constructor as the 2nd argument", () => {
    let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
    // create, sets command property in a new message object; contains data passed in from Command class object
    let message = new Message('Alert! Message!', commands);
    expect(message.commands).toEqual(commands);
  });

});



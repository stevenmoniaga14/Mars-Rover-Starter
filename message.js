class Message {
   constructor(name, commands) {
    this.name = name;
       // Test 5 Validation
     if (!name) {
       throw Error("Name specification required."); // Test 4
     }
     this.commands = commands;
    // Test 6
   }
}

module.exports = Message;
class Command {
   constructor(commandType, value) {
     this.commandType = commandType; // Test 2 Validation
     if (!commandType) {
       throw Error("Command type required."); // Test 1 Validation
     }
     this.value = value; // Test 3 Validation
   }
 
 }
 
 module.exports = Command;
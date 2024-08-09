class Rover {
   constructor(position) {
      // Test 7
      this.position = position;
      this.mode = "NORMAL";
      this.generatorWatts = 110;
   }
   receiveMessage(message) {
    // results will return an array of object ; the response to the given command
     let results = [];
     for (let command of message.commands) { // loops through the commands array which is in Command class
      if (command.commandType === "MOVE") {
         /* when it iterates, it goes to next condition; if commands matches MOVE and if the current mode is "LOW POWER", results completed will be false!
         else position is set to default value that is passed */
         if (this.mode === 'LOW_POWER') {
            results.push({ completed: false }); // Cannot move in LOW_POWER mode
        } else {
            // if mode is not LOW_POWER; updates rover position to value specified from command if any and updates its result completed to true
            this.position = command.value;
            results.push({ completed: true });
        }
    } else if (command.commandType === 'STATUS_CHECK') {
        results.push({
               completed: true,
               roverStatus: {
               mode: this.mode,
               generatorWatts: this.generatorWatts,
               position: this.position
            }
        });
    } else if (command.commandType === 'MODE_CHANGE') {
      //   If commandType matches MODE_CHANGE, then rovers' mode equals to that value. It then gets pushed to the results
      this.mode = command.value;
        results.push({ completed: true });
    } else {
        results.push({ completed: false });
    }
}
return {
   // Returns properties
    message: message.name,
    results: results
};
}
}




module.exports = Rover;
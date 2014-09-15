// @ - Configure the game
requirejs.config({
  // @ - File paths
  "paths" : {
    
    // @ - Dependencies
    "crafty" : "dependencies/crafty",
    "bone"   : "dependencies/bone.io",
    "$"      : "dependencies/jquery",
    
    // @ - Main game file
    "game"   : "scripts/game"
  }
});

// @ - Start the game by requring the main game file
requirejs(["game"]);
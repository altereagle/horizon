// @ - Configure the game
requirejs.config({
  // @ - File paths
  "paths" : {
    
    // @ - Dependencies
    "crafty" : "dependencies/crafty",
    "bone"   : "dependencies/bone.io",
    "$"      : "dependencies/jquery",
    "_"      : "dependencies/underscore",
    
    // @ - Main game file
    "game"      : "scripts/game",
    "frontPage" : "components/frontPage",
    "Game"      : "components/Game"
  }
});

// @ - Start the game by requring the main game file
requirejs(["frontPage"]);
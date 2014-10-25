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
    
    // @ - Game utility
    "Game"      : "components/Game",
    
    // @ - Game entities
    "entities"  : "entities/index",
    
    // @ - Entity generator
    "generator" : "generator/index"

  }
});

// @ - Start the game by requring the main game file
requirejs(["main"]);
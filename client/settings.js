// @ - Configure the game
requirejs.config({
  "paths" : {
    
    // @ - Dependencies
    "crafty" : "dependencies/crafty",
    "game"   : "scripts/game"
  }
});

// @ - Start the game
requirejs(["game"]);
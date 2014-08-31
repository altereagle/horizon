// @ - Configure the game
requirejs.config({
  "paths" : {
    
    // @ - Dependencies
    "crafty" : "../dependencies/crafty"
    
  }
});

// @ - Start the game
requirejs(["game"]);
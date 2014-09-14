// @ - Configure the game
requirejs.config({
  "paths" : {
    
    // @ - Dependencies
    "crafty" : "dependencies/crafty",
    "game"   : "scripts/game",
    "bone"   : "dependencies/bone.io",
    "$"      : "dependencies/jquery"
  }
});

// @ - Start the game
requirejs(["game"]);
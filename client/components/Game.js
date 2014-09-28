// @ - Game resources
define(["$", "bone", "components/resources/pubSub"], function($, bone, pubSub){
  // @ - Create a game object to house game resources
  var Game = {
    $     : $,
    bone  : bone,
    stage : $("body"),
    pubSub: pubSub
  };
  
  // ! - Save to the window for debugging
  window.Game = Game;
  
  // @ - Return the game object
  return Game;
});
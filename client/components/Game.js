// @ - Game resources
define(["$", "bone", "components/resources/pubSub"], function($, bone, pubSub){
  // @ - Create a game object to house game resources
  var Game = {
    $      : $,
    bone   : bone,
    stage  : $("body"),
    pubSub : pubSub,
    render : function(page, view, behavior){
      console.debug( page, view)
      // @ - Get the elements for this view
      var elements = view.elements || [];
      
      // @ - Add the elements to the page
      for (var i = 0; i < elements.length; i++) {
        page.append(elements[i]);
      }
    }
  };
  
  // ! - Save to the window for debugging
  window.Game = Game;
  
  // @ - Return the game object
  return Game;
});
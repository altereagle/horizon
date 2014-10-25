// @ - This is a module for the gameboard
define(["Game",
        "components/gameboard/behavior",
        "components/gameboard/view",
       ], function(Game, behaviors, view){
  // @ - Load dependencies
  var $         = Game.$;
  var bone      = Game.bone;
         
  // @ - Create an element to contain game board elements
  var gameboard = $("<div></div>").attr("id", "gameboard")
    .appendTo( Game.stage );
      
  // @ - Render the page
  Game.render(gameboard, view);
});
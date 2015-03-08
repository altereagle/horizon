define(["Game"], function(Game){
  var bone = Game.bone;
  var $    = Game.$;
  
  console.log('test')
  return bone.view("#characters", {
    events: {
      'click #choose': 'chooseCharacter',
      chooseCaracter: function(){
        console.log('choose caracter')
      }
    }
  });
});

// @ - This is a module for characters
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
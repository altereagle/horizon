// @ - Main module to render game elements
define(["Game"], function(Game, behaviors){
  // @ - Load dependencies
  var $         = Game.$;
  var bone      = Game.bone;
         
  // @ - Create an element to contain front page elements
  var frontPage = $("<div></div>").attr("id", "frontPage")
    .appendTo( Game.stage );

  // @ - Create an element to contain character select elements
  var characters = $("<div></div>").attr("id", "characters")
    .hide()
    .appendTo( Game.stage );
      
  // @ - Render the front page
  require(["components/frontPage.view"], function(view){
    Game.render(frontPage, view);
    require(["components/frontPage.behavior"]);
  });
  
  // @ - Render the characters selection page
  require(["components/characters.view"], function(view){
    Game.render(characters, view);  
    require(["components/characters.behavior"]);
  });
  
  
});
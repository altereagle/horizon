// @ - This is a module for the front page of the game
define(["Game"], function(Game){
  // @ - Load dependencies
  var $         = Game.$;
  var bone      = Game.bone;
  
  // @ - Create an element to contain front page elements
  var frontPage = $("<div></div>");
  
  // @ - Add an id attribute to the element
  frontPage.attr("id", "frontPage");
  
  // @ - Add the front page element container to the body element
  frontPage.appendTo( Game.stage );
  
  // ! - TODO: Create a splash image
  var splashImage;
  
  // ! - TODO: Create a container for menu options
  var menu = $("<div></div>")
    .attr("id", "menu")
    .appendTo(frontPage);
  
    // ! - TODO: Create menu option constructor
  function MenuOption(option){
    option = option || {};
    var menuOption = $("<div></div>")
      .addClass("option")
      .html(option.text || "menuOption")
      .appendTo(menu);
  }
  
  // @ - New game option
  var newGame = new MenuOption({
    text: "Start Game"
  });
    
  // ! - TODO: Add menu options
  
  // @ - Create a bone view for user interactivity with the element
  bone.view("#frontPage", {
    events: {}
    // ! - TODO: Hide the splash when clicked
    // ! - TODO: Show the menu when the splash is clicked
    // ! - TODO: Show the game when "new game" is clicked
  });
  
});
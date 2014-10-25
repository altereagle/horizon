define(["Game"], function(Game){
  var bone = Game.bone;
  var $    = Game.$;
  
  return bone.view("#frontPage", {
    events: {
      'click .option#start': 'startGame',
      'click .option#quit' : 'quitGame'
    },
    
    // @ - Start the game
    startGame: function(){
      //  - Hide the front page
      $("#frontPage").fadeOut(function(){

        // @ - Load the character select screen
        $("#characters").fadeIn();  
      });
      
      
    },
    quitGame: function(){
      window.close();
    }
    // ! - TODO: Add hover sound to menu option
    // ! - TODO: Hide the splash when clicked
    // ! - TODO: Show the menu when the splash is clicked
    // ! - TODO: Show the game when "new game" is clicked
  });
});
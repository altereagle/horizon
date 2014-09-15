// @ - This is a module for the front page of the game
define(["bone", "$"], function(bone, $){
  // @ - Create an element to contain front page elements
  var frontPage = $("<div></div>");
  
  // @ - Add an id attribute to the element
  frontPage.attr("id", "frontPage");
  
  // @ - Add the front page element container to the body element
  frontPage.appendto( $("body") );
  
  // @ - Create a bone view for user interactivity with the element
  bone.view("#frontPage", {
    events: {}
  });
  
});
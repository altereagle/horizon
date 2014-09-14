define(["bone", "$"], function(bone, $){
  var frontPage = $("<div></div>");
  frontPage.attr("id", "frontPage");
  frontPage.appendto($("body"));
  bone.view("#frontPage", {
    events: {} 
  });
});
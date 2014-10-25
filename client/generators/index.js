// @ - Entity generator
define(["Game", "crafty"], function(Game, Crafty){

  return {
    
    // @ - Generates crafty sprites
    Sprite: function (options){
      options = options || {};
      var size   = options.size ||  128;
      var source = options.source || "images/sprite.png";
      var map    = options.map || {};

      return Crafty.sprite(size, source, map);
    }
  }
});
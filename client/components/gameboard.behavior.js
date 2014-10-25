// @ - Gameboard behavior
define(["Game", "crafty", "generator"], function(Game, Crafty, Generator){
  // @ - Dependencies
  var bone = Game.bone;
  var $    = Game.$;
  
  // @ - Gameboard
  var gameboard       = $("#gameboard");
  var gameboardWidth  = gameboard.width();
  var gameboardHeight = gameboard.height();
  
  // @ - Initialize gameboard
  Crafty.init(gameboardWidth, gameboardHeight, gameboard[0]);
  
  // ! - Refactoring
  // ! - Variables
  
  
  // ! - Constants
  
  // ! - TODO: Generate this sprite
	Crafty.sprite(128, "images/sprite.png", {
		grass: [0,0,1,1],
		stone: [1,0,1,1]
	});

  
	var iso = Crafty.isometric.size(128);
	var z = 0;
  
  // @ - Gameboard loop
	for(var i = 10; i >= 0; i--) {
		for(var y = 0; y < 10; y++) {
      
      // @ - Random number (either 1 or 0)
			var which = Crafty.math.randomInt(0,1);
      
      // @ - Random tile entitity of either grass or stone
			var tile = Crafty.e("2D, DOM, "+ (!which ? "grass" : "stone") +", Mouse")
      
      // ! - TODO: What?
		  .attr('z',i+1 * y+1)
      
      .areaMap(
        [64,0],
        [128,32],
        [128,96],
        [64,128],
        [0,96],
        [0,32]
      )
      
      // @ - Click event anywhere on the map
      .bind("Click", function(e) {
        console.log(e, this);
        
        this.destroy();
			})
      
      // @ - Mouse over event anywhere on the map
      .bind("MouseOver", function() {
				if(this.has("grass")) {
					this.sprite(0,1,1,1);
				} else {
					this.sprite(1,1,1,1);
				}
			})
      
      // @ - Mouse out event anywhere on the map
      .bind("MouseOut", function() {
				if(this.has("grass")) {
					this.sprite(0,0,1,1);
				} else {
					this.sprite(1,0,1,1);
				}
			});
			
			iso.place(i,y,0, tile);
		}
	}
	
	Crafty.addEvent(this, Crafty.stage.elem, "mousedown", function(e) {
		if(e.button > 1) return;
		var base = {x: e.clientX, y: e.clientY};

		function scroll(e) {
			var dx = base.x - e.clientX,
				dy = base.y - e.clientY;
				base = {x: e.clientX, y: e.clientY};
			Crafty.viewport.x -= dx;
			Crafty.viewport.y -= dy;
		};

		Crafty.addEvent(this, Crafty.stage.elem, "mousemove", scroll);
		Crafty.addEvent(this, Crafty.stage.elem, "mouseup", function() {
			Crafty.removeEvent(this, Crafty.stage.elem, "mousemove", scroll);
		});
	});
  
  return bone.view('#cr-stage', {
    events: {
      'click': 'myFunction'
    },
    myFunction: function(){
      console.log('body was clicked')
    }
  });
});
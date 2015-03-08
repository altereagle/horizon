define(["Game"], function(Game){
  var bone = Game.bone;
  var $    = Game.$;
  
  return bone.view("#characters", {
    events: {
      'click #choose': 'chooseCharacter',
      chooseCaracter: function(){
        console.log('choose caracter')
      }
    }
  });
});
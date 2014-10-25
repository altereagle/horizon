define(["Game"], function(Game){
  var $ = Game.$;
  return {
    elements : [
      
      // @ - Choose
      $("<div></div>").attr('id', 'choose')
        .addClass('selection')
        .html('Choose Character'),
      
      // @ - Customize
      $("<div></div>").attr('id', 'customize')
        .addClass('selection')
        .html('Customize Character'),
      
      // @ - Create
      $("<div></div>").attr('id', 'create')
        .addClass('selection')
        .html('Create Character'),
    ]
  }
});





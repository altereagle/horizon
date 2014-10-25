define(["Game"], function(Game){
  var $ = Game.$;
  return {
    elements : [
      // @ - Front page title
      $("<div></div>").attr('id', 'title')
        .html('Project Horizon'),
      
      // @ - Front page menu
      $("<div></div>").attr('id', 'menu')
        .append(
          $("<div></div>").attr('id', 'start')
            .addClass('option')
            .html('Start Game')
        )
        .append(
          $("<div></div>").attr('id', 'options')
            .addClass('option')
            .html('Options')
        )
        .append(
          $("<div></div>").attr('id', 'quit')
            .addClass('option')
            .html('Quit')
        )
    ]
  }
});





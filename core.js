/*CORE FUNCTIONS*/


function changeAppPage(gameScreen) {

    //the screen to goto
    var gameScreen;

    console.log("changeAppPage called with " + gameScreen + " as partial view");
    switch (gameScreen) {

    case 'examplePartial':

    $(".contentRoot").empty();
    //newView = gameScreen;
    getPartialView(gameScreen);


    break;


    } //close switch

} //close changeAppPage function



// Get content
// updated for myquest 5/1/19
function getPartialView (screen) {

  var contentLoaded
  //console.log('screen content injection for ' + screen)
  $.get('partialViews/' + screen + '.html', function (data) {
    // inject the content into the DOM
   $(".contentRoot").append(data);
    contentLoaded = true
    
  }) // end get




} // close getPartialView function


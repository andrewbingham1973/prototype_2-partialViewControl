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



/*
//Get content
function getPartialView(screen) {
  var contentLoaded ;
  console.log("screen content injection for "+screen);
  $.get('partialViews/'+screen+'.html', function(data) {
    //inject the content into the DOM
    $(".contentRoot").append(data);
    contentLoaded = true;

  }); //end get


} //close getPartialView function
*/


function getPartialView(screen) {



  var contentLoaded;

  console.log("screen content injection for " + screen);


  //Get HTML via a promise
  var myHeaders = new Headers();
  var myInit = {
    method: 'GET',
    headers: myHeaders,
    mode: 'cors',
    cache: 'default'
  };
  var myRequest = new Request('partialViews/' + screen + '.html', myInit);
  fetch(myRequest).then(function(response) {
    return response.text();
  }).then(function(data) {
    $(".contentRoot").append(data);
    contentLoaded = true;

  });





} //close getPartialView function

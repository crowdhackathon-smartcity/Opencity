// Initialize app
var myApp = new Framework7();


// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true
});

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");
    $$('#index-button-start').on('click', function (e) {
        $$('#index-button-stop').removeClass("disabled");
        $$('#index-button-start').addClass("disabled");
        navigator.geolocation.getCurrentPosition(onSuccessStart, onError);
    });
    $$('#index-button-stop').on('click', function (e) {
        $$('#index-button-stop').addClass("disabled");
        $$('#index-button-start').removeClass("disabled");
        navigator.geolocation.getCurrentPosition(onSuccessStop, onError);
    });
});


// Now we need to run the code that will be executed only for About page.

// Option 1. Using page callback for page (for "about" page in this case) (recommended way):
myApp.onPageInit('about', function (page) {
    // Do something here for "about" page

})

function exitFromApp()
        {
            console.log("in button");
            navigator.app.exitApp();
}

// Option 2. Using one 'pageInit' event handler for all pages:
$$(document).on('pageInit', function (e) {
    // Get page data from event data
    var page = e.detail.page;

    if (page.name === 'about') {
        // Following code will be executed for page with data-page attribute equal to "about"
        //myApp.alert('Here comes About page');
    }
})

// Option 2. Using live 'pageInit' event handlers for each page
$$(document).on('pageInit', '.page[data-page="about"]', function (e) {
    // Following code will be executed for page with data-page attribute equal to "about"
    //myApp.alert('Here comes About page');
})

$$(document).on('pageInit', '.page[data-page="about"]', function (e) {
    // Following code will be executed for page with data-page attribute equal to "about"
    //myApp.alert('Here comes About page');
    var timerVar = setInterval(countTimer, 1000);
    var totalSeconds = 0;
    function countTimer() {
        ++totalSeconds;
       var hour = Math.floor(totalSeconds /3600);
       var minute = Math.floor((totalSeconds - hour*3600)/60);
       var seconds = totalSeconds - (hour*3600 + minute*60);

       $$('.timer').innerHTML = hour + ":" + minute + ":" + seconds;
    }   
})

$$(document).on('pageInit', '.page[data-page="profile"]', function (e) {
    $$('.chip-label').on('click', function (e) {
        e.preventDefault();
        var chip = $$(this).parents('.chip');
            myApp.confirm('You won a free ticket for Acropolis museum. Token ID: ADFSDFS3234234234234','buSmiles', function () {
        });
    });

    $$('.chip-delete').on('click', function (e) {
        e.preventDefault();
        var chip = $$(this).parents('.chip');
            myApp.confirm('You won a free ticket for Acropolis museum. Token ID: ADFSDFS3234234234234','buSmiles', function () {
        });
    });
})


$$(document).on('pageInit', '.page[data-page="index"]', function (e) {
    $$('#index-button-start').on('click', function (e) {
        $$('#index-button-stop').removeClass("disabled");
        $$('#index-button-start').addClass("disabled");
        navigator.geolocation.getCurrentPosition(onSuccessStart, onError);
    });
    $$('#index-button-stop').on('click', function (e) {
        $$('#index-button-stop').addClass("disabled");
        $$('#index-button-start').removeClass("disabled");
        navigator.geolocation.getCurrentPosition(onSuccessStop, onError);
    });
})


$$(document).on('pageInit', '.page[data-page="exit"]', function (e) {
    navigator.app.exitApp();
})

/*GPS Functions*/

// onSuccess Callback
// This method accepts a Position object, which contains the
// current GPS coordinates
//
var onSuccessStart = function(position) {
    myApp.alert('Route started: '                                         + '<br>' +
          'Latitude: '          + position.coords.latitude          + '<br>' +
          'Longitude: '         + position.coords.longitude         + '<br>' +
          //'Altitude: '          + position.coords.altitude          + '\n' +
          //'Accuracy: '          + position.coords.accuracy          + '\n' +
          //'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
          //'Heading: '           + position.coords.heading           + '\n' +
          //'Speed: '             + position.coords.speed             + '\n' +
          'Timestamp: '         + position.timestamp                + '<br>',"buSmiles");
};

var onSuccessStop = function(position) {
    myApp.alert('Route stopped: '                                         + '<br>' +
          'Latitude: '          + position.coords.latitude          + '<br>' +
          'Longitude: '         + position.coords.longitude         + '<br>' +
          //'Altitude: '          + position.coords.altitude          + '\n' +
          //'Accuracy: '          + position.coords.accuracy          + '\n' +
          //'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
          //'Heading: '           + position.coords.heading           + '\n' +
          //'Speed: '             + position.coords.speed             + '\n' +
          'Timestamp: '         + position.timestamp                + '<br>',"buSmiles");
};

// onError Callback receives a PositionError object
//
function onError(error) {
    alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
}
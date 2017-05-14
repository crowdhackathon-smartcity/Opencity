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
        getOASARoute();
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


//vas Functions
// Starting and end points. IDs are the Bus Stop IDs
var startingPointID = "400052";
var endPointID = "400059";
var busline = "2045";



var responseText  = '[{"routed_x":"23.63272","routed_y":"37.93851","routed_order":"1"},{"routed_x":"23.6326","routed_y":"37.93851","routed_order":"2"},{"routed_x":"23.63233","routed_y":"37.93833","routed_order":"3"},{"routed_x":"23.63293","routed_y":"37.93608","routed_order":"4"},{"routed_x":"23.63307","routed_y":"37.93538","routed_order":"5"},{"routed_x":"23.63315","routed_y":"37.93525","routed_order":"6"},{"routed_x":"23.63345","routed_y":"37.93525","routed_order":"7"},{"routed_x":"23.64092","routed_y":"37.93647","routed_order":"8"},{"routed_x":"23.64162","routed_y":"37.93666","routed_order":"9"},{"routed_x":"23.64236","routed_y":"37.93751","routed_order":"10"},{"routed_x":"23.64252","routed_y":"37.93764","routed_order":"11"},{"routed_x":"23.64289","routed_y":"37.93816","routed_order":"12"},{"routed_x":"23.64384","routed_y":"37.93934","routed_order":"13"},{"routed_x":"23.64581","routed_y":"37.94159","routed_order":"14"},{"routed_x":"23.64747","routed_y":"37.94344","routed_order":"15"},{"routed_x":"23.64784","routed_y":"37.94389","routed_order":"16"},{"routed_x":"23.64919","routed_y":"37.94307","routed_order":"17"},{"routed_x":"23.6506","routed_y":"37.94235","routed_order":"18"},{"routed_x":"23.65098","routed_y":"37.94225","routed_order":"19"},{"routed_x":"23.65344","routed_y":"37.94498","routed_order":"20"},{"routed_x":"23.65358","routed_y":"37.94517","routed_order":"21"},{"routed_x":"23.65378","routed_y":"37.94537","routed_order":"22"},{"routed_x":"23.65486","routed_y":"37.9448","routed_order":"23"},{"routed_x":"23.65493","routed_y":"37.94473","routed_order":"24"},{"routed_x":"23.65501","routed_y":"37.94431","routed_order":"25"},{"routed_x":"23.65527","routed_y":"37.94399","routed_order":"26"},{"routed_x":"23.65554","routed_y":"37.94378","routed_order":"27"},{"routed_x":"23.65594","routed_y":"37.94362","routed_order":"28"},{"routed_x":"23.65684","routed_y":"37.9435","routed_order":"29"},{"routed_x":"23.6572","routed_y":"37.94341","routed_order":"30"},{"routed_x":"23.65964","routed_y":"37.94378","routed_order":"31"},{"routed_x":"23.66231","routed_y":"37.94425","routed_order":"32"},{"routed_x":"23.66426","routed_y":"37.94397","routed_order":"33"},{"routed_x":"23.6652","routed_y":"37.94393","routed_order":"34"},{"routed_x":"23.66569","routed_y":"37.94396","routed_order":"35"},{"routed_x":"23.66587","routed_y":"37.94414","routed_order":"36"},{"routed_x":"23.66616","routed_y":"37.94455","routed_order":"37"},{"routed_x":"23.66707","routed_y":"37.94465","routed_order":"38"},{"routed_x":"23.67236","routed_y":"37.94474","routed_order":"39"},{"routed_x":"23.67864","routed_y":"37.94434","routed_order":"40"},{"routed_x":"23.67962","routed_y":"37.94412","routed_order":"41"},{"routed_x":"23.68454","routed_y":"37.94269","routed_order":"42"},{"routed_x":"23.6854","routed_y":"37.9423","routed_order":"43"},{"routed_x":"23.68914","routed_y":"37.9403","routed_order":"44"},{"routed_x":"23.68981","routed_y":"37.93976","routed_order":"45"},{"routed_x":"23.69054","routed_y":"37.93833","routed_order":"46"},{"routed_x":"23.69119","routed_y":"37.9379","routed_order":"47"},{"routed_x":"23.69207","routed_y":"37.93758","routed_order":"48"},{"routed_x":"23.69296","routed_y":"37.93736","routed_order":"49"},{"routed_x":"23.69382","routed_y":"37.93702","routed_order":"50"},{"routed_x":"23.69446","routed_y":"37.93639","routed_order":"51"},{"routed_x":"23.69471","routed_y":"37.93559","routed_order":"52"},{"routed_x":"23.6947","routed_y":"37.93481","routed_order":"53"},{"routed_x":"23.69424","routed_y":"37.93417","routed_order":"54"},{"routed_x":"23.69366","routed_y":"37.93359","routed_order":"55"},{"routed_x":"23.69292","routed_y":"37.93307","routed_order":"56"},{"routed_x":"23.6924","routed_y":"37.93299","routed_order":"57"},{"routed_x":"23.69167","routed_y":"37.93303","routed_order":"58"},{"routed_x":"23.69083","routed_y":"37.93296","routed_order":"59"},{"routed_x":"23.69005","routed_y":"37.93255","routed_order":"60"},{"routed_x":"23.68911","routed_y":"37.93235","routed_order":"61"},{"routed_x":"23.68826","routed_y":"37.93208","routed_order":"62"},{"routed_x":"23.68756","routed_y":"37.93153","routed_order":"63"},{"routed_x":"23.68712","routed_y":"37.93084","routed_order":"64"},{"routed_x":"23.68686","routed_y":"37.93028","routed_order":"65"},{"routed_x":"23.6869","routed_y":"37.92949","routed_order":"66"},{"routed_x":"23.68732","routed_y":"37.92878","routed_order":"67"},{"routed_x":"23.68805","routed_y":"37.92825","routed_order":"68"},{"routed_x":"23.68879","routed_y":"37.92794","routed_order":"69"},{"routed_x":"23.68957","routed_y":"37.9275","routed_order":"70"},{"routed_x":"23.69047","routed_y":"37.9265","routed_order":"71"},{"routed_x":"23.692","routed_y":"37.92442","routed_order":"72"},{"routed_x":"23.69331","routed_y":"37.92317","routed_order":"73"},{"routed_x":"23.69411","routed_y":"37.92267","routed_order":"74"},{"routed_x":"23.69873","routed_y":"37.9206","routed_order":"75"},{"routed_x":"23.70016","routed_y":"37.91963","routed_order":"76"},{"routed_x":"23.70067","routed_y":"37.91902","routed_order":"77"},{"routed_x":"23.70106","routed_y":"37.91831","routed_order":"78"},{"routed_x":"23.70165","routed_y":"37.91761","routed_order":"79"},{"routed_x":"23.70246","routed_y":"37.91726","routed_order":"80"},{"routed_x":"23.70343","routed_y":"37.91709","routed_order":"81"},{"routed_x":"23.70436","routed_y":"37.91682","routed_order":"82"},{"routed_x":"23.70511","routed_y":"37.91638","routed_order":"83"},{"routed_x":"23.7086","routed_y":"37.91359","routed_order":"84"},{"routed_x":"23.70927","routed_y":"37.91249","routed_order":"85"},{"routed_x":"23.70989","routed_y":"37.91185","routed_order":"86"},{"routed_x":"23.71135","routed_y":"37.91066","routed_order":"87"},{"routed_x":"23.71217","routed_y":"37.91018","routed_order":"88"},{"routed_x":"23.71346","routed_y":"37.90959","routed_order":"89"},{"routed_x":"23.715","routed_y":"37.90865","routed_order":"90"},{"routed_x":"23.71679","routed_y":"37.90693","routed_order":"91"},{"routed_x":"23.7191","routed_y":"37.90412","routed_order":"92"},{"routed_x":"23.71955","routed_y":"37.90334","routed_order":"93"},{"routed_x":"23.71971","routed_y":"37.90186","routed_order":"94"},{"routed_x":"23.71969","routed_y":"37.90028","routed_order":"95"},{"routed_x":"23.71982","routed_y":"37.8995","routed_order":"96"},{"routed_x":"23.72161","routed_y":"37.89353","routed_order":"97"},{"routed_x":"23.72989","routed_y":"37.88073","routed_order":"98"},{"routed_x":"23.73128","routed_y":"37.87729","routed_order":"99"},{"routed_x":"23.73216","routed_y":"37.87586","routed_order":"100"},{"routed_x":"23.74839","routed_y":"37.86173","routed_order":"101"},{"routed_x":"23.75063","routed_y":"37.86022","routed_order":"102"},{"routed_x":"23.75158","routed_y":"37.85904","routed_order":"103"},{"routed_x":"23.75176","routed_y":"37.85756","routed_order":"104"},{"routed_x":"23.75163","routed_y":"37.85406","routed_order":"105"},{"routed_x":"23.75167","routed_y":"37.85355","routed_order":"106"},{"routed_x":"23.75326","routed_y":"37.84825","routed_order":"107"},{"routed_x":"23.75352","routed_y":"37.84763","routed_order":"108"},{"routed_x":"23.75364","routed_y":"37.84761","routed_order":"109"},{"routed_x":"23.76194","routed_y":"37.84838","routed_order":"110"},{"routed_x":"23.7639","routed_y":"37.8482","routed_order":"111"},{"routed_x":"23.76457","routed_y":"37.84794","routed_order":"112"},{"routed_x":"23.76466","routed_y":"37.84786","routed_order":"113"},{"routed_x":"23.76476","routed_y":"37.84772","routed_order":"114"},{"routed_x":"23.76505","routed_y":"37.84756","routed_order":"115"},{"routed_x":"23.76544","routed_y":"37.84689","routed_order":"116"},{"routed_x":"23.76545","routed_y":"37.84617","routed_order":"117"},{"routed_x":"23.76509","routed_y":"37.84542","routed_order":"118"},{"routed_x":"23.76457","routed_y":"37.84479","routed_order":"119"},{"routed_x":"23.76316","routed_y":"37.84374","routed_order":"120"},{"routed_x":"23.76282","routed_y":"37.84336","routed_order":"121"},{"routed_x":"23.76481","routed_y":"37.84168","routed_order":"122"},{"routed_x":"23.76496","routed_y":"37.84146","routed_order":"123"},{"routed_x":"23.76497","routed_y":"37.84122","routed_order":"124"},{"routed_x":"23.76223","routed_y":"37.83914","routed_order":"125"},{"routed_x":"23.76228","routed_y":"37.839","routed_order":"126"},{"routed_x":"23.7637","routed_y":"37.83783","routed_order":"127"},{"routed_x":"23.76452","routed_y":"37.83738","routed_order":"128"},{"routed_x":"23.76931","routed_y":"37.83578","routed_order":"129"}]';


var responseBusStops = '[{"StopCode":"10183","StopID":"25","StopDescr":"\u03a0\u0395\u0399\u03a1\u0391\u0399\u0391\u03a3","StopDescrEng":"PEIRAIAS","StopStreet":null,"StopStreetEng":null,"StopHeading":"93","StopLat":"37.9384348","StopLng":"23.6318845","RouteStopOrder":"1","StopType":"0","StopAmea":"0"},{"StopCode":"400191","StopID":"400191","StopDescr":"\u039a\u039b\u0395\u0399\u03a3\u039f\u0392\u0397\u03a3","StopDescrEng":"KLEISOVIS","StopStreet":"\u039a\u039b\u0395\u0399\u03a3\u039f\u0392\u0397\u03a3","StopStreetEng":null,"StopHeading":"165","StopLat":"37.9356272","StopLng":"23.6329434","RouteStopOrder":"2","StopType":"0","StopAmea":"0"},{"StopCode":"400050","StopID":"400050","StopDescr":"\u03a3\u039a\u0391\u039b\u0391\u039a\u0399\u0391","StopDescrEng":"SKALAKIA","StopStreet":"\u03a7\u0391\u03a4\u0396\u0397\u039a\u03a5\u03a1\u0399\u0391\u039a\u039f\u03a5","StopStreetEng":null,"StopHeading":"81","StopLat":"37.9355661","StopLng":"23.6356152","RouteStopOrder":"3","StopType":"0","StopAmea":"0"},{"StopCode":"400051","StopID":"400051","StopDescr":"\u0393\u039f\u03a5\u0392\u0391","StopDescrEng":"GOYVA","StopStreet":"\u03a7\u0391\u03a4\u0396\u0397\u039a\u03a5\u03a1\u0399\u0391\u039a\u039f\u03a5","StopStreetEng":null,"StopHeading":"80","StopLat":"37.9360625","StopLng":"23.6387536","RouteStopOrder":"4","StopType":"0","StopAmea":"0"},{"StopCode":"400201","StopID":"400201","StopDescr":"\u03a3\u03a7\u039f\u039b\u0395\u0399\u0391","StopDescrEng":"SCHOLEIA","StopStreet":"\u03a7\u0391\u03a4\u0396\u0397\u039a\u03a5\u03a1\u0399\u0391\u039a\u039f\u03a5","StopStreetEng":null,"StopHeading":"82","StopLat":"37.9364121","StopLng":"23.6410961","RouteStopOrder":"5","StopType":"0","StopAmea":"0"},{"StopCode":"400052","StopID":"400052","StopDescr":"\u0392\u03a1\u03a5\u03a9\u039d\u0397","StopDescrEng":"VRYONI","StopStreet":"\u039b\u0395\u03a9\u03a6.\u0397\u03a1\u03a9\u03a9\u039d \u03a0\u039f\u039b\u03a5\u03a4\u0395\u03a7\u039d\u0395\u0399\u039f\u03a5","StopStreetEng":null,"StopHeading":"29","StopLat":"37.9373711","StopLng":"23.6422636","RouteStopOrder":"6","StopType":"0","StopAmea":"0"},{"StopCode":"400023","StopID":"400023","StopDescr":"\u03a6\u0399\u039b\u0395\u039b\u039b\u0397\u039d\u03a9\u039d","StopDescrEng":"FILELLINON","StopStreet":"\u039b\u0395\u03a9\u03a6.\u0397\u03a1\u03a9\u03a9\u039d \u03a0\u039f\u039b\u03a5\u03a4\u0395\u03a7\u039d\u0395\u0399\u039f\u03a5","StopStreetEng":null,"StopHeading":"41","StopLat":"37.9386","StopLng":"23.6433046","RouteStopOrder":"7","StopType":"0","StopAmea":"0"},{"StopCode":"400054","StopID":"400054","StopDescr":"\u03a3\u039a\u039f\u03a5\u0396\u0395","StopDescrEng":"SKOYZE","StopStreet":"\u039b\u0395\u03a9\u03a6.\u0397\u03a1\u03a9\u03a9\u039d \u03a0\u039f\u039b\u03a5\u03a4\u0395\u03a7\u039d\u0395\u0399\u039f\u03a5","StopStreetEng":null,"StopHeading":"38","StopLat":"37.9395582","StopLng":"23.6442446","RouteStopOrder":"8","StopType":"0","StopAmea":"0"},{"StopCode":"400053","StopID":"400053","StopDescr":"\u03a4\u0395\u03a1\u03a8\u0399\u0398\u0395\u0391","StopDescrEng":"TERPSITHEA","StopStreet":"\u039b\u0395\u03a9\u03a6.\u0397\u03a1\u03a9\u03a9\u039d \u03a0\u039f\u039b\u03a5\u03a4\u0395\u03a7\u039d\u0395\u0399\u039f\u03a5","StopStreetEng":null,"StopHeading":"39","StopLat":"37.9405163","StopLng":"23.645139","RouteStopOrder":"9","StopType":"0","StopAmea":"0"},{"StopCode":"400080","StopID":"400080","StopDescr":"\u03a0\u039b.\u039a\u039f\u03a1\u0391\u0397","StopDescrEng":"PL.KORAI","StopStreet":"\u039b\u0395\u03a9\u03a6.\u0397\u03a1\u03a9\u03a9\u039d \u03a0\u039f\u039b\u03a5\u03a4\u0395\u03a7\u039d\u0395\u0399\u039f\u03a5","StopStreetEng":null,"StopHeading":"38","StopLat":"37.9415552","StopLng":"23.6459535","RouteStopOrder":"10","StopType":"0","StopAmea":"0"},{"StopCode":"400506","StopID":"400506","StopDescr":"\u0394\u0397\u039c\u039f\u03a4\u0399\u039a\u039f \u0398\u0395\u0391\u03a4\u03a1\u039f","StopDescrEng":"DIMOTIKO THEATRO","StopStreet":"\u03a4\u03a3\u0391\u039c\u0391\u0394\u039f\u03a5","StopStreetEng":null,"StopHeading":"129","StopLat":"37.9434546","StopLng":"23.648175","RouteStopOrder":"11","StopType":"0","StopAmea":"0"},{"StopCode":"400507","StopID":"400507","StopDescr":"\u039a\u039f\u03a5\u039d\u03a4\u039f\u03a5\u03a1\u0399\u03a9\u03a4\u039f\u03a5","StopDescrEng":"KOYNTOYRIOTOY","StopStreet":"\u03a4\u03a3\u0391\u039c\u0391\u0394\u039f\u03a5","StopStreetEng":null,"StopHeading":"125","StopLat":"37.9427197","StopLng":"23.6495784","RouteStopOrder":"12","StopType":"0","StopAmea":"0"},{"StopCode":"400058","StopID":"400058","StopDescr":"\u0392\u0395\u039d\u0399\u0396\u0395\u039b\u039f\u03a5","StopDescrEng":"VENIZELOY","StopStreet":"\u0393\u03a1.\u039b\u0391\u039c\u03a0\u03a1\u0391\u039a\u0397","StopStreetEng":null,"StopHeading":"42","StopLat":"37.9432677","StopLng":"23.6520113","RouteStopOrder":"13","StopType":"0","StopAmea":"0"},{"StopCode":"400059","StopID":"400059","StopDescr":"\u0395\u03a5\u0391\u0393\u0393\u0395\u039b\u0399\u03a3\u03a4\u03a1\u0399\u0391","StopDescrEng":"EVAGGELISTRIA","StopStreet":"\u0393\u03a1.\u039b\u0391\u039c\u03a0\u03a1\u0391\u039a\u0397","StopStreetEng":null,"StopHeading":"75","StopLat":"37.9451833","StopLng":"23.6536753","RouteStopOrder":"14","StopType":"0","StopAmea":"0"},{"StopCode":"400073","StopID":"400073","StopDescr":"\u03a4\u0396\u0391\u0392\u0395\u039b\u039b\u0391","StopDescrEng":"TZAVELLA","StopStreet":"\u03a4\u0396\u0391\u0392\u0395\u039b\u039b\u0391","StopStreetEng":null,"StopHeading":"96","StopLat":"37.9433903","StopLng":"23.6569387","RouteStopOrder":"15","StopType":"0","StopAmea":"0"},{"StopCode":"400323","StopID":"400323","StopDescr":"17\u03b7 \u03a3\u03a4\u0391\u03a3\u0397","StopDescrEng":"17\u03b7 STASI","StopStreet":"\u03a4\u0396\u0391\u0392\u0395\u039b\u039b\u0391","StopStreetEng":null,"StopHeading":"80","StopLat":"37.9439059","StopLng":"23.6606693","RouteStopOrder":"16","StopType":"0","StopAmea":"0"},{"StopCode":"400075","StopID":"400075","StopDescr":"\u0397\u03a3\u0391\u03a0 \u039d.\u03a6\u0391\u039b\u0397\u03a1\u039f\u03a5","StopDescrEng":"ISAP.N.FALIROY","StopStreet":"\u0395\u0398\u039d.\u039c\u0391\u039a\u0391\u03a1\u0399\u039f\u03a5","StopStreetEng":null,"StopHeading":"88","StopLat":"37.9445913","StopLng":"23.6671421","RouteStopOrder":"17","StopType":"0","StopAmea":"0"},{"StopCode":"400076","StopID":"400076","StopDescr":"\u0391\u039a\u03a4\u0391\u0399\u039f\u039d","StopDescrEng":"AKTAION","StopStreet":"\u0395\u0398\u039d.\u039c\u0391\u039a\u0391\u03a1\u0399\u039f\u03a5","StopStreetEng":null,"StopHeading":"87","StopLat":"37.9446474","StopLng":"23.6710797","RouteStopOrder":"18","StopType":"0","StopAmea":"0"},{"StopCode":"320021","StopID":"320021","StopDescr":"\u0393\u03a5\u039c\u039d\u0391\u03a3\u0399\u039f","StopDescrEng":"GIMNASIO","StopStreet":"\u039b\u0395\u03a9\u03a6.\u03a0\u039f\u03a3\u0395\u0399\u0394\u03a9\u039d\u039f\u03a3","StopStreetEng":null,"StopHeading":"92","StopLat":"37.944401","StopLng":"23.6764755","RouteStopOrder":"19","StopType":"0","StopAmea":"0"},{"StopCode":"320023","StopID":"320023","StopDescr":"\u039c\u0391\u03a1\u039a\u039f\u039c\u0399\u03a7\u0395\u039b\u0391\u039a\u0395\u0399\u039f","StopDescrEng":"MARKOMIXELAKIO","StopStreet":"\u039b\u0395\u03a9\u03a6.\u03a0\u039f\u03a3\u0395\u0399\u0394\u03a9\u039d\u039f\u03a3","StopStreetEng":null,"StopHeading":"106","StopLat":"37.9437099","StopLng":"23.6808147","RouteStopOrder":"20","StopType":"0","StopAmea":"0"},{"StopCode":"240011","StopID":"240011","StopDescr":"\u03a4\u0396\u0399\u03a4\u0396\u0399\u03a6\u0399\u0395\u03a3","StopDescrEng":"TZITZIFIES","StopStreet":"\u039b\u0395\u03a9\u03a6.\u03a0\u039f\u03a3\u0395\u0399\u0394\u03a9\u039d\u039f\u03a3","StopStreetEng":null,"StopHeading":"119","StopLat":"37.9418445","StopLng":"23.6862165","RouteStopOrder":"21","StopType":"0","StopAmea":"0"},{"StopCode":"380106","StopID":"380106","StopDescr":"\u0391\u0393.\u03a3\u039a\u0395\u03a0\u0397","StopDescrEng":"AG.SKEPI","StopStreet":"\u039b\u0395\u03a9\u03a6.\u03a0\u039f\u03a3\u0395\u0399\u0394\u03a9\u039d\u039f\u03a3","StopStreetEng":null,"StopHeading":"157","StopLat":"37.9339655","StopLng":"23.6938637","RouteStopOrder":"22","StopType":"0","StopAmea":"0"},{"StopCode":"380047","StopID":"380047","StopDescr":"\u03a6\u039f\u03a1\u039f\u03a3","StopDescrEng":"FOROS","StopStreet":"\u039b\u0395\u03a9\u03a6.\u03a0\u039f\u03a3\u0395\u0399\u0394\u03a9\u039d\u039f\u03a3","StopStreetEng":null,"StopHeading":"272","StopLat":"37.933095","StopLng":"23.691819","RouteStopOrder":"23","StopType":"0","StopAmea":"0"},{"StopCode":"380048","StopID":"380048","StopDescr":"\u039f\u03a5\u039b\u0395\u039d","StopDescrEng":"OYLEN","StopStreet":"\u039b\u0395\u03a9\u03a6.\u03a0\u039f\u03a3\u0395\u0399\u0394\u03a9\u039d\u039f\u03a3","StopStreetEng":null,"StopHeading":"202","StopLat":"37.9305221","StopLng":"23.6868116","RouteStopOrder":"24","StopType":"0","StopAmea":"0"},{"StopCode":"380049","StopID":"380049","StopDescr":"\u03a4\u03a1\u039f\u039a\u0391\u039d\u03a4\u0395\u03a1\u039f","StopDescrEng":"TROKANTERO","StopStreet":"\u039b\u0395\u03a9\u03a6.\u03a0\u039f\u03a3\u0395\u0399\u0394\u03a9\u039d\u039f\u03a3","StopStreetEng":null,"StopHeading":"111","StopLat":"37.9280643","StopLng":"23.6883493","RouteStopOrder":"25","StopType":"0","StopAmea":"0"},{"StopCode":"380050","StopID":"380050","StopDescr":"\u03a6\u039b\u039f\u0399\u03a3\u0392\u039f\u03a3","StopDescrEng":"FLOISVOS","StopStreet":"\u039b\u0395\u03a9\u03a6.\u03a0\u039f\u03a3\u0395\u0399\u0394\u03a9\u039d\u039f\u03a3","StopStreetEng":null,"StopHeading":"143","StopLat":"37.9240199","StopLng":"23.6921982","RouteStopOrder":"26","StopType":"0","StopAmea":"0"},{"StopCode":"380051","StopID":"380051","StopDescr":"\u03a0\u0391\u039b\u039c\u03a5\u03a1\u0391","StopDescrEng":"PALMYRA","StopStreet":"\u039b\u0395\u03a9\u03a6.\u03a0\u039f\u03a3\u0395\u0399\u0394\u03a9\u039d\u039f\u03a3","StopStreetEng":null,"StopHeading":"118","StopLat":"37.9228606","StopLng":"23.6934774","RouteStopOrder":"27","StopType":"0","StopAmea":"0"},{"StopCode":"380052","StopID":"380052","StopDescr":"\u039c\u03a0\u0391\u03a4\u0397\u03a3","StopDescrEng":"MPATIS","StopStreet":"\u039b\u0395\u03a9\u03a6.\u03a0\u039f\u03a3\u0395\u0399\u0394\u03a9\u039d\u039f\u03a3","StopStreetEng":null,"StopHeading":"114","StopLat":"37.9213368","StopLng":"23.6967263","RouteStopOrder":"28","StopType":"0","StopAmea":"0"},{"StopCode":"380054","StopID":"380054","StopDescr":"\u0395\u0394\u0395\u039c","StopDescrEng":"EDEM","StopStreet":"\u039b\u0395\u03a9\u03a6.\u03a0\u039f\u03a3\u0395\u0399\u0394\u03a9\u039d\u039f\u03a3","StopStreetEng":null,"StopHeading":"149","StopLat":"37.9184901","StopLng":"23.7007997","RouteStopOrder":"29","StopType":"0","StopAmea":"0"},{"StopCode":"80002","StopID":"080002","StopDescr":"1\u03b7 \u039a\u0391\u039b\u0391\u039c\u0391\u039a\u0399\u039f\u03a5","StopDescrEng":"1\u03b7 KALAMAKIOY","StopStreet":"\u039b\u0395\u03a9\u03a6.\u03a0\u039f\u03a3\u0395\u0399\u0394\u03a9\u039d\u039f\u03a3","StopStreetEng":null,"StopHeading":"127","StopLat":"37.9149634","StopLng":"23.7069119","RouteStopOrder":"30","StopType":"0","StopAmea":"0"},{"StopCode":"80003","StopID":"080003","StopDescr":"2\u03b7 \u039a\u0391\u039b\u0391\u039c\u0391\u039a\u0399\u039f\u03a5","StopDescrEng":"2\u03b7 KALAMAKIOY","StopStreet":"\u039b\u0395\u03a9\u03a6.\u03a0\u039f\u03a3\u0395\u0399\u0394\u03a9\u039d\u039f\u03a3","StopStreetEng":null,"StopHeading":"140","StopLat":"37.9127335","StopLng":"23.7090481","RouteStopOrder":"31","StopType":"0","StopAmea":"0"},{"StopCode":"80004","StopID":"080004","StopDescr":"3\u03b7 \u039a\u0391\u039b\u0391\u039c\u0391\u039a\u0399\u039f\u03a5","StopDescrEng":"3\u03b7 KALAMAKIOY","StopStreet":"\u039b\u0395\u03a9\u03a6.\u03a0\u039f\u03a3\u0395\u0399\u0394\u03a9\u039d\u039f\u03a3","StopStreetEng":null,"StopHeading":"115","StopLat":"37.9097863","StopLng":"23.7127454","RouteStopOrder":"32","StopType":"0","StopAmea":"0"},{"StopCode":"80005","StopID":"080005","StopDescr":"4\u03b7 \u039a\u0391\u039b\u0391\u039c\u0391\u039a\u0399\u039f\u03a5","StopDescrEng":"4\u03b7 KALAMAKIOY","StopStreet":"\u039b\u0395\u03a9\u03a6.\u03a0\u039f\u03a3\u0395\u0399\u0394\u03a9\u039d\u039f\u03a3","StopStreetEng":null,"StopHeading":"132","StopLat":"37.9077837","StopLng":"23.7157223","RouteStopOrder":"33","StopType":"0","StopAmea":"0"},{"StopCode":"80006","StopID":"080006","StopDescr":"5\u03b7 \u039a\u0391\u039b\u0391\u039c\u0391\u039a\u0399\u039f\u03a5","StopDescrEng":"5\u03b7 KALAMAKIOY","StopStreet":"\u039b\u0395\u03a9\u03a6.\u03a0\u039f\u03a3\u0395\u0399\u0394\u03a9\u039d\u039f\u03a3","StopStreetEng":null,"StopHeading":"143","StopLat":"37.9053825","StopLng":"23.7179383","RouteStopOrder":"34","StopType":"0","StopAmea":"0"},{"StopCode":"10781","StopID":"080043","StopDescr":"\u0391\u039b\u0399\u039c\u039f\u03a5","StopDescrEng":null,"StopStreet":"\u039b\u0395\u03a9\u03a6. \u03a0\u039f\u03a3\u0395\u0399\u0394\u03a9\u039d\u039f\u03a3","StopStreetEng":null,"StopHeading":null,"StopLat":"37.9035573","StopLng":"23.7193797","RouteStopOrder":"35","StopType":"0","StopAmea":"0"},{"StopCode":"590002","StopID":"590002","StopDescr":"1\u03b7 \u0391\u0393.\u039a\u039f\u03a3\u039c\u0391","StopDescrEng":"1\u03b7 AG.KOSMA","StopStreet":"\u039b\u0395\u03a9\u03a6.\u03a0\u039f\u03a3\u0395\u0399\u0394\u03a9\u039d\u039f\u03a3","StopStreetEng":null,"StopHeading":"163","StopLat":"37.8954752","StopLng":"23.720865","RouteStopOrder":"36","StopType":"0","StopAmea":"0"},{"StopCode":"590007","StopID":"590007","StopDescr":"2\u03b7 \u0391\u0393.\u039a\u039f\u03a3\u039c\u0391\u03a3","StopDescrEng":"2\u03b7 AG.KOSMAS","StopStreet":"\u039b\u0395\u03a9\u03a6.\u03a0\u039f\u03a3\u0395\u0399\u0394\u03a9\u039d\u039f\u03a3","StopStreetEng":null,"StopHeading":"146","StopLat":"37.8914598","StopLng":"23.7227226","RouteStopOrder":"37","StopType":"0","StopAmea":"0"},{"StopCode":"590008","StopID":"590008","StopDescr":"1\u03b7 \u0395\u039b\u039b\u0397\u039d\u0399\u039a\u039f\u03a5","StopDescrEng":"1\u03b7 ELLINIKOY","StopStreet":"\u039b\u0395\u03a9\u03a6.\u03a0\u039f\u03a3\u0395\u0399\u0394\u03a9\u039d\u039f\u03a3","StopStreetEng":null,"StopHeading":"146","StopLat":"37.8876711","StopLng":"23.7251705","RouteStopOrder":"38","StopType":"0","StopAmea":"0"},{"StopCode":"590009","StopID":"590009","StopDescr":"2\u03b7 \u0395\u039b\u039b\u0397\u039d\u0399\u039a\u039f\u03a5","StopDescrEng":"2ND ELLINIKOY","StopStreet":"\u039b\u0395\u03a9\u03a6.\u03a0\u039f\u03a3\u0395\u0399\u0394\u03a9\u039d\u039f\u03a3","StopStreetEng":null,"StopHeading":"146","StopLat":"37.8848454","StopLng":"23.7270801","RouteStopOrder":"39","StopType":"0","StopAmea":"0"},{"StopCode":"590011","StopID":"590011","StopDescr":"4\u03b7 \u0395\u039b\u039b\u0397\u039d\u0399\u039a\u039f\u03a5","StopDescrEng":"4\u03b7 ELLINIKOY","StopStreet":"\u039b\u0395\u03a9\u03a6.\u03a0\u039f\u03a3\u0395\u0399\u0394\u03a9\u039d\u039f\u03a3","StopStreetEng":null,"StopHeading":"150","StopLat":"37.8806966","StopLng":"23.7297563","RouteStopOrder":"40","StopType":"0","StopAmea":"0"},{"StopCode":"590057","StopID":"590057","StopDescr":"\u039a\u039f\u039b\u039b\u0395\u0393\u0399\u039f","StopDescrEng":"KOLLEGIO","StopStreet":"\u039b\u0395\u03a9\u03a6.\u03a0\u039f\u03a3\u0395\u0399\u0394\u03a9\u039d\u039f\u03a3","StopStreetEng":null,"StopHeading":"159","StopLat":"37.8775846","StopLng":"23.7310588","RouteStopOrder":"41","StopType":"0","StopAmea":"0"},{"StopCode":"160159","StopID":"160159","StopDescr":"\u0394\u0399\u039a\u0397\u0393\u039f\u03a1\u0399\u039a\u0391","StopDescrEng":"DIKIGORIKA","StopStreet":"\u039b\u0395\u03a9\u03a6.\u03a0\u039f\u03a3\u0395\u0399\u0394\u03a9\u039d\u039f\u03a3","StopStreetEng":null,"StopHeading":"133","StopLat":"37.8748285","StopLng":"23.7334163","RouteStopOrder":"42","StopType":"0","StopAmea":"0"},{"StopCode":"160160","StopID":"160160","StopDescr":"2\u03b7 \u0393\u039b\u03a5\u03a6\u0391\u0394\u0391\u03a3","StopDescrEng":"2\u03b7 GLYFADAS","StopStreet":"\u039b\u0395\u03a9\u03a6.\u03a0\u039f\u03a3\u0395\u0399\u0394\u03a9\u039d\u039f\u03a3","StopStreetEng":null,"StopHeading":"131","StopLat":"37.8725898","StopLng":"23.7359031","RouteStopOrder":"43","StopType":"0","StopAmea":"0"},{"StopCode":"160161","StopID":"160161","StopDescr":"3\u03b7 \u0393\u039b\u03a5\u03a6\u0391\u0394\u0391\u03a3","StopDescrEng":"3\u03b7 GLYFADAS","StopStreet":"\u039b\u0395\u03a9\u03a6.\u03a0\u039f\u03a3\u0395\u0399\u0394\u03a9\u039d\u039f\u03a3","StopStreetEng":null,"StopHeading":"132","StopLat":"37.8708908","StopLng":"23.7378761","RouteStopOrder":"44","StopType":"0","StopAmea":"0"},{"StopCode":"160163","StopID":"160163","StopDescr":"5\u03b7 \u0393\u039b\u03a5\u03a6\u0391\u0394\u0391\u03a3","StopDescrEng":"5\u03b7 GLYFADAS","StopStreet":"\u039b\u0395\u03a9\u03a6.\u03a0\u039f\u03a3\u0395\u0399\u0394\u03a9\u039d\u039f\u03a3","StopStreetEng":null,"StopHeading":"130","StopLat":"37.8669077","StopLng":"23.7422674","RouteStopOrder":"45","StopType":"0","StopAmea":"0"},{"StopCode":"160165","StopID":"160165","StopDescr":"\u03a0\u039b.\u0393\u039b\u03a5\u03a6\u0391\u0394\u0391\u03a3","StopDescrEng":"PL.GLYFADAS","StopStreet":"\u039b\u0395\u03a9\u03a6.\u03a0\u039f\u03a3\u0395\u0399\u0394\u03a9\u039d\u039f\u03a3","StopStreetEng":null,"StopHeading":"134","StopLat":"37.8632927","StopLng":"23.7462867","RouteStopOrder":"46","StopType":"0","StopAmea":"0"},{"StopCode":"160166","StopID":"160166","StopDescr":"\u0391\u039d\u03a4\u03a9\u039d\u039f\u03a0\u039f\u03a5\u039b\u039f\u03a5","StopDescrEng":"ANTONOPOYLOY","StopStreet":"\u039b\u0395\u03a9\u03a6.\u03a0\u039f\u03a3\u0395\u0399\u0394\u03a9\u039d\u039f\u03a3","StopStreetEng":null,"StopHeading":"136","StopLat":"37.8600129","StopLng":"23.750738","RouteStopOrder":"47","StopType":"0","StopAmea":"0"},{"StopCode":"160168","StopID":"160168","StopDescr":"\u0391\u03a3\u03a4\u0395\u03a1\u0399\u0391","StopDescrEng":"ASTERIA","StopStreet":"\u039b\u0395\u03a9\u03a6.\u03a0\u039f\u03a3\u0395\u0399\u0394\u03a9\u039d\u039f\u03a3","StopStreetEng":null,"StopHeading":"181","StopLat":"37.856608","StopLng":"23.7516703","RouteStopOrder":"48","StopType":"0","StopAmea":"0"},{"StopCode":"530001","StopID":"530001","StopDescr":"\u03a0\u0399\u039a\u03a0\u0391","StopDescrEng":"PIKPA","StopStreet":"\u039b\u0395\u03a9\u03a6.\u039a\u03a9\u039d.\u039a\u0391\u03a1\u0391\u039c\u0391\u039d\u039b\u0397","StopStreetEng":null,"StopHeading":"164","StopLat":"37.8533722","StopLng":"23.7516129","RouteStopOrder":"49","StopType":"0","StopAmea":"0"},{"StopCode":"530002","StopID":"530002","StopDescr":"\u0391 \u03a0\u039b\u0391\u0396 \u0392\u039f\u03a5\u039b\u0391\u03a3","StopDescrEng":"A PLAZ VOYLAS","StopStreet":"\u039b\u0395\u03a9\u03a6.\u039a\u03a9\u039d.\u039a\u0391\u03a1\u0391\u039c\u0391\u039d\u039b\u0397","StopStreetEng":null,"StopHeading":"164","StopLat":"37.8501653","StopLng":"23.7524648","RouteStopOrder":"50","StopType":"0","StopAmea":"0"},{"StopCode":"530020","StopID":"530020","StopDescr":"\u039d\u039f\u03a3\u039f\u039a\u039f\u039c\u0395\u0399\u039f","StopDescrEng":"NOSOKOMEIO","StopStreet":"\u039b\u0395\u03a9\u03a6.\u0392\u0391\u03a3.\u03a0\u0391\u03a5\u039b\u039f\u03a5","StopStreetEng":null,"StopHeading":"86","StopLat":"37.8476552","StopLng":"23.7546555","RouteStopOrder":"51","StopType":"0","StopAmea":"0"},{"StopCode":"530021","StopID":"530021","StopDescr":"\u0392\u0395\u039d\u0399\u0396\u0395\u039b\u039f\u03a5","StopDescrEng":"VENIZELOY","StopStreet":"\u0399\u03a0\u03a0\u039f\u039a\u03a1\u0391\u03a4\u039f\u03a5\u03a3","StopStreetEng":null,"StopHeading":"84","StopLat":"37.847988","StopLng":"23.7586781","RouteStopOrder":"52","StopType":"0","StopAmea":"0"},{"StopCode":"530022","StopID":"530022","StopDescr":"\u0393\u0391\u039b\u0397\u039d\u039f\u03a5","StopDescrEng":"GALINOY","StopStreet":"\u0399\u03a0\u03a0\u039f\u039a\u03a1\u0391\u03a4\u039f\u03a5\u03a3","StopStreetEng":null,"StopHeading":"94","StopLat":"37.8483102","StopLng":"23.761962","RouteStopOrder":"53","StopType":"0","StopAmea":"0"},{"StopCode":"530023","StopID":"530023","StopDescr":"\u03a3\u03a9\u039a\u03a1\u0391\u03a4\u039f\u03a5\u03a3","StopDescrEng":"SOKRATOYS","StopStreet":"\u0399\u03a0\u03a0\u039f\u039a\u03a1\u0391\u03a4\u039f\u03a5\u03a3","StopStreetEng":null,"StopHeading":"111","StopLat":"37.8480081","StopLng":"23.7641566","RouteStopOrder":"54","StopType":"0","StopAmea":"0"},{"StopCode":"530024","StopID":"530024","StopDescr":"\u039e\u0395\u039d\u039f\u03a6\u03a9\u039d\u03a4\u039f\u03a3","StopDescrEng":"XENOFONTOS","StopStreet":"\u0391\u0398\u0397\u039d\u0391\u03a3","StopStreetEng":null,"StopHeading":"219","StopLat":"37.8454409","StopLng":"23.7648922","RouteStopOrder":"55","StopType":"0","StopAmea":"0"},{"StopCode":"530025","StopID":"530025","StopDescr":"\u0391\u03a6\u03a1\u039f\u0394\u0399\u03a4\u0397\u03a3","StopDescrEng":"AFRODITIS","StopStreet":"\u039b\u0395\u03a9\u03a6.\u0392\u0391\u03a3.\u03a0\u0391\u03a5\u039b\u039f\u03a5","StopStreetEng":null,"StopHeading":"130","StopLat":"37.8430915","StopLng":"23.7630319","RouteStopOrder":"56","StopType":"0","StopAmea":"0"},{"StopCode":"530026","StopID":"530026","StopDescr":"\u03a0\u0391\u039b.\u03a4\u0395\u03a1\u039c\u0391","StopDescrEng":"PAL.TERMA","StopStreet":"\u0396\u0395\u03a6\u03a5\u03a1\u039f\u03a5","StopStreetEng":null,"StopHeading":"235","StopLat":"37.8412314","StopLng":"23.7647124","RouteStopOrder":"57","StopType":"0","StopAmea":"0"},{"StopCode":"530109","StopID":"530109","StopDescr":"\u039d\u0397\u03a1\u0395\u03a9\u03a3","StopDescrEng":"NIREOS","StopStreet":"\u0396\u0395\u03a6\u03a5\u03a1\u039f\u03a5","StopStreetEng":null,"StopHeading":"230","StopLat":"37.8397945","StopLng":"23.7627962","RouteStopOrder":"58","StopType":"0","StopAmea":"0"},{"StopCode":"530006","StopID":"530006","StopDescr":"\u0393\u0391\u039b\u0397\u039d\u0397","StopDescrEng":"GALINI","StopStreet":"\u039b\u0395\u03a9\u03a6.\u039a\u03a9\u039d.\u039a\u0391\u03a1\u0391\u039c\u0391\u039d\u039b\u0397","StopStreetEng":null,"StopHeading":"117","StopLat":"37.8374807","StopLng":"23.7640765","RouteStopOrder":"59","StopType":"0","StopAmea":"0"},{"StopCode":"530108","StopID":"530108","StopDescr":"\u03a4\u0395\u03a1\u039c\u0391 \u0391\u03a0\u039f\u0392\u0399\u0392\u0391\u03a3\u0397\u03a3","StopDescrEng":"TERMA APOVIVASIS","StopStreet":"\u03a0\u0391\u03a1\u0391\u0394.\u039b\u0395\u03a9\u03a6.\u039a\u03a9\u039d.\u039a\u0391\u03a1\u0391\u039c\u0391\u039d\u039b\u0397","StopStreetEng":null,"StopHeading":"132","StopLat":"37.8360241","StopLng":"23.7683401","RouteStopOrder":"60","StopType":"0","StopAmea":"0"},{"StopCode":"10360","StopID":"000155","StopDescr":"\u0392\u039f\u03a5\u039b\u0391","StopDescrEng":"VOULA","StopStreet":null,"StopStreetEng":null,"StopHeading":"108","StopLat":"37.835243","StopLng":"23.7693035","RouteStopOrder":"61","StopType":"0","StopAmea":"0"}]';

// Takes the coordinates of start and end point
parseOASA(responseBusStops);
// Finds ids for the itenary request
var startingPointItenary = findNearestPoint(responseText, startingPoint_lat, startingPoint_lng );
var endingPointItenary = findNearestPoint(responseText, endPoint_lat, endPoint_lng );
console.log("Start for Itenary: ", startingPointItenary, " End: ", endingPointItenary);

// Calculates the distance based on the itenary
var distanceCovered = calculateItenary(startingPointItenary, endingPointItenary, responseText);
console.log(distanceCovered);
console.log(calculateCarbonEmission(distanceCovered),"kg CO2 saved");

var xhr;
function getOASARoute(){
  xhr = new XMLHttpRequest();
  xhr.open('GET', "http://telematics.oasa.gr/api/?act=webRouteDetails&p1="+busline);
  xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
  xhr.setRequestHeader('Content-type', 'application/ecmascript');

  xhr.setRequestHeader('Accept', 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8');

  xhr.send();
  xhr.addEventListener("readystatechange", processRequest, false);
}

function processRequest(e) {
  if (xhr.readyState == 4 && xhr.status == 200) {
      responseText = xhr.response;
      console.log(responseText);
    }
}

function getOASABusStops(){
  xhr = new XMLHttpRequest();
  xhr.open('GET', "http://telematics.oasa.gr/api/?act=webGetStops&p1="+busline);
  xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
  xhr.setRequestHeader('Content-type', 'application/ecmascript');

  xhr.setRequestHeader('Accept', 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8');

  xhr.send();
  xhr.addEventListener("readystatechange", processRequest2, false);
}

function processRequest2(e) {
  if (xhr.readyState == 4 && xhr.status == 200) {
      responseBusStops = response;
    }
}

function parseOASA(response){

  var obj = JSON.parse(response);
  for (i=0; i<obj.length; i++)
  {
    if (obj[i].StopID == startingPointID){
      startingPoint_lat = obj[i].StopLat;
      startingPoint_lng = obj[i].StopLng;
    }

    if (obj[i].StopID == endPointID){
      endPoint_lat = obj[i].StopLat;
      endPoint_lng = obj[i].StopLng;
    }

  }
}

function findNearestPoint(response, lat, lng){
  var itenaryObj = JSON.parse(response);
  var finalDistance = 10;
  var startItenaryPoint = 0;
  for (i=0; i<itenaryObj.length; i++){
    var distance = calculateDistanceBetweenTwoPoints(itenaryObj[i].routed_y, itenaryObj[i].routed_x, lat, lng);
    if (finalDistance>distance){
      finalDistance = distance;
      startItenaryPoint = i;
    }
  }
  console.log(finalDistance, ", ", startItenaryPoint);
  return startItenaryPoint;
}

function calculateItenary(start, end, response){
  var objRoute = JSON.parse(response);
  var distance = 0.0;
  for (i=start; i<end-1; i++){
    distance = distance + calculateDistanceBetweenTwoPoints(objRoute[i].routed_y, objRoute[i].routed_x, objRoute[i+1].routed_y, objRoute[i+1].routed_x);
  }
  return distance;
}


function calculateDistanceBetweenTwoPoints(lat1, lng1, lat2, lng2)
{
  var p1 = new google.maps.LatLng(lat1, lng1);
  var p2 = new google.maps.LatLng(lat2, lng2);
  return parseFloat((google.maps.geometry.spherical.computeDistanceBetween(p1, p2) / 1000).toFixed(2));
}

function determineLoadOnPoint(){
  // check if GPS point is near a bus stop
  var currentCord = new google.maps.LatLng(37.93816, 23.64289);
  var busStopCord = new google.maps.LatLng(37.93851, 23.6326);
  var distance_from_location =  google.maps.geometry.spherical.computeDistanceBetween(currentCord, busStopCord);
  console.log(distance_from_location);
  if (distance_from_location < 100){ // Person spotted on the bus stop


  }

}

function calculateCarbonEmission(klm){
  // mean emission 138 / 100 km
  return parseFloat(klm) * 1.38;

}
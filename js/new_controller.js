// Note: This example requires that you consent to location sharing when
// prompted by your browser. If you see the error "The Geolocation service
// failed.", it means you probably did not give permission for the browser to
// locate you.
console.log('hej')
var map, infoWindow;
var KTH = {lat: 59.3498092, lng: 18.0684758};
var SABBE = {lat: 57.3498092, lng: 15.0684758};
var KARRO = {lat: 58.3498092, lng: 18.0684758};
var loc = KTH;
var zoomRate = 17;
var currentState = 'CENTER';

var pos = {lat: 42.3498092, lng: 18.0684758};
var marker;



function ZoomIn(controlDiv, map) {

      // Set CSS for the control border.
      var controlUI = document.createElement('div');
      controlUI.style.backgroundColor = '#fff';
      controlUI.style.border = '2px solid #fff';
      controlUI.style.borderRadius = '3px';
      controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
      controlUI.style.cursor = 'pointer';
      controlUI.style.marginBottom = '22px';
      controlUI.style.textAlign = 'center';
      controlUI.title = 'Click to zoom!';
      controlDiv.appendChild(controlUI);

      // Set CSS for the control interior.
      var controlText = document.createElement('div');
      controlText.style.color = 'rgb(25,25,25)';
      controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
      controlText.style.fontSize = '16px';
      controlText.style.lineHeight = '38px';
      controlText.style.paddingLeft = '5px';
      controlText.style.paddingRight = '5px';
      controlText.innerHTML = '+';
      controlUI.appendChild(controlText);

      // Setup the click event listeners: simply set the map to Chicago.
      controlUI.addEventListener('click', function() {
        zoomRate = map.getZoom() + 1;
        initMap(map);
      });

    }

    function ZoomOut(controlDiv, map) {

      // Set CSS for the control border.
      var controlUI = document.createElement('div');
      controlUI.style.backgroundColor = '#fff';
      controlUI.style.border = '2px solid #fff';
      controlUI.style.borderRadius = '3px';
      controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
      controlUI.style.cursor = 'pointer';
      controlUI.style.marginBottom = '22px';
      controlUI.style.textAlign = 'center';
      controlUI.title = 'Click to zoom!';
      controlDiv.appendChild(controlUI);

      // Set CSS for the control interior.
      var controlText = document.createElement('div');
      controlText.style.color = 'rgb(25,25,25)';
      controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
      controlText.style.fontSize = '16px';
      controlText.style.lineHeight = '38px';
      controlText.style.paddingLeft = '5px';
      controlText.style.paddingRight = '5px';
      controlText.innerHTML = '-';
      controlUI.appendChild(controlText);

      // Setup the click event listeners: simply set the map to Chicago.
      controlUI.addEventListener('click', function() {
        zoomRate = map.getZoom() - 1;
        initMap(map);
      });

    }

    function PanRight(controlDiv, map) {

      // Set CSS for the control border.
      var controlUI = document.createElement('div');
      controlUI.style.backgroundColor = '#fff';
      controlUI.style.border = '2px solid #fff';
      controlUI.style.borderRadius = '3px';
      controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
      controlUI.style.cursor = 'pointer';
      controlUI.style.marginBottom = '22px';
      controlUI.style.textAlign = 'center';
      controlUI.title = 'Click to zoom!';
      controlDiv.appendChild(controlUI);

      // Set CSS for the control interior.
      var controlText = document.createElement('div');
      controlText.style.color = 'rgb(25,25,25)';
      controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
      controlText.style.fontSize = '16px';
      controlText.style.lineHeight = '38px';
      controlText.style.paddingLeft = '5px';
      controlText.style.paddingRight = '5px';
      controlText.innerHTML = '>';
      controlUI.appendChild(controlText);

      // Setup the click event listeners: simply set the map to Chicago.
      controlUI.addEventListener('click', function() {
        KTH.lng = KTH.lng+0.002;
        console.log(KTH.lng,map.getCenter())

        initMap(map)
      });

    }



    function PanLeft(controlDiv, map) {

      // Set CSS for the control border.
      var controlUI = document.createElement('div');
      controlUI.style.backgroundColor = '#fff';
      controlUI.style.border = '2px solid #fff';
      controlUI.style.borderRadius = '3px';
      controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
      controlUI.style.cursor = 'pointer';
      controlUI.style.marginBottom = '22px';
      controlUI.style.textAlign = 'center';
      controlUI.title = 'Click to zoom!';
      controlDiv.appendChild(controlUI);

      // Set CSS for the control interior.
      var controlText = document.createElement('div');
      controlText.style.color = 'rgb(25,25,25)';
      controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
      controlText.style.fontSize = '16px';
      controlText.style.lineHeight = '38px';
      controlText.style.paddingLeft = '5px';
      controlText.style.paddingRight = '5px';
      controlText.innerHTML = '<';
      controlUI.appendChild(controlText);

      // Setup the click event listeners: simply set the map to Chicago.
      controlUI.addEventListener('click', function() {
        KTH.lng = KTH.lng-0.002;
        console.log(KTH.lng,map.getCenter())

        initMap(map)
      });

    }

    function PanUp(controlDiv, map) {

      // Set CSS for the control border.
      var controlUI = document.createElement('div');
      controlUI.style.backgroundColor = '#fff';
      controlUI.style.border = '2px solid #fff';
      controlUI.style.borderRadius = '3px';
      controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
      controlUI.style.cursor = 'pointer';
      controlUI.style.marginBottom = '22px';
      controlUI.style.textAlign = 'center';
      controlUI.title = 'Click to zoom!';
      controlDiv.appendChild(controlUI);

      // Set CSS for the control interior.
      var controlText = document.createElement('div');
      controlText.style.color = 'rgb(25,25,25)';
      controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
      controlText.style.fontSize = '16px';
      controlText.style.lineHeight = '38px';
      controlText.style.paddingLeft = '5px';
      controlText.style.paddingRight = '5px';
      controlText.innerHTML = '^';
      controlUI.appendChild(controlText);

      // Setup the click event listeners: simply set the map to Chicago.
      controlUI.addEventListener('click', function() {
        KTH.lat = KTH.lat+0.001;
        console.log(KTH.lng,map.getCenter())

        initMap(map)
      });

    }

    function PanDown(controlDiv, map) {

      // Set CSS for the control border.
      var controlUI = document.createElement('div');
      controlUI.style.backgroundColor = '#fff';
      controlUI.style.border = '2px solid #fff';
      controlUI.style.borderRadius = '3px';
      controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
      controlUI.style.cursor = 'pointer';
      controlUI.style.marginBottom = '22px';
      controlUI.style.textAlign = 'center';
      controlUI.title = 'Click to zoom!';
      controlDiv.appendChild(controlUI);

      // Set CSS for the control interior.
      var controlText = document.createElement('div');
      controlText.style.color = 'rgb(25,25,25)';
      controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
      controlText.style.fontSize = '16px';
      controlText.style.lineHeight = '38px';
      controlText.style.paddingLeft = '5px';
      controlText.style.paddingRight = '5px';
      controlText.innerHTML = 'v';
      controlUI.appendChild(controlText);

      // Setup the click event listeners: simply set the map to Chicago.
      controlUI.addEventListener('click', function() {
        KTH.lat = KTH.lat-0.001;
        console.log(KTH.lng,map.getCenter())

        initMap(map)
      });

    }

    function FullScreenButton(controlDiv, map) {

      // Set CSS for the control border.
      var controlUI = document.createElement('div');
      controlUI.style.backgroundColor = '#fff';
      controlUI.style.border = '2px solid #fff';
      controlUI.style.borderRadius = '3px';
      controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
      controlUI.style.cursor = 'pointer';
      controlUI.style.marginBottom = '22px';
      controlUI.style.textAlign = 'center';
      controlUI.title = 'Click to zoom!';
      controlDiv.appendChild(controlUI);

      // Set CSS for the control interior.
      var controlText = document.createElement('div');
      controlText.style.color = 'rgb(25,25,25)';
      controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
      controlText.style.fontSize = '16px';
      controlText.style.lineHeight = '38px';
      controlText.style.paddingLeft = '5px';
      controlText.style.paddingRight = '5px';
      controlText.innerHTML = 'Enter Fullscreen';
      controlUI.appendChild(controlText);

      // Setup the click event listeners: simply set the map to Chicago.
      controlUI.addEventListener('click', function() {
        window.scrollTo(0,1);

        toggleFullScreen();
      });

    }






//Center with current location
  // Try HTML5 geolocation.

  
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      marker.setPosition(pos);

    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }

  


function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: loc,
    zoom: zoomRate,
    zoomControl: false

  });

   infowindow = new google.maps.InfoWindow({
          content: "Hey! This is my place."
        });


   // Creating the marker for KARRO
  var KARROmarker;
  KARROmarker = new google.maps.Marker({
              map: map,
              draggable: false,
              animation: google.maps.Animation.DROP,
              position: KARRO,
              icon: {url:'KARROrabbit.png',scaledSize: new google.maps.Size(60, 75)},
              title: "KARRO's place"
            });


  KARROmarker.addListener('click', toggleBounce);
  KARROmarker.addListener('click', function() {
            infowindow.open(map, KARROmarker);
          });

  // Creating the marker for SABBE
  var SABBEmarker;
  SABBEmarker = new google.maps.Marker({
              map: map,
              draggable: false,
              animation: google.maps.Animation.DROP,
              position: SABBE,
              icon: {url:'SABBErabbit.png',scaledSize: new google.maps.Size(60, 70)},
              title: "SABBE's place"
            });


  SABBEmarker.addListener('click', toggleBounce);
  SABBEmarker.addListener('click', function() {
            infowindow.open(map, SABBEmarker);
          });

  // Creating the marker for Find my destination
      marker = new google.maps.Marker({
              map: map,
              draggable: false,
              animation: google.maps.Animation.DROP,
              //position: pos,
              icon: {url:'target.png',scaledSize: new google.maps.Size(50, 50)},
              title: "Your location"
            });


  marker.addListener('click', toggleBounce);


  // Creating the buttons for controlling the map view

  // Create the DIV to hold the control and call the CenterControl()
        // constructor passing in this DIV.
        var leftControlDiv = document.createElement('div');
        var ZoomInControl = new ZoomIn(leftControlDiv, map);
        var ZoomOutControl = new ZoomOut(leftControlDiv, map);
        var PanRightControl = new PanRight(leftControlDiv, map);
        var PanLeftControl = new PanLeft(leftControlDiv, map);
        var PanUpControl = new PanUp(leftControlDiv, map);
        var PanDownControl = new PanDown(leftControlDiv, map);


        leftControlDiv.index = 1;
        map.controls[google.maps.ControlPosition.LEFT_CENTER].push(leftControlDiv);

        //if(navigator.standalone == false) {
              // My app is installed and therefore fullscreen
              var rightControlDiv = document.createElement('div');
              var FullScreenControl = new FullScreenButton(rightControlDiv, map);
           // }
        

        rightControlDiv.index = 1;
        map.controls[google.maps.ControlPosition.RIGHT_CENTER].push(rightControlDiv);
}

function toggleBounce() {
          if (this.getAnimation() !== null) {
            this.setAnimation(null);
            console.log("stop bounce animation")
          } else {
            this.setAnimation(google.maps.Animation.BOUNCE);
            console.log("start bounce animation")
          }
        }

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
  infoWindow.open(map);
}
function centerLocation(id){
  if (id == 'CENTER'){
    currentState = id;
    map.setCenter(pos)
  };
  if (id == 'SABBE'){
    console.log('SABBE');
    currentState = SABBE;
    map.setCenter(SABBE)
    //map.getCenter()
    console.log(SABBE,currentState)
  };
  if (id == 'KARRO'){
    loc = KARRO;
    map.setCenter(KARRO)
    console.log('KARRO');

  };
  
}


function toggleFullScreen() {
    var doc = window.document;
    var docEl = doc.documentElement;

    var requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
    var cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

    if(!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
      requestFullScreen.call(docEl);
    }
    else {
      cancelFullScreen.call(doc);
    }
  }
















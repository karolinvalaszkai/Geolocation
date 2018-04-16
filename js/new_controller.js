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


//Center with current location
  // Try HTML5 geolocation.

  
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      //infoWindow.setPosition(pos);
      //infoWindow.setContent('Location found.');
      //infoWindow.open(map);
      //map.setCenter(pos);
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
    zoom: zoomRate
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

  // Creating the marker for Finding destination
      marker = new google.maps.Marker({
              map: map,
              draggable: false,
              animation: google.maps.Animation.DROP,
              //position: pos,
              icon: {url:'target.png',scaledSize: new google.maps.Size(50, 50)},
              title: "Your location"
            });


  marker.addListener('click', toggleBounce);

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
  //loc = {lat: position.coords.latitude, lng: position.coords.longitude};
  console.log('Center button!',loc,id)
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
  
  //initMap();

}
















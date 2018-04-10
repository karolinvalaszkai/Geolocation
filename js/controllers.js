


  var map;
  var zoomRate = 17;

  var KTH = {lat: 59.3498092, lng: 18.0684758};

  /**
   * The CenterControl adds a control to the map that recenters the map on
   * Chicago.
   * This constructor takes the control DIV as an argument.
   * @constructor
   */
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

    var marker1;
    var marker2;

    function initMap(map) {
        var currentZoom;


        map = new google.maps.Map(document.getElementById('map'), {
          center: KTH,
          zoom: zoomRate,
          zoomControl: false
        });

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

        var rightControlDiv = document.createElement('div');
        var FullScreenControl = new FullScreenButton(rightControlDiv, map);
        
        rightControlDiv.index = 1;
        map.controls[google.maps.ControlPosition.RIGHT_CENTER].push(rightControlDiv);


          //försvarshögskolan
          marker1 = new google.maps.Marker({
            map: map,
            draggable: true,
            animation: google.maps.Animation.DROP,
            position: {lat: 59.349095, lng: 18.069446}
          });

          marker2 = new google.maps.Marker({
            map: map,
            draggable: false,
            animation: google.maps.Animation.DROP,
            position: {lat: 59.3498092, lng: 18.0684758}
          });

            marker1.addListener('click', toggleBounce);
            marker2.addListener('click', toggleBounce);

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

    

       //Kod från Sofia&Hanna för att få bort address bar
        // When ready...
        window.addEventListener("load",function() {
            // Set a timeout...
            // setTimeout(function(){
            //     // Hide the address bar!
            //     window.scrollTo(0, 1);
            //     }, 0);

            //toggleFullScreen();
            //window.scrollTo(0,1);

        });


  var deferredPrompt;

  window.addEventListener('beforeinstallprompt', function(e) {
    console.log('beforeinstallprompt Event fired');
    e.preventDefault();

    // Stash the event so it can be triggered later.
    deferredPrompt = e;

    return false;
  });


  btnSave.addEventListener('click', function() {
    if(deferredPrompt !== undefined) {
      // The user has had a positive interaction with our app and Chrome
      // has tried to prompt previously, so let's show the prompt.
      deferredPrompt.prompt();

      // Follow what the user has done with the prompt.
      deferredPrompt.userChoice.then(function(choiceResult) {

        console.log(choiceResult.outcome);

        if(choiceResult.outcome == 'dismissed') {
          console.log('User cancelled home screen install');
        }
        else {
          console.log('User added to home screen');
        }

        // We no longer need the prompt.  Clear it up.
        deferredPrompt = null;
      });
    }
  });
  // window.addEventListener('beforeinstallprompt', function(e) {
  //   // beforeinstallprompt Event fired
  //
  //   // e.userChoice will return a Promise.
  //   // For more details read: https://developers.google.com/web/fundamentals/getting-started/primers/promises
  //   e.userChoice.then(function(choiceResult) {
  //
  //     console.log(choiceResult.outcome);
  //
  //     if(choiceResult.outcome == 'dismissed') {
  //       console.log('User cancelled home screen install');
  //     }
  //     else {
  //       console.log('User added to home screen');
  //     }
  //   });
  // });
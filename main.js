$(document).ready(function (){
    // create a LatLng object containing the coordinate for the center of the map
    var latlng = new google.maps.LatLng(43.6156, -84.2455);
    // prepare the map properties
    var options = {
      zoom: 15,
      center: latlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      navigationControl: true,
      mapTypeControl: true,
      scrollwheel: true,
      disableDoubleClickZoom: true
    };
    // initialize the map object
    var map = new google.maps.Map(document.getElementById('google_map'), options);
    // add Marker
    var marker1 = new google.maps.Marker({
      position: latlng, map: map
    });
    // add listener for a click on the pin
    google.maps.event.addListener(marker1, 'click', function() {
      infowindow.open(map, marker1);
    });
    // add information window
    var infowindow = new google.maps.InfoWindow({
      content:  '<div class="info"><strong>This is my company</strong><br><br>My company address is here<br> 32846 Sydney</div>'
    });
  });
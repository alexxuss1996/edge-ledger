var map;
function initMap() {
  // The location of NY
  var loc = { lat: 40.71427, lng: -74.00597 };
  // The map, centered at NY
  var map = new google.maps.Map(document.getElementById("map"), { zoom: 4, center: loc });
  // The marker, positioned at location
  var marker = new google.maps.Marker({ position: loc, map: map });
}

// Initialize and add the map
function initMap() {
    // The location of healthlife
    const healthlife = { lat: -33.8829201, lng: 151.0162400 };
    // The map, centered at healthlife
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 18,
      center: healthlife,
    });
    // The marker, positioned at healthlife
    const marker = new google.maps.Marker({
      position: healthlife,
      map: map,
    });
  }
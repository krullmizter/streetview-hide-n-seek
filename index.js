let panorama;

function initialize() {
    function getRandomInRange(from, to) {
        return (Math.random() * (to - from) + from).toFixed(6) * 1;
    }

    const latitude  = getRandomInRange(-90, 90);
    const longitude = getRandomInRange(-180, 180);

    panorama = new google.maps.StreetViewPanorama(
      document.getElementById("street-view"), {
        position: { lat: latitude, lng: longitude },
        pov: { heading: 165, pitch: 0 },
        zoom: 1,
      }
    );
}

window.initialize = initialize;
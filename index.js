/*let panorama;

function initStreetview() {
    function getRandomInRange(from, to) {
        return (Math.random() * (to - from) + from).toFixed(6) * 1;
    }

    const latitude  = getRandomInRange(-90, 90);
    const longitude = getRandomInRange(-180, 180);

    panorama = new google.maps.StreetViewPanorama(
      document.getElementById("street-view"), {
        position: { lat: 42.345573, lng: -71.098326 },
        pov: { heading: 165, pitch: 0 },
        zoom: 1,
      }
    );
}

window.initStreetview = initStreetview;*/

function init() {
  const panorama = new google.maps.StreetViewPanorama(
    document.getElementById("map"),
    {
      position: { lat: 42.345573, lng: -71.098326 },
      addressControlOptions: {
        position: google.maps.ControlPosition.BOTTOM_CENTER,
      },
      linksControl: false,
      panControl: false,
      enableCloseButton: false,
    }
  );
}

window.init = init;
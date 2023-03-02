let map;
let hiddenMarkers = [];

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: 0,
      lng: 0
    },
    zoom: 2
  });
}

window.initMap = initMap;

function play() {
  randCords(document.getElementById('difficulty').value);
}

function randCords(difficulty) {
  console.log('Difficulty:', difficulty);

  for (let i = 0; i < difficulty; i++) {
    const random = new google.maps.LatLng((Math.random() * (85 * 2) - 85), (Math.random() * (180 * 2) - 180));
    const marker = new google.maps.Marker({
      map: map,
      position: random
    });
    map.setCenter(marker.getPosition());

    hiddenMarkers.push(random);
  }
}

console.log(hiddenMarkers);
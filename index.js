function randomCords() {
    const cordinates = {
        lat: 0,
        lng: 0,
    };

    cordinates.lat = (Math.random() * (-90, 90) + 90).toFixed(6) * 1;
    cordinates.lng = (Math.random() * (-180, 180) + 180).toFixed(6) * 1;
        
    return cordinates;
}

function play() {
    difficulty = document.getElementById('difficulty').value;
    
    console.log(difficulty);
}

function initMap() {
  initialCordinates = randomCords();
  
  const cords = { lat: initialCordinates.lat, lng: initialCordinates.lng };

  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: cords,
  });

  const marker = new google.maps.Marker({
    position: cords,
    map: map,
  });
}

window.initMap = initMap;
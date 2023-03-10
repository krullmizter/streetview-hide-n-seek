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
  // The location of Uluru
  initialCordinates = randomCords();
  console.log(initialCordinates);
  
  const uluru = { lat: -25.344, lng: 131.031 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}

window.initMap = initMap;
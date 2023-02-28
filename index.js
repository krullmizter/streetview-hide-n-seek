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
    initialCords = randomCords();

    console.log('Initial cordinates:', initialCords);

    const astorPlace = { lat: 40.729884, lng: -73.990988 };

    const map = new google.maps.Map(document.getElementById('map'), {
        center: astorPlace,
        zoom: 18,
        streetViewControl: false,
    });
}

window.initMap = initMap;
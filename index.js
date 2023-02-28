function init() {
    function randomCords() {
        const cordinates = {
            lat: 0,
            lng: 0,
        };

        cordinates.lat = (Math.random() * (-90, 90) + 90).toFixed(6) * 1;
        cordinates.lng = (Math.random() * (-180, 180) + 180).toFixed(6) * 1;
        
        return cordinates;
    }

    initialCords = randomCords();

    console.log('Initial cordinates:', initialCords);

    const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: initialCords.lat, lng: initialCords.lng },
        zoom: 18,
        streetViewControl: false,
    });

    /*const panorama = new google.maps.StreetViewPanorama(
        document.getElementById("map"),
        {
            position: { lat: initialCords.lat, lng: initialCords.lng },
            addressControlOptions: {
                position: google.maps.ControlPosition.BOTTOM_CENTER,
            },
            linksControl: false,
            panControl: false,
            enableCloseButton: false,
        }
    );*/
}

function play() {
    difficulty = document.getElementById('difficulty').value;
    
    console.log(difficulty);

    
}

window.init = init;
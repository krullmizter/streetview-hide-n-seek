function init() {
    function getRandomInRange(from, to) {
        return (Math.random() * (to - from) + from).toFixed(6) * 1;
    }

    const latitude  = getRandomInRange(-90, 90);
    const longitude = getRandomInRange(-180, 180);

    const panorama = new google.maps.StreetViewPanorama(
        document.getElementById("map"),
        {
            position: { lat: latitude, lng: longitude },
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
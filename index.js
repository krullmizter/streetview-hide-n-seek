window.onload = function()
{
    function getRandomInRange(from, to) {
        return (Math.random() * (to - from) + from).toFixed(3) * 1;
    }

    const longitude = getRandomInRange(-180, 180)
    const latitude = getRandomInRange(-90, 90)
    const API = "AIzaSyDVUPUHXWIPljsDHlBlf7e92GF9Xlr39yc"

    const url = "https://www.google.com/maps/embed/v1/streetview?key="+API+"&location="+longitude+","+latitude+"&heading=210&pitch=10&fov=35"
    
    document.getElementById("iframe-map").setAttribute("src", url);
}
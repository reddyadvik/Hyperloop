function calculateRealSpeed() {
    var scaleSpeed = parseFloat(document.getElementById('scaleSpeed').value);
    if (isNaN(scaleSpeed) || scaleSpeed <= 0) {
        document.getElementById('result').innerText = 'Please enter a valid number greater than 0.';
        return;
    }

    // Conversion constants
    var scaleRatio = 2000 / 20; // Scale ratio 2000:20
    var feetToKm = 0.0003048; // Feet to kilometers conversion

    // Calculate real speed of sound in feet per second
    var realSpeedFeetPerSec = scaleSpeed * scaleRatio;

    // Convert real speed to kilometers per hour
    var realSpeedKmPerHr = realSpeedFeetPerSec * feetToKm * 3600;

    document.getElementById('result').innerText = 'Real speed of sound: ' + realSpeedKmPerHr.toFixed(2) + ' km/h';
}

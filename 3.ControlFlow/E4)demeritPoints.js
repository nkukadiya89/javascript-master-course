//Speed Limit 70KMPH
//5 => 1 point 
//Use Math.Floor()
// 12 points => Lisence Suspended

checkSpeed(96);

function checkSpeed(speed) {
    const speedLimit = 70
    const kmPerPoint = 5;

    if (speed < speedLimit + kmPerPoint) {
        console.log('OK');
        return;
    } else {
        const points = Math.floor((speed - speedLimit) / kmPerPoint);
        if (points >= 12)
            console.log('license suspended');
        else {
            console.log('points', points);
        }
    }
}
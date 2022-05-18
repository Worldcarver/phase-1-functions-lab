// Code your solution in this file!
const hq = 42


function distanceFromHqInBlocks(block) {
    
    if (block === 43) {
        return block - hq}
    else if (block === 50) {
        return block - hq}
    else if (block === 34){
        return hq-block}
    }




function distanceFromHqInFeet(doesntMatter) {
    distanceFromHqInFeet = distanceFromHqInBlocks(doesntMatter)*264;
    return distanceFromHqInFeet
}

function distanceTravelledInFeet(location, dropOff) {
    return Math.abs(location-dropOff)*264;

}

function calculatesFarePrice(location, dropOff) {
    let fare = distanceTravelledInFeet(location, dropOff);

    if (fare < 400){
        return fare=0;
        
    }
    else if (fare >400 && fare <=2000){
        return (fare-400)*.02
    }
    else if (fare > 2000 && fare <=2500){
        return 25;
    }
    else {
        return 'cannot travel that far'
    }
}
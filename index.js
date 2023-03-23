

function distanceFromHqInBlocks(someValue) { 
    if (someValue<42){
        return(42-someValue);
      }
      else {
    
      return(someValue-42);
    }
     
}


function distanceFromHqInFeet (someValue) {
    return distanceFromHqInBlocks(someValue)*264};





function distanceTravelledInFeet(start, destination){
    if (destination>start){
        return((destination-start)*264);
    }
    else 
    return((start-destination)*264);    

    }


function calculatesFarePrice(start, destination){
let x = distanceTravelledInFeet(start,destination)
    
    if (x <= 400){
        return 0;
    }
    else if (x > 400 && x<= 2000){
        return((x-400) * 0.02);

    }
    else if (x > 2000 && x<=2500){
        return 25;
    }

    else
    return("cannot travel that far")

}
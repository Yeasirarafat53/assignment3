//  feet To Mile

function feetToMile(feet){
    var Mile = feet/5280 ;
    return Mile;
}

var result = feetToMile(5);
console.log(result);

// woodCalculator

function woodCalculator(chair,table,khat){
    var chairCount = chair * 1;
    var tableCount = table * 3;
    var khatCount = khat * 5;
    var totalWood = chairCount+tableCount+khatCount;

    return totalWood;
}
var woodResult = woodCalculator(1,2,1);
console.log(woodResult);

// tinyFriend

function tinyFriend(persons){
    var lowestName = persons[0] ;
    for(var i = 0; i<persons.length; i++){
        var currentName = persons[i];

        if(currentName.length<lowestName.length){
            lowestName = currentName;

        }

    }
    return lowestName;
    
}

var smallestName = tinyFriend(["ariyanarif","ariyan","abdulbari",]);
console.log(smallestName);


// brickCalculator

function brickCalculator(perFloor){
    var perfeet = 1000;
    var totalBrick;

    if(perFloor>0 && perFloor<=10){
        totalBrick= perfeet*15*perFloor;
    }

    else if(perFloor>=11 && perFloor<=20){
        totalBrick=perfeet*12*perFloor;
    }
    else{
        totalBrick = perfeet*10*perFloor;
    }

    return totalBrick;

}

var result = brickCalculator(25);
console.log(result);

//  Another solution of brickcalculator
function BrickCalculator(PerFloor) {
    
    var brick ;
    if(PerFloor<=10){
        brick = PerFloor*1000*15;
    }
    else if(PerFloor<=20){
        var firstpart = 10*1000*15;
        var remaining    = PerFloor - 10;
        var secondpart = remaining * 1000*12;
        brick = firstpart+secondpart;
    }
    else{
        var firstpart = 10*1000*15;
        var secondpart = 10*1000*12;//flor,brick,fit
        var remaining = PerFloor - 20;
        var thirdpart = remaining*1000*10;
        brick = firstpart+secondpart+thirdpart;
    }
     return brick;
    
    }
    var finalResult =BrickCalculator(13)
    console.log(finalResult);
function greetings(){
    console.log("Good");
}

function printSum(a){
    console.log(a);
}

printSum("Bonjour");

printHere = function(a,b) { console.log(a+b)};
printHere(3,5);


function newFunction(fun){
    fun();
}

newFunction(greetings);

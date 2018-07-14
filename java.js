var playHealth = 0;
var playAttack = 0;
var playCounter = 0;

var oppHealth = 0;
var oppAttack = 0;
var oppCounter = 0
var empty = true;
var counter = 0;

$(".number").on("click", function() {

    if (empty) {
        $(this).appendTo("#plabod");
        empty = false;

        playHealth = this.getAttribute("health");
        console.log(playHealth)
        playAttack = this.getAttribute("attack");
        console.log(playAttack);
        playCounter = this.getAttribute("counterA");
        console.log(playCounter)

    }else{
        $(this).appendTo("#opbod");
        oppHealth = this.getAttribute("health");
        console.log(oppHealth)
        oppAttack = this.getAttribute("attack");
        console.log(oppAttack);
        oppCounter = this.getAttribute("counterA");
        console.log(oppCounter)
    }

});

$(".attack").on("click", function() {
    
    if(oppHealth > 0){
        oppHealth-=playAttack;
        console.log(oppHealth);
    }else{
        
    }
    if(oppHealth <= 0){
        alert("Winner");
        $("#opbod").empty();
        counter++;
    }  
    
    if(counter === 3){
        $("#opbod").text("Champion");

    }

})

$(document).ready(function () {
    if ('#plabod:empty') {
        console.log("Empty");
    }
});

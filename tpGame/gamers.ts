

//create the class with the different properties of health, damage, doDamage, cureMySelf
class Character {
	health: number;
	damage: number;
	healthPotions: number;
    atackMethod: any;
    
	function healMySelf() {
		healthPotions:number -= 1;
        health:number += 100;
        
		//adds points to character
		// constantly checks against the character total health.. while health is not 0 () {}
	
        while (health  < 0 && health > 0) {
            alert("you are healthy");
        }
	
    } // end of Character class


    function attack() {
            //minus attack ability
            //substracts fom attack method. Think of this as bullets in a gun. You have a total amount and everytime u use them, u loose bullets to use 
            // in your attack. If you are out of bullets, you can't attack. 
            
    }

    

class Wizard extends Character {
	magicPoints: number;
	constructor(magicPoints: number, damage: number, healthPotions: number, health: number) {
		super(); {
			this.magicPoints = 300;
			this.damage = 100;
			this.healthPotions = 5;
			this.health = 200;
		}
		// This should check if this character is dead based on the characters health.
        // If health is 0, alert ("character is dead");
        
		function checkHealth() {
			if (health > 200) {
				alert("you are loosing and not too healthy.");
			} else {
				alert("you are healthy.");
			}
        }
        
        checkHealth();

        function gameOver() {   
            if (health === 0) {
                alert("Game Over!");
            
                } else {
                    alert("Continue playing!");
                }
        }

        gameOver();
    }
}
               
            
    
class Soldier extends Character {
    stamina: number;
    constructor(damage: number, healthPotions: number, health: number, stamina: number) {
        super(); {
            this.damage = 500;
            this.healthPotions = 5;
            this.health = 100;
            this.stamina = 500;
        }
    }

}

class Thief extends Character {
    stamina: number;
    constructor(damage: number, healthPotions: number, health: number, stamina: number) {
        super(); {
            this.damage = 2000;
            this.healthPotions = 5;
            this.health = 300;
            this.stamina = 100;
        }
    }
}


var wizardButton = document.createElement("button");
wizardButton.innerHTML = "Select Wizard";

var thiefButton = document.createElement("button");
thiefButton.innerHTML = "Select Thief";

var soldierButton = document.createElement("button");
soldierButton.innerHTML = "Select Soldier";

// Append somewhere on the body
var body = document.getElementsByTagName("body")[0];
body.appendChild(wizardButton);

var body = document.getElementsByTagName("body")[0];
body.appendChild(thiefButton);

var body = document.getElementsByTagName("body")[0];
body.appendChild(soldierButton);

// Add event handlers for click events on fighters
wizardButton.addEventListener ("click", function() {
  alert("you selected Wizard, please select second player to start game.");
});

thiefButton.addEventListener ("click", function() {
  alert("you selected Thief, please select second player to start game.");
});

soldierButton.addEventListener ("click", function() {
  alert("you selected soldier, please select second player to start game.");
});

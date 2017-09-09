

//create the class with the different properties of health, damage, doDamage, cureMySelf
class Character {
	/* health: number;
	damage: number;
	healthPotions: number; */
    attackMethod: string;

    constructor(theAttackMethod:string) {
    this.attackMethod = theAttackMethod;
    }

    attack(attackValue:number = 0) {
        console.log(`used ${attackValue} ${this.attackMethod} to attack`);
    }

   /*  yourHealth() {
        if (this.health > 200) {
				console.log("you are loosing and not too healthy.");
			} else {
				console.log("you are healthy.");
			}
    } */

    /* healthPotion() {
        if (this.damage > 500) {
				console.log("you need a health potion.");
			} else {
				console.log("you are in good shape, you don't need a potion.");
			}
    } */

           
} // end of Character class

class Wizard extends Character {
	/* magicPoints: number; */
	/* constructor(magicPoints: number, damage: number, healthPotions: number, health: number) {
		super(); {
			this.magicPoints = 300;
			this.damage = 100;
			this.healthPotions = 5;
			this.health = 200;
        }       		
    } */
    constructor(attackMethod:string) {
        super(attackMethod);
        console.log("wizard selected");
    }

    attack(attackValue:number = 77) {
        console.log('Wizard Attacking!');
        super.attack(attackValue);
    }
        
}
               
class Soldier extends Character {
    /* stamina: number; */
    /* constructor(damage: number, healthPotions: number, health: number, stamina: number) {
        super(); {
            this.damage = 500;
            this.healthPotions = 5;
            this.health = 100;
            this.stamina = 500;
        }
    } */
    constructor(attackMethod:string) {
        super(attackMethod);
        console.log("soldier selected");
    }

    attack(attackValue:number = 5) {
        console.log('Soldier Attacking!');
        super.attack(attackValue);
    }

}

class Thief extends Character {
    /* stamina: number; */
    /* constructor(damage: number, healthPotions: number, health: number, stamina: number) {
        super(); {
            this.damage = 2000;
            this.healthPotions = 5;
            this.health = 300;
            this.stamina = 100;
        }
    } */
    constructor(attackMethod:string) {
        super(attackMethod);
        console.log("Thief selected");
    }

    attack(attackValue:number = 5) {
        console.log('Thief Attacking!');
        super.attack(attackValue);
    }
}

// Functionality below 


/* function healthCheck(health, damage) {
    var returnValue = "Your health is : "; 
    
    function calculateHealth() { 
        return returnValue + (health + damage);
    }
    return calculateHealth(); 
}

var healthResult = healthCheck(1000,200);
document.write(healthResult); */




/* function attack() { */
        //minus attack ability
        //substracts fom attack method. Think of this as bullets in a gun. You have a total amount and everytime u use them, u loose bullets to use 
        // in your attack. If you are out of bullets, you can't attack.             
/* } */





// This should check if this character is dead based on the characters health.
        // If health is 0, alert ("character is dead");
        
		/* function checkHealth() {
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

        gameOver(); */



// Add buttons to view 



// Append somewhere on the body
/* body.appendChild(thiefButton);
body.appendChild(soldierButton); */
window.onload = function(){
    let myWizard;
    let wizardButton = document.createElement("button");
    document.body.appendChild(wizardButton);
    wizardButton.innerHTML = "Wizard";
    
    let myThief;
    let thiefButton = document.createElement("button");
    document.body.appendChild(thiefButton);
    thiefButton.innerHTML = "Thief";
    
    let mySoldier;
    let soldierButton = document.createElement("button");
    document.body.appendChild(soldierButton);
    soldierButton.innerHTML = "Soldier";

    // Add event handlers for click events on fighters
    wizardButton.addEventListener ("click", function() {
    myWizard = new Wizard("magic points"); 
    myWizard.attack(5);
  });
  
  thiefButton.addEventListener ("click", function() {
    myThief = new Thief("stamina");
    myThief.attack(20);
    /* console.log("you selected Thief, please select second player to start game."); */
  });
  
  soldierButton.addEventListener ("click", function() {
    mySoldier = new Soldier("stamina");
    mySoldier.attack(200);
    /* console.log("you selected soldier, please select second player to start game."); */
  });

//show console on page instead
  window.console = {
    log: function(str:any){
      var node = document.createElement("div");
      node.appendChild(document.createTextNode(str));
      document.getElementById("myLog").appendChild(node);
    }
  }
  
}



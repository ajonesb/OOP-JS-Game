//create the class with the different properties of health, damage, cureMySelf
class Character {
	health: number;
	damage: number;
	healthPotions: number; 
    attackMethod: string;

    constructor(theAttackMethod:string) {
    this.attackMethod = theAttackMethod;
    }

    /* characterClick () {
            if (wizardboton.clicked == true) {
                console.log ("Please select second player to start game");
            } else { 
                console.log ("Start game");
            }     
    }; */ 

    attack(attackValue:number = 0) {
        console.log(`used ${attackValue} ${this.attackMethod} to attack`);
    }

   yourHealth() {
        if (this.health > 30) {
            console.log(`your health is ${this.health}, you need a health potion`);
			} else {
				console.log(`your health is ${this.health}, continue playing`);
			}
    };

   curemySelf() {
        if (this.damage > 30) {
				console.log("you obtained a health potion!");
			} else {
				console.log("Good health, keep fighting!");
			}
    } 

     gameOver () {
        if (this.health === 0) {
            console.log ("Game Over");
        /*  wizardboton.disabled = true; 
            thief.Button.disabled = true;
            soldier.Button.disabled = true; */
        }      
    };
          
} // end of Character class

class Wizard extends Character {
    magicPoints: number; 
    health = 200;
    healthPotions = 5;
    damage = 100;
  /*   this.magicPoints = 300;
	this.damage = 100;
	this.healthPotions = 5;
	this.health = 200; */
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
        console.log("Wizard selected");                 
    }

    attack(attackValue:number = 77) {
        console.log('Wizard Attacking!');
        super.attack(attackValue);
    }

    /*  yourHealth(health:number = 200){
        super.health(health);
    }   */

        
}
               
class Soldier extends Character {
        stamina: number; 
        health: 100;
        damage: 500;
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
        console.log("Soldier selected");

        //if Soldier selected, please select second player to start game
    }

    attack(attackValue:number = 5) {
        console.log('Soldier Attacking!');
        super.attack(attackValue);
    }

}

class Thief extends Character {
    stamina: number;
    health = 300;
    damage = 2000;
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

        //if Thief selected, please select second player to start game
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



//create buttons and append on the body
window.onload = function(){
    let myWizard;
    let wizardButton = document.createElement("button");
    wizardButton.id ='wizardboton'; 
    document.body.appendChild(wizardButton);
    wizardButton.innerHTML = "Wizard";
   
    let myThief;
    let thiefButton = document.createElement("button");
    thiefButton.id ='thiefboton'; 
    document.body.appendChild(thiefButton);
    thiefButton.innerHTML = "Thief";
    
    let mySoldier;
    let soldierButton = document.createElement("button");
    soldierButton.id ='soldierboton';
    document.body.appendChild(soldierButton);
    soldierButton.innerHTML = "Soldier";



    // Add event handlers for click events on fighters
    wizardButton.addEventListener ("click", function() {
    myWizard = new Wizard("magic points"); 
   /*  myWizard.characterClick(); */
    myWizard.attack(5);
    myWizard.yourHealth(79);
    myWizard.gameOver(); 
  });
  
  thiefButton.addEventListener ("click", function() {
    myThief = new Thief("stamina");
    myThief.attack(20);
    myWizard.yourHealth(79);
    myWizard.gameOver(); 
    /* console.log("you selected Thief, please select second player to start game."); */
  });
  
  soldierButton.addEventListener ("click", function() {
    mySoldier = new Soldier("stamina");
    mySoldier.attack(200);
    myWizard.yourHealth(79);
    myWizard.curemySelf();
    myWizard.gameOver();
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

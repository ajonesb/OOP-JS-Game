//create the class with the different properties of health, damage, doDamage, cureMySelf
class Character {
	health: number;
	damage: number;
    healthPotions: number;
    atackMethod: any;
   
	healMySelf() {
		this.healthPotions -= 1;
        this.health += 100;
        //adds points to character
        // constantly checks against the character total health.. while health is not 0 () {}
    }
        while (Wizard.health > 0 && Soldier.health > 0) {
                alert("you are healthy");
            }
      
            attack() {
                this.damage = -1;
                //minus attack ability
                //substracts fom attack method. Think of this as bullets in a gun. You have a total amount and everytime u use them, u loose bullets to use 
                // in your attack. If you are out of bullets, you can't attack. 

                doDamage() {
                    /* this.health = -1; */
                    /* (attackMessage) => {
                        console.log("you hit a player, nice job.");
                    } */

                }

            }
            

    } // end of Character class

     
	class Wizard extends Character {
        magicPoints: number;
        constructor(magicPoints: number, damage: number, healthPotions: number, health: number) { super();{
        this.magicPoints = 300;
        this.damage = 100;   
        this.healthPotions = 5; 
        this.health = 200;      
        }

            checkHealth() {
            //this should check if this character is dead based on their health
            // if health is 0, alert ("character is dead");
            /* while (checkHealth.Wizard > 200 && checkHealth.Wizard > 100) {
                console.log("you have been hit");
            } do {
                console.log("you are safe.");
            }  */
            if (health > 200) {
                alert("you are loosing and not too healthy.");
            } 
            
            else {
                alert("you are healthy.");           
            } 
        }   
                 
    }

       

	class Soldier extends Character {
        stamina: number;
        constructor(damage: number, healthPotions: number, health: number, stamina: number) { super();{
        this.damage = 500;
        this.healthPotions = 5; 
        this.health = 100;
        this.stamina = 500;
        }
    }
    
    
	class Thief extends Character {
        stamina: number;
        constructor(damage: number, healthPotions: number, health: number, stamina: number) { super();{
        this.damage = 2000;
        this.healthPotions = 5; 
        this.health = 300;
        this.stamina = 100;
        }
    }

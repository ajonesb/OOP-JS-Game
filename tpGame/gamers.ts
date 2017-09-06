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

     checkHealth() {
        //this should check if this character is dead based on their health
        // if health is 0, alert ("character is dead");
        /* while (checkHealth.Wizard > 200 && checkHealth.Wizard > 100) {
			console.log("you have been hit");
		} do {
			console.log("you are safe.");
        }  */
         if (checkHealth.Wizard > 200 && checkHealth.Soldier > 100) {
            alert("you have been hit");
        } 
        
        else {
            alert("you are safe");           
		} 
    }



	class Wizard extends Character {
        magicPoints: number;
        constructor(magicPoints: number, damage: number, healthPotions: number, atackMethod: any) { super();{
        /* super.magicPoints =1000; */
        this.health = 200;
        this.damage = 100;
        this.healthPotions = 5;
        this.magicPoints = 300;
    }
        /* add(magicPoints, 100) {
            return new Point(this.damage + healthPotions , this.y + point.y);
        } */
                 
    }
    

	class Soldier extends Character {
        stamina: number;
        this.health = 200;
        this.damage = 1000;
        this.attackMethod = yes;
    }
    
    
	class Thief extends Character {
        stamina: number;
        this.health = 200;
        this.damage = 1000;
        this.attackMethod = any;
    }
    
    
    
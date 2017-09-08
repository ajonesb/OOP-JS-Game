/*The exercise is the following:

Create a game with three classes : wizard, soldier and thief.

Wizard uses mp (magic points) to do damage and has Low health. 

    -health: 200
    -damage: 1000
    -mp: 300

Soldier has a lot of health, low damage and uses stamina to attack.

    -health: 1000
    -damage: 500
    -stamina: 500

Thief has Low health, crazy damage and uses stamina to attack.

    -health: 300
    -damage: 2000
    -stamina: 1000


The idea is that the user can choose 2 characters from the three classes and make them fight each other, 
you can use 5 hp (health potions) and 5 stamina or mp (magic points) potions depending of the character. 

*/

* Install NPM - https://www.npmjs.com/get-npm?utm_source=house&utm_medium=homepage&utm_campaign=free%20orgs&utm_term=Install%20npm

 - Install typescript 

        > npm install -g typescript

- compile ts file after 

        > tsc gamers.ts
        
        
The result will be a file gamers.js which will have the app code to show in the browser. 


Development Progress Notes:

08/09/2017

- Follow the order of the Character and Wizard class function and see how it works (try to understand it) 
then try to do the same for soldier and thief.. but really understand the inheritance that is happening 
between the Character Class and Wizard Class. Go code by code, piece by piece.


- Who is wizard attacking after creating methods to attack on Wizard class. You have to create a condition when
Wizard is clicked that console.logs "please select another player in order to start game" 


> wizard created
> gamers.js:40 Wizard Attacking!
> gamers.js:18 used 5 magic points to attack
> gamers.js:40 Wizard Attacking!
> gamers.js:18 used 77 magic points to attack

- Better to start when Wizard is clicked, console.log showing "you selected wizard, please select another player."

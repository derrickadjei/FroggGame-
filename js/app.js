//declared global variables for player speed and x values
var PLAYER_X = 200,
   PLAYER_Y = 400,
   Enemy_X = -100,
   Enemy_speed = 500;

// Enemies our player must avoid
var Enemy = function () {
   // Variables applied to each of our instances go here,
   // we've provided one for you to get started

   // The image/sprite for our enemies, this uses
   // a helper we've provided to easily load images
   this.sprite = 'images/enemy-bug.png';
   //set enemy position, location and speed.
   this.x = Enemy_X;
   this.enemyLoc();
   this.enemySpeed();

};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function (dt) {
   // You should multiply any movement by the dt parameter
   // which will ensure the game runs at the same speed for
   // all computers.
   if (this.x < 500) {
      this.x = this.x + (this.speed * dt);
   } else {
      this.x = Enemy_X;
      this.enemyLoc();
      this.enemySpeed();
   };
   
   //If statements to check if player has collided 50px near the bug enemy
    if(player.x >= this.x - 50 && player.x <= this.x + 50){
        if(player.y >= this.y - 50 && player.y <= this.y + 50){
            player.resetPosition();
        }
    } 
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function () {
   ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//This function will help position the enemy locastion
Enemy.prototype.enemyLoc = function () {
   //random y-axis for enemy
   var yLoc = [60, 120, 220];
   this.y = yLoc[Math.floor(Math.random() * yLoc.length)];
}

//This is to build the enemy speed

Enemy.prototype.enemySpeed = function () {
   //set speed
   this.speed = Math.random() * Enemy_speed;
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function () {
   // Variables applied to each of our instances go here,
   // we've provided one for you to get started

   // The image/sprite for our enemies, this uses
   // a helper we've provided to easily load images
   this.sprite = 'images/char-boy.png';
   this.resetPosition();
};

Player.prototype.update = function (dt) {
   // You should multiply any movement by the dt parameter
   // which will ensure the game runs at the same speed for
   // all computers.
   //console.log('speed test');
   this.x * dt + this.speed;
   this.y * dt + this.speed;
};

// Draw the enemy on the screen, required method for game
Player.prototype.render = function () {
   ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function (key) {
   //Moves player right
   if (key == 'right' && this.x < 400) {
      this.x = this.x + 100;
   }
   //Moves player left
   if (key == 'left' && this.x > 0) {
      this.x = this.x - 100;
   }
   //Moves player upwards and when player reaches the top resets player position.
   else if (key == 'up') {
      if (this.y > 100) {
         this.y = this.y - 80;
      } else {
         this.result();
         this.resetPosition();
         
      }
   }
   //Moves player down
   if (key == 'down' && this.y < 400) {
      this.y = this.y + 80;
   }
};

//This function is to rest the player position
Player.prototype.resetPosition = function () {
   this.x = PLAYER_X;
   this.y = PLAYER_Y;
};


// Now instantiate your objects.

// Place the player object in a variable called player - bug as enemies
var bug1 = new Enemy();
var bug2 = new Enemy();
var bug3 = new Enemy();

// Place all enemy objects in an array called allEnemies
var allEnemies = [bug1, bug2, bug3];

//new Player object created
var player = new Player();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function (e) {
   var allowedKeys = {
      37: 'left',
      38: 'up',
      39: 'right',
      40: 'down'
   };

   player.handleInput(allowedKeys[e.keyCode]);
});

//Response to congratulate User on completing the game.
Player.prototype.result = function(){
   var person = prompt("Please enter your name");
    if (person != null) {
        alert(person + " well done for completing game");
    }
};
class Enemy { //ES6 class for enemies
      constructor(x, y, speed)  {
      this.x = x;
      this.y = y + 60;
      this.step = 101;
      this.sprite = 'images/enemy-bug.png';
      this.speed = speed;
    }
    update(dt)  { 
      if (this.x < this.step * 5)  {
        this.x += dt * this.speed;
      }
      else  {
        this.x = 0;
      }
    }
    render()  { 
      ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
  } 
class superHero  {//es6 Class superheroes
    constructor() {
      this.step = 101; 
      this.jump = 83; 
      this.sprite = 'images/char-boy.png';
      this.startX = this.step * 2;
      this.startY = (this.jump * 4) + 60;
      this.x = this.startX;
      this.y = this.startY;
    }
    update()  {
      for (let enemy of allEnemies) { 
        if (this.y == enemy.y && (enemy.x + enemy.step / 2 > this.x && enemy.x <
            this.x + this.step / 2)){
          alert("Oh God! You hit the bug");
          this.x = this.startX;
          this.y = this.startY;
        }
      }
      if (this.y < 0) {
        setTimeout(() =>  { 
          this.x = this.startX;
          this.y = this.startY;
          alert("Congratulations! you won");
        }, 5); 
      }
    }
    render()  {
      ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
    handleInput(input)  {
      if (input == 'left' && this.x > 0)  {
        this.x -= this.step; 
      }
      else if (input == 'right' && this.x < this.step * 4) {
        this.x += this.step;
      }
      else if (input == 'up' && this.y > 0) {
        this.y -= this.jump; 
      }
      else if (input == 'down' && this.y < this.jump * 4)  {
        this.y += this.jump;
      }
    }
  }
const player = new superHero();
random = Math.floor(Math.random() * 300);
const bug1 = new Enemy(-101, 0, 110 + random);
const bug2 = new Enemy(-401, 83, 90 + random);
const bug3 = new Enemy(101, 166, 110 + random);
const bug4 = new Enemy(401, 249, 90 + random);
const allEnemies = []; 
allEnemies.push(bug1, bug2, bug3, bug4);
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

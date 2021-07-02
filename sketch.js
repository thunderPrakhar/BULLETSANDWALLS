var car, bullet;
var wall;
var thickness, speed, weight;

function setup() {
  createCanvas(800,400);
  thickness = random(22, 83);
	weight =  random(30, 52);
	speed = random(223, 321);
	wall = createSprite(700, 200, thickness, 800/2);
	car = createSprite(50, 200, 70, 20);
car.velocityX = 60;
car.shapeColor = "blue";
}

function draw() {
  background("black");  
  if (collision(car, wall)) {
	car.velocityX = 0;
		damage = 0.5 * weight * speed * speed/ thickness ** 3;

		if (damage > 10) {
			wall.shapeColor = rgb(255, 0, 0);
		} else if (damage < 10){
			wall.shapeColor = rgb(0, 255, 0);
	}
}
  drawSprites();
}


function collision(bulletSprite, wallSprite) {
  bulletRightEdge = bulletSprite.x + bulletSprite.width;
  wallLeftEdge = wallSprite.x;

  if (bulletRightEdge >= wallLeftEdge) {
      return true;
  } else {
      return false;
  }
}
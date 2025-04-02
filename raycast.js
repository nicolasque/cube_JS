const TILE_SIZE = 32;
const MAP_NUM_ROWS = 10;
const MAP_NUM_COL = 10;
const WINDOW_WITH = MAP_NUM_COL * TILE_SIZE;
const WINDOW_HEIGHT = MAP_NUM_ROWS *TILE_SIZE;


class Map {
	constructor()
	{
		this.grid = [
			[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 1, 0, 0, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 0, 0, 1, 0, 1],
            [1, 0, 0, 0, 0, 1, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 1, 0, 0, 0, 1],
            [1, 0, 1, 1, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 1, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
		];
	}
	render() {
		for (var i = 0; i < MAP_NUM_ROWS; i++)
		{
			for (var j = 0; j < MAP_NUM_COL; j++)
			{
				var tileX = j * TILE_SIZE;
				var tileY = i * TILE_SIZE;
				var tileColor = this.grid[i][j] == 1 ? "#222" : "#fff";
				stroke("#222");
				fill(tileColor);
				rect(tileX, tileY, TILE_SIZE, TILE_SIZE);
			}
		}

	}
}

class Player {
	constructor() {
		this.x = WINDOW_WITH / 2 ;
		this.y = WINDOW_HEIGHT / 2;
		this.radius = 3;
		this.turnDirection = 0;
		this.walkDirection = 0;
		this.rotationAngle = Math.PI / 2;
		this.moveSpeed = 2.0;
		this.rotatioSpeed = 2 * (Math.PI / 180);
	}

	render() {
		fill("red");
		circle(this.x,this.y, this.radius);
	}

	update(){
		console.log(this.turnDirection);
		console.log(this.walkDirection);
	}
}


var grid = new Map();
var player = new Player();

function keyPressed() {
	if (keyCode == UP_ARROW) {
		player.walkDirection = +1;
	} else if (keyCode == DOWN_ARROW) {
		player.walkDirection = -1;
	}else if (keyCode == RIGHT_ARROW) {
		player.turnDirection = +1;
	}else if (keyCode == LEFT_ARROW) {
		player.turnDirection = -1;
	}
}

function keyReleased()
{
	if (keyCode == UP_ARROW) {
		player.walkDirection = 0;
	} else if (keyCode == DOWN_ARROW) {
		player.walkDirection = 0;
	}else if (keyCode == RIGHT_ARROW) {
		player.turnDirection = 0;
	}else if (keyCode == LEFT_ARROW) {
		player.turnDirection = 0;
	}
}

function setup()
{
	createCanvas(WINDOW_WITH, WINDOW_HEIGHT);
}

function update()
{
	player.update()
}

function draw()
{
	update();
	grid.render();
	player.render()
}


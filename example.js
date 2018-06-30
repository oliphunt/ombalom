var circle_diameter = 300;
var circle_x = 0;
var circle_y = 0;
circle_2_y = circle_y;
var speed = 2;

var canvas = new ombalom.Canvas('OmbalomCanvas')

canvas.loop = function(){
		this.clear();
		canvas.rectangle(circle_x);
		canvas.line(circle_x, 0, 0, 600);
		canvas.line(600, 0, 600, 600);
		canvas.circle(circle_x, circle_y, circle_diameter, 'red');
		circle_x = circle_x + speed;
		circle_diameter = circle_diameter - (speed /2);
		circle_y = circle_y;
		circle_2_y = circle_2_y + (speed / 2)
		canvas.circle(circle_x, circle_2_y, circle_diameter, 'red');
		circle_x = circle_x + speed;
		circle_diameter = circle_diameter - (speed /2);
		circle_y = circle_y + (speed / 4);
		if(circle_diameter < 0) {
			speed = speed * -1;
		}
		if(circle_diameter > 300) {
			speed = speed * -1;
		}
}

canvas.startAnimation();

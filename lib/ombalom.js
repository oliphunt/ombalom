var Ombalom = {};

Ombalom.canvas = new fabric.StaticCanvas('OmbalomCanvas');

function circle(left = 0, top = 0, diameter = 100, colour = '#000000'){
	if(diameter < 0){
		return;
	}
	options = {
  		radius: diameter / 2,
  		fill: colour,
  		left: left,
  		top: top
	}
	var circle = new fabric.Circle(options);
	Ombalom.canvas.add(circle);
	return circle;
}

function rectangle(left = 0, top = 0, width = 100, height = 100, colour = '#000000'){
	options = {
  		width: width,
  		height: height,
  		fill: colour,
  		left: left,
  		top: top,
	}
	var rectangle = new fabric.Rect(options);
	Ombalom.canvas.add(rectangle);
	return rectangle;
}

function line(x1, y1, x2, y2, colour = '#000000'){
	options = {
  		stroke: colour
	}
	var line = new fabric.Line([x1, y1, x2, y2], options);
	Ombalom.canvas.add(line);
	return line;
}

function cls(){
	Ombalom.canvas.clear();
}

function start(){
	Ombalom.main();
}

function stop(){
	window.cancelAnimationFrame( Ombalom.stopMain );
}

Ombalom.main = function main( tFrame ) {
	Ombalom.stopMain = window.requestAnimationFrame( main );
	loop();
}

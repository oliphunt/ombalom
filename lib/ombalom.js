var ombalom = {};

ombalom.Canvas = function(canvas_id){
	this._canvas = new fabric.StaticCanvas(canvas_id);
	this.rectangle = function(left = 0, top = 0, width = 100, height = 100, colour = '#000000'){
		options = {
	  		width: width,
	  		height: height,
	  		fill: colour,
	  		left: left,
	  		top: top,
		}
		var rectangle = new fabric.Rect(options);
		this._canvas.add(rectangle);
		return rectangle;
	}
	this.circle = function(left = 0, top = 0, diameter = 100, colour = '#000000'){
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
		this._canvas.add(circle);
		return circle;
	}
	this.line = function(x1, y1, x2, y2, colour = '#000000'){
		options = {
	  		stroke: colour
		}
		var line = new fabric.Line([x1, y1, x2, y2], options);
		this._canvas.add(line);
		return line;
	}
	this.clear = function(){
		this._canvas.clear();
	}
	this.startAnimation = function(){
		this.mainLoop();
	}
	this.stopAnimation = function(){
		window.cancelAnimationFrame( this.stopMain );
	}
	this.loop = function(){
		/* Called every animation frame. Override in child. */
	}
	this.mainLoop = function mainLoop( tFrame ) {
		this.stopMain = window.requestAnimationFrame( mainLoop.bind(this) );
		this.loop( tFrame );
	}
}

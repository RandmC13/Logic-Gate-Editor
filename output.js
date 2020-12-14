class Output {

	constructor (text, x, y, width) {
		this.text = text;
		this.x = x;
		this.y = y;

		this.width = width;

		this.in = [0];
		this.inputCircleCoords=[[0,0]];
		this.inputDiameter = 0;
	}

	draw(){
		//Base rectangle
		fill(54);
		noStroke();
		rect(this.x,this.y,this.width);
		//Connector
		let connectorX = this.x+(this.width/2);
		let connectorY = this.y+(this.width/2);
		let connectorDiameter = this.width - (this.width*0.5);
		this.inputCircleCoords[0][0] = connectorX;
		this.inputCircleCoords[0][1] = connectorY;
		this.inputDiameter = connectorDiameter;

		fill(200);
		if(dist(mouseX,mouseY,connectorX,connectorY) < connectorDiameter/2) {
			fill(160);
		}
		if (this.in.length > 0 && this.in[0].state){
			fill(255,0,0);
		}
		circle(connectorX, connectorY, connectorDiameter);
	}
}
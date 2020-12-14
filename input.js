class Input {

	constructor (text, x, y){
		this.text = text;
		this.x = x;
		this.y = y;

		this.width = 100;
		this.height = 50;

		this.out = [];
		this.click = true;
		this.state = false;
		this.drawLine = false;

		this.outputCircleCoords = [0,0];
		this.outputDiameter = 0;
	}

	draw() {
		//Base Rectangle
		fill(54);
		noStroke();
		rect(this.x,this.y,this.width,this.height);
		//Button
		let buttonX = this.x+(this.width*0.05);
		let buttonY = this.y+(this.height*0.1);
		let buttonWidth = this.width*0.2;
		let buttonHeight = this.height*0.8;
		fill(100);
		//Check for mouse hover over button
		if (mouseX > buttonX && mouseX < buttonX+buttonWidth && mouseY > buttonY && mouseY < buttonY+buttonHeight) {
			fill(80);
			//Check for mouse click
			if (mouseIsPressed && this.click) {
				this.click = false;
				//Toggle the state of the button
				this.state = !this.state;
			}
		}
		if (this.state) {
			fill(255,0,0);
		}
		rect(buttonX,buttonY,buttonWidth,buttonHeight);
		//Text
		textAlign(CENTER, CENTER);
		fill(255);
		text(this.text,this.x+(this.width*0.5),this.y+(this.height*0.5));
		//Connector
		fill(200);
		let connectorX = this.x+(this.width*0.8);
		let connectorY = this.y+(this.height/2);
		let connectorDiameter = this.width*0.2;
		this.outputCircleCoords[0] = connectorX;
		this.outputCircleCoords[1] = connectorY;
		this.outputDiameter = connectorDiameter;
		//Check for mouse hover over connector
		if (dist(mouseX,mouseY,connectorX,connectorY) < connectorDiameter/2) {
			fill(160);
			//Check if line should be drawn
			if (mouseIsPressed) {
				this.drawLine = true;
			}
		}
		circle(connectorX,connectorY,connectorDiameter);

		//Draw line if necessary
		if (this.drawLine) {
			strokeWeight(3);
			stroke(0);
			line(connectorX,connectorY,mouseX,mouseY);
		}

		//Draw Links
		this.updateState(); //Update the link with the button state
		if (this.out.length > 0) {
			for (i=0;i<this.out.length;i++) {this.out[i].draw();}
		}
	}

	updateState() {
		//Update every link with the correct state
		for (i=0;i<this.out.length;i++) {
			this.out[i].state = this.state;
		}
	}
}
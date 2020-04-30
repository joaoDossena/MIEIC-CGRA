/**
 * MyVehicle
 * @constructor
 * @param scene - Reference to MyScene object
 */

class MyVehicle extends CGFobject {
	constructor(scene, slices, stacks) {
		super(scene);
		this.airship = new MyAirship(scene, slices, stacks);
		this.angle = 0;
		this.speed = 0;
		this.position = [0, 0, 0];
	}
	update(){
		this.position[0] += this.speed*Math.sin(this.angle*Math.PI/180.0);
		this.position[2] += this.speed*Math.cos(this.angle*Math.PI/180.0);
	}
	turn(val){
		this.angle += val;
	}
	accelerate(val){
		this.speed += val;
		//------	Speed Limit
		if(this.speed >2){this.speed=2;}
		if(this.speed <0){this.speed=0;}

	}
	reset(){
		this.angle = 0;
		this.speed = 0;
		this.position = [0, 0, 0];
		this.scene.pushMatrix();
		this.scene.translate(0, 0, -Math.sqrt(2)/2);
		this.scene.rotate(Math.PI * 270 / 180, 1, 0, 0);
		this.scene.rotate(Math.PI * 45 / 180, 0, 0, 1);
		this.gondola.display();
		this.scene.popMatrix();
	}
	display(){
		this.scene.pushMatrix();
		//--update position
		this.scene.translate(this.position[0], this.position[1], this.position[2]);
		this.scene.rotate(Math.PI *this.angle/180.0, 0, 1, 0);
		//-----
		/*this.scene.translate(0, 0, -Math.sqrt(2)/2);
		this.scene.rotate(Math.PI * 270 / 180, 1, 0, 0);
		this.scene.rotate(Math.PI * 45 / 180, 0, 0, 1);
		*/
		this.airship.display();
		this.scene.popMatrix();
	}

} 
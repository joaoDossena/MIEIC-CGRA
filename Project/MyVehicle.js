/**
 * MyVehicle
 * @constructor
 * @param scene - Reference to MyScene object
 */

class MyVehicle extends CGFobject {
	constructor(scene) {
		super(scene);
		this.cylinder = new MyCylinder(scene);
		this.frontSphere = new MySphere(scene);
		this.backSphere = new MySphere(scene);
		this.vehicle = new MyTriangle(scene);
		this.angle = 0;
		this.velocity = [0, 0, 0];
		this.position = [0, 0, 0];
	}
	update(){
		this.position[0] += this.velocity[0];
		this.position[2] += this.velocity[2];
	}
	turn(val){
		this.angle += val;
	}
	accelerate(val){
		this.velocity[0] += val*Math.sin(this.angle*Math.PI/180.0);
		this.velocity[2] += val*Math.cos(this.angle*Math.PI/180.0);
		//------	Speed Limit
		if(this.velocity[0]>2){this.velocity[0]=2;}
		if(this.velocity[2]>2){this.velocity[2]=2;}
		if(this.velocity[0]<0){this.velocity[0]=0;}
		if(this.velocity[2]<0){this.velocity[2]=0;}
	}
	reset(){
		this.angle = 0;
		this.velocity = [0, 0, 0];
		this.position = [0, 0, 0];
		this.scene.pushMatrix();
		this.scene.translate(0, 0, -Math.sqrt(2)/2);
		this.scene.rotate(Math.PI * 270 / 180, 1, 0, 0);
		this.scene.rotate(Math.PI * 45 / 180, 0, 0, 1);
		this.vehicle.display();
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
		this.vehicle.display();
		this.scene.popMatrix();*/

		
		//this.scene.rotate(Math.PI * 90 / 180, 0, 0, 1);
		this.frontSphere.display();
		this.scene.popMatrix();
	}
} 
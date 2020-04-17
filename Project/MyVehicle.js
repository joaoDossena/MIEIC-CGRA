/**
 * MyVehicle
 * @constructor
 * @param scene - Reference to MyScene object
 */

class MyVehicle extends CGFobject {
	constructor(scene) {
		super(scene);
		this.vehicle = new MyTriangle(scene);
	}
	display(){
		this.scene.pushMatrix();
		this.scene.translate(0, 0, -Math.sqrt(2)/2);
		this.scene.rotate(Math.PI * 270 / 180, 1, 0, 0);
		this.scene.rotate(Math.PI * 45 / 180, 0, 0, 1);
		this.vehicle.display();
	}
} 
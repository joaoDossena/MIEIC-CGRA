/**
 * MyCube
 * @constructor
 * @param scene - Reference to MyScene object
*/
class MyCube extends CGFobject {
	constructor(scene) {
		super(scene);
        this.Square1 = new MyDiamond(scene);
	}
	display() {
        this.scene.pushMatrix();
        this.Square1.display();
        this.scene.popMatrix();
	}
}
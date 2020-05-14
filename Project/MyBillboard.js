/**
 * MyBillboard
 * @constructor
 * @param scene - Reference to MyScene object
 */

class MyBillboard extends CGFobject {
	constructor(scene, slices, stacks) {
		super(scene);
        this.poster = new MySquare(scene);
        this.processBar = new MySquare(scene);
        this.rod = new MyCylinder(scene, 10, 10);
    }
	update(timePassed){

	}

	reset(){

	}
	display(){
        this.scene.pushMatrix();
        this.poster.display();
	}

} 
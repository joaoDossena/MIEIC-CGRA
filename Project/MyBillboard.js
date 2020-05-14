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
        this.initMaterials();
    }
	update(timePassed){

	}
    
	reset(){

    }
    initMaterials(){
        this.posterMaterial = new CGFappearance(this.scene);
        this.posterMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.posterMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.posterMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.posterMaterial.setEmission( 0.3, 0.3, 0.3, 1 );
        this.posterMaterial.setShininess(10.0);
        this.posterMaterial.loadTexture('images/wood1.jpg');
        this.posterMaterial.setTextureWrap('REPEAT', 'REPEAT');


    }
	display(){

        this.scene.pushMatrix();
        this.posterMaterial.apply();
        this.scene.scale(2,1,1);
        this.poster.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0.97, -1.5, 0);
        this.scene.scale(0.03, 1, 0.03);
        this.rod.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-0.97, -1.5, 0);
        this.scene.scale(0.03, 1, 0.03);
        this.rod.display();
        this.scene.popMatrix();


	}

} 
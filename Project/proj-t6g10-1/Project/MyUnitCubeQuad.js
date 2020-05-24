class MyUnitCubeQuad extends CGFobject {
	constructor(scene) {
		super(scene);
        this.topFace = new MyQuad(scene);
        this.bottomFace = new MyQuad(scene);
        this.sideFace = new MyQuad(scene);
    }

    display(){
        /*Top Face*/
        this.scene.pushMatrix();
        this.scene.translate(0,0.5,0);
        this.scene.rotate(Math.PI*270/180, 1, 0, 0);   
        this.topFace.display();
        this.scene.popMatrix();

        /*Bottom Face*/
        this.scene.pushMatrix();
        this.scene.translate(0,-0.5,0);
        this.scene.rotate(Math.PI*90/180, 1, 0, 0);   
        this.bottomFace.display();
        this.scene.popMatrix();

        /*Right Face*/
        this.scene.pushMatrix();
        this.scene.translate(0.5,0,0);
        this.scene.rotate(Math.PI*90/180, 0, 1, 0);   
        this.sideFace.display();
        this.scene.popMatrix();

        /*Left Face*/
        this.scene.pushMatrix();
        this.scene.translate(-0.5,0,0);
        this.scene.rotate(Math.PI*270/180, 0, 1, 0);   
        this.sideFace.display();
        this.scene.popMatrix();

        /*Front Face*/
        this.scene.pushMatrix();
        this.scene.translate(0,0,0.5);
        this.sideFace.display();
        this.scene.popMatrix();

        /*Back Face*/
        this.scene.pushMatrix();
        this.scene.translate(0,0,-0.5);
        this.scene.rotate(Math.PI*180/180, 0, 1, 0);   
        this.sideFace.display();
        this.scene.popMatrix();
    }
}
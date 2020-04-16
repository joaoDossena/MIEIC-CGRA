class MyUnitCubeQuad extends CGFobject {
	constructor(scene) {
		super(scene);
        this.topFace = new MyQuad(scene);
        this.bottomFace = new MyQuad(scene);
        this.sideFace = new MyQuad(scene);
        this.initMaterials();
    }
    initMaterials(){
        //------ Applied Top face Material
        this.topFaceMatarial = new CGFappearance(this.scene);
        this.topFaceMatarial.setAmbient(0.1, 0.1, 0.1, 1);
        this.topFaceMatarial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.topFaceMatarial.setSpecular(0.1, 0.1, 0.1, 1);
        this.topFaceMatarial.setShininess(10.0);
        this.topFaceMatarial.loadTexture('images/mineTop.png');
        //------ Applied Bottom face Material
        this.bottomFaceMatarial = new CGFappearance(this.scene);
        this.bottomFaceMatarial.setAmbient(0.1, 0.1, 0.1, 1);
        this.bottomFaceMatarial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.bottomFaceMatarial.setSpecular(0.1, 0.1, 0.1, 1);
        this.bottomFaceMatarial.setShininess(10.0);
        this.bottomFaceMatarial.loadTexture('images/mineBottom.png');
        //------ Applied Side face Material
        this.sideFaceMatarial = new CGFappearance(this.scene);
        this.sideFaceMatarial.setAmbient(0.1, 0.1, 0.1, 1);
        this.sideFaceMatarial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.sideFaceMatarial.setSpecular(0.1, 0.1, 0.1, 1);
        this.sideFaceMatarial.setShininess(10.0);
        this.sideFaceMatarial.loadTexture('images/mineSide.png');
    }

    display(){
        /*Top Face*/
        this.topFaceMatarial.apply();
        if(this.scene.betterQualityImage){
            this.scene.nearestFiltering();
        }
        else{
            this.scene.linearFiltering();
        }
        this.scene.pushMatrix();
        this.scene.translate(0,0.5,0);
        this.scene.rotate(Math.PI*270/180, 1, 0, 0);   
        this.topFace.display();
        this.scene.popMatrix();

        /*Bottom Face*/
        this.bottomFaceMatarial.apply();
        if(this.scene.betterQualityImage){
            this.scene.nearestFiltering();
        }
        else{
            this.scene.linearFiltering();
        }
        this.scene.pushMatrix();
        this.scene.translate(0,-0.5,0);
        this.scene.rotate(Math.PI*90/180, 1, 0, 0);   
        this.bottomFace.display();
        this.scene.popMatrix();

        /*Right Face*/
        this.sideFaceMatarial.apply();
        if(this.scene.betterQualityImage){
            this.scene.nearestFiltering();
        }
        else{
            this.scene.linearFiltering();
        }
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
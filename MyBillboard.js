/**
 * MyBillboard
 * @constructor
 * @param scene - Reference to MyScene object
 */

class MyBillboard extends CGFobject {
	constructor(scene, slices, stacks) {
		super(scene);
        this.poster = new MyQuad(scene);
        this.progressBar = new MySquare(scene);
        this.rod = new MyCylinder(scene, 10, 10);
        this.initMaterials();
        this.suppliesDelivered = 0;
        this.progressBarShader = new CGFshader(scene.gl, "shaders/progressBar.vert", "shaders/progressBar.frag");
        this.progressBarShader.setUniformsValues({suppliesDelivered: this.suppliesDelivered});
        this.progressBarShader.setUniformsValues({progressPosition: (1.2/5.0) * this.suppliesDelivered -0.6});

        
        
    }
	update(selectedSupply){
        this.suppliesDelivered = selectedSupply;
        this.progressBarShader.setUniformsValues({suppliesDelivered: this.suppliesDelivered});
        this.progressBarShader.setUniformsValues({progressPosition: (1.2/5.0) *this.suppliesDelivered -0.6});



	}
    
	reset(){
        this.suppliesDelivered = 0;
        this.progressBarShader.setUniformsValues({suppliesDelivered: this.suppliesDelivered});
        this.progressBarShader.setUniformsValues({progressPosition: (1.2/5.0) * this.suppliesDelivered -0.6});



    }
    initMaterials(){
        this.posterMaterial = new CGFappearance(this.scene);
        this.posterMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.posterMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.posterMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.posterMaterial.setEmission( 0.5, 0.5, 0.5, 1 );
        this.posterMaterial.setShininess(10.0);
        this.posterMaterial.loadTexture('images/PosterTexture.png');
        this.posterMaterial.setTextureWrap('REPEAT', 'REPEAT');

        this.processMaterial = new CGFappearance(this.scene);
        this.processMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.processMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.processMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.processMaterial.setEmission( 0.3, 0.3, 0.3, 1 );
        this.processMaterial.setShininess(10.0);
        this.processMaterial.loadTexture('images/SovietUnion.jpg');
        this.processMaterial.setTextureWrap('REPEAT', 'REPEAT');

        this.rodMaterial = new CGFappearance(this.scene);
        this.rodMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.rodMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.rodMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.rodMaterial.setEmission( 0.3, 0.3, 0.3, 1 );
        this.rodMaterial.setShininess(10.0);
        this.rodMaterial.loadTexture('images/ironGrey.jpg');
        this.rodMaterial.setTextureWrap('REPEAT', 'REPEAT');

    }
	display(){
        //Poster
        this.posterMaterial.apply();
        this.scene.pushMatrix();
        this.scene.scale(2,1,1);
        this.poster.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.rotate(Math.PI * 180 / 180, 0, 1, 0);
        this.scene.scale(2,1,1);
        this.poster.display();
        this.scene.popMatrix();

        //Rods
        this.scene.pushMatrix();
        this.rodMaterial.apply();

        this.scene.translate(0.97, -1.5, 0);
        this.scene.scale(0.03, 1, 0.03);
        this.rod.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-0.97, -1.5, 0);
        this.scene.scale(0.03, 1, 0.03);
        this.rod.display();
        this.scene.popMatrix();

        //process bar
        this.scene.setActiveShader(this.progressBarShader);
        this.scene.pushMatrix();
        this.scene.scale(1.5,0.2,1);
        this.progressBar.display();
        this.scene.popMatrix();
	}

} 
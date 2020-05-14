class MyAirship extends CGFobject {
	constructor(scene, slices, stacks) {
		super(scene);
		this.gondola = new MyGondola(scene, slices, stacks);
		this.balloon = new MyEllipsoid(scene, slices, stacks);

		this.leftTurbine = new MyTurbine(scene, slices / 2, stacks / 2);
		this.rightTurbine = new MyTurbine(scene, slices / 2, stacks / 2);

		this.topWing = new MySquare(scene);
		this.leftWing = new MySquare(scene);
		this.bottomWing = new MySquare(scene);
		this.rightWing = new MySquare(scene);

		this.flag1 = new MyPlane(scene, 50);
		this.flag2 = new MyPlane(scene, 50);


		this.rudderAngle = 0;
		this.elapsedTime = 0;
		this.speed = 0;


		this.scene.initDefaultMaterial();
		this.initMaterials();

		this.flagShader = new CGFshader(scene.gl, "shaders/flag.vert", "shaders/flag.frag");
        //this.flagTexture = new CGFtexture(this, "images/nasa.png");
		this.flagShader.setUniformsValues({flagTexture: 5 });

        this.flagShader.setUniformsValues({speed: 7});
		this.flagShader.setUniformsValues({timeFactor: this.elapsedTime});
		

	}

	initMaterials(){
		this.flagTex = new CGFappearance(this.scene);
        this.flagTex.setAmbient(0.1, 0.1, 0.1, 1);
        this.flagTex.setDiffuse(0.9, 0.9, 0.9, 1);
        this.flagTex.setSpecular(0.1, 0.1, 0.1, 1);
        this.flagTex.setShininess(10.0);
        this.flagTex.loadTexture('images/SovietUnion.jpg');
        this.flagTex.setTextureWrap('REPEAT', 'REPEAT');
	}
	update(timePassed, currentSpeed){
		this.elapsedTime += timePassed;
		this.speed = currentSpeed;
		this.flagShader.setUniformsValues({timeFactor: this.elapsedTime});
        this.flagShader.setUniformsValues({speed: this.speed});
	}

	display() {
		this.scene.DefaultMaterial.apply();
		//Balloon
		this.balloon.display();

		//Gondola
		this.scene.pushMatrix();
		this.scene.scale(0.5, 0.5, 0.5);
		this.scene.translate(0, -0.5, 0);
		this.gondola.display();
		this.scene.popMatrix();

		//Left Turbine
		this.scene.pushMatrix();
		this.scene.translate(0.25, -1, -0.9);
		this.scene.scale(0.1, 0.1, 0.1);
		this.leftTurbine.display();
		this.scene.popMatrix();

		//Right Turbine
		this.scene.pushMatrix();
		this.scene.translate(-0.25, -1, -0.9);
		this.scene.scale(0.1, 0.1, 0.1);
		this.rightTurbine.display();
		this.scene.popMatrix();

		//Top Wing
		this.scene.pushMatrix();
		this.scene.translate(0, 0.5, -1.5);
		this.scene.rotate(Math.PI / 2, 0, 1, 0);
		this.scene.scale(0.7, 0.7, 0.7);
		this.scene.rotate(Math.PI * this.rudderAngle / 180, 0, 1, 0);
		this.topWing.display();
		this.scene.popMatrix();

		//Left Wing
		this.scene.pushMatrix();
		this.scene.translate(0.5, 0, -1.5);
		this.scene.rotate(Math.PI / 2, 1, 0, 0);
		this.scene.scale(0.7, 0.7, 0.7);
		this.leftWing.display();
		this.scene.popMatrix();

		//Bottom Wing
		this.scene.pushMatrix();
		this.scene.translate(0, -0.5, -1.5);
		this.scene.rotate(Math.PI / 2, 0, 1, 0);
		this.scene.scale(0.7, 0.7, 0.7);
		this.scene.rotate(Math.PI * this.rudderAngle / 180, 0, 1, 0);
		this.bottomWing.display();
		this.scene.popMatrix();


		//Right Wing
		this.scene.pushMatrix();
		this.scene.translate(-0.5, 0, -1.5);
		this.scene.rotate(Math.PI / 2, 1, 0, 0);
		this.scene.scale(0.7, 0.7, 0.7);
		this.rightWing.display();
		this.scene.popMatrix();

		//Puts rudder back in position
		this.rudderAngle *= 0.9;
		
		//Flag front
		
		this.scene.setActiveShader(this.flagShader);
		this.flagTex.apply();
		this.scene.pushMatrix();
		//this.flagTexture.bind(5);
		this.scene.translate(0, 0, -4.3);
		this.scene.rotate(Math.PI * -90 / 180, 0, 1, 0);
		this.scene.scale(5, 2, 4);
		this.flag1.display();
		this.scene.popMatrix();
		//this.scene.setActiveShader(this.scene.defaultShader);
		
		//Flag back
		
		//this.scene.setActiveShader(this.flagShader);
		this.scene.pushMatrix();
		//this.flagTexture.bind(5);
		this.scene.translate(0, 0, -4.3);
		this.scene.rotate(Math.PI * 90 / 180, 0, 1, 0);
		this.scene.scale(5, 2, 4);
		this.flag2.display();
		this.scene.popMatrix(); 
		this.scene.setActiveShader(this.scene.defaultShader);

	}

}

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

		this.rope = new MyCylinder(scene, slices, stacks);


		this.rudderAngle = 0;
		this.elapsedTime = 0;
		this.speed = 0;


		this.scene.initDefaultMaterial();
		this.initMaterials();

		this.flagShader = new CGFshader(scene.gl, "shaders/flag.vert", "shaders/flag.frag");
		this.flagShader.setUniformsValues({flagTexture: 5 });

        this.flagShader.setUniformsValues({speed: 7});
		this.flagShader.setUniformsValues({timeFactor: this.elapsedTime});
		

	}
	initMaterials(){
		this.flagMaterial = new CGFappearance(this.scene);
        this.flagMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.flagMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.flagMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.flagMaterial.setShininess(10.0);
        this.flagMaterial.loadTexture('images/SovietUnion.jpg');
		this.flagMaterial.setTextureWrap('REPEAT', 'REPEAT');
		
        this.AirShipMaterial = new CGFappearance(this.scene);
        this.AirShipMaterial.setAmbient(0.3, 0.3, 0.3, 1);
        this.AirShipMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.AirShipMaterial.setSpecular(0.3, 0.3, 0.3, 1);
        this.AirShipMaterial.setEmission( 0.8, 0.8, 0.8, 1 );
        this.AirShipMaterial.setShininess(10.0);
        this.AirShipMaterial.loadTexture('images/SovietNasa.png');
		this.AirShipMaterial.setTextureWrap('REPEAT', 'REPEAT');
		
		this.TurbineMaterial = new CGFappearance(this.scene);
        this.TurbineMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.TurbineMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.TurbineMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.TurbineMaterial.setEmission( 0.3, 0.3, 0.3, 1 );
        this.TurbineMaterial.setShininess(10.0);
        this.TurbineMaterial.loadTexture('images/silver.jpg');
		this.TurbineMaterial.setTextureWrap('REPEAT', 'REPEAT');

		this.GoldenMaterial = new CGFappearance(this.scene);
        this.GoldenMaterial.setAmbient(0.8, 0.8, 0.8, 1);
        this.GoldenMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.GoldenMaterial.setSpecular(0.8, 0.8, 0.8, 1);
        this.GoldenMaterial.setEmission( 0.7, 0.7, 0.7, 1 );
        this.GoldenMaterial.setShininess(10.0);
        this.GoldenMaterial.loadTexture('images/gold.jpg');
        this.GoldenMaterial.setTextureWrap('REPEAT', 'REPEAT');
	}
	update(timePassed, currentSpeed){
		this.elapsedTime += timePassed;
		this.speed = currentSpeed;
		this.flagShader.setUniformsValues({timeFactor: this.elapsedTime});
        this.flagShader.setUniformsValues({speed: this.speed});
	}

	display() {
		
		
		//Balloon
		this.AirShipMaterial.apply();
		this.balloon.display();
		//Gondola
		this.GoldenMaterial.apply();
		this.scene.pushMatrix();
		this.scene.scale(0.5, 0.5, 0.5);
		this.scene.translate(0, -0.5, 0);
		this.gondola.display();
		this.scene.popMatrix();

		//Left Turbine
		this.TurbineMaterial.apply();
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
		this.GoldenMaterial.apply();
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

		//Ropes
		this.scene.pushMatrix();
		this.scene.translate(0, -0.25, -1.5);
		this.scene.rotate(Math.PI * -90 / 180, 1, 0, 0);
		this.scene.scale(0.01, 3.0, 0.01);
		this.rope.display();
		this.scene.popMatrix();
		this.scene.pushMatrix();
		this.scene.translate(0, 0.25, -1.5);
		this.scene.rotate(Math.PI * -90 / 180, 1, 0, 0);
		this.scene.scale(0.01, 3.0, 0.01);
		this.rope.display();
		this.scene.popMatrix();
		//this.scene.rotate();
		
		//Flag front
		this.scene.setActiveShader(this.flagShader);
		this.flagMaterial.apply();
		this.scene.pushMatrix();
		this.scene.translate(0, 0, -7);
		this.scene.rotate(Math.PI * -90 / 180, 0, 1, 0);
		this.scene.scale(5, 2, 4);
		this.flag1.display();
		this.scene.popMatrix();
		
		//Flag back
		this.scene.pushMatrix();
		this.scene.translate(0, 0, -7);
		this.scene.rotate(Math.PI * 90 / 180, 0, 1, 0);
		this.scene.scale(5, 2, 4);
		this.flag2.display();
		this.scene.popMatrix(); 
		this.scene.setActiveShader(this.scene.defaultShader);

		this.scene.DefaultMaterial.apply();
	}

}
